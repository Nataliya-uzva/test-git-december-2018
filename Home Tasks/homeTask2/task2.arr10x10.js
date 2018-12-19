var arr = [], len = 10, counter = 0;
for (var i = 0; i < len; i++) {
	arr[i] = [];

	for (var j = 0; j < len; j++, counter++) {
		arr[i][j] = counter;
	}
}


var len;
for (var i = 0, len = arr.length; i < len; ++i) {
	//console.log(arr[i]);
	for (var j = 0; j < 10; j++) {
		//console.log(arr[i][j]);
		var counter = arr[i][j];
		if ((counter % 3 === 0) && (counter % 5 === 0)){
			arr[i][j] = ('BOOM') ;
		} else if (counter % 3 === 0) {
			arr[i][j] = ('super') ;
		} else if ( counter % 5 === 0 ) {
			arr[i][j] = ('buper') ;
    	} 
	}		

}


var arr2 = [], len = 10, counter = 0;
for (var i = 0; i < len; i++) {
	arr2[i] = [];

	for (var j = 0; j < len; j++, counter++) {
		arr2[i][j] = counter;
	}
}


