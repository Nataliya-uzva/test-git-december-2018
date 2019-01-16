const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const autoprefixer = require('autoprefixer');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['./js/index.js', './scss/style.scss'],
  output: {
    filename: './js/[name].js',
  },
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     ident: 'postcss',
          //     sourceMap: true,
              // plugins: () => [
              //   require('cssnano')({
              //     preset: [
              //       'default',
              //       {
              //         discardComments: {
              //           removeAll: true,
              //         },
              //       },
              //     ],
              // }),
              // ],
              // sourceMap: true,
            // },
					//},
					{
						loader: 'postcss-loader',
						options: {
								plugins: [
										autoprefixer({
												browsers:['ie >= 8', 'last 4 version']
										})
								],
								sourceMap: true
						}
				},
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/main.css',
    }),
    new CleanWebpackPlugin(['./dist/*.*']),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
    }),
    new CopyWebpackPlugin([
      {
        from: './fonts',
        to: './fonts',
      },
      {
        from: './favicon',
        to: './favicon',
      },
      {
        from: './img',
        to: './img',
      },
    ]),
  ].concat(
    htmlPlugins,
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 4,
          indent_with_tabs: true,
          indent_inner_html: true,
          preserve_newlines: false,
          unformatted: ['b'],
        },
      },
      replace: [' type="text/javascript"'],
    })
  ),
};
