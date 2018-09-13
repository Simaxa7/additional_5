module.exports = function check(str, bracketsConfig) {
	var arr = [];
	arr2=bracketsConfig.length;
	for (var i = 0; i < bracketsConfig.length; i++) {
		arr[i]=bracketsConfig[i][0]+bracketsConfig[i][1];
	}

	for (var i = 1; i < 2 && i>0 ; i++) {
		let startLength=str.length;
			
			for (var j = 0; j < arr.length; j++) {
				str = str.split(arr[j]).join('');
			}

		let finishLength=str.length;
		
		i = startLength==finishLength ? 100 : 0;
		if (finishLength == 0){
			return true
		}
	}
	return false
}

