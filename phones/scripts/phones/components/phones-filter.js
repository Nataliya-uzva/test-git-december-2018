import Component from '../../copmonent.js';

export default class PhonesFilter extends Component {
    constructor({ element }) {
        super({ element });

        this._element = element;

        this._render();

        this.on('change', '[data-element="select"]', (event) => {
            this._trigger('changeOrder', event.target.value);
        });

        this.on('input', '[data-element="search"]', (event) => {
            this._trigger('search', event.target.value);
        });
    }

    _render() {
        this._element.innerHTML = `
      <p>
        Search:
        <input data-element="search">
      </p>
      <p>
        Sort by:
        <select data-element="select">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
    }
}
