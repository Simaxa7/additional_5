module.exports = function check(str, bracketsConfig) {
	
	let openAndCloseBrakets = [];
	
	let strForChange = str;
	let brackets = bracketsConfig;
	let bracketsConfigLength = brackets.length;

	for (let i = 0; i < bracketsConfigLength; i++) {
		openAndCloseBrakets[i] = brackets[i][0] + brackets[i][1];
	}

	for (let i = 1; i < 2; i++) {
		let startLength = strForChange.length;
			
		for (let j = 0; j < openAndCloseBrakets.length; j++) {
			strForChange = strForChange.split(openAndCloseBrakets[j]).join('');
		}

		let finishLength = strForChange.length;
		
		if(startLength !== finishLength) i = 0;
		if (finishLength === 0) return true;

	}

	return false
}