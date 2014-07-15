var queenAttack = function(initalposition, endposition){

	if ((Math.abs(endposition[0] - initalposition[0])) === (Math.abs(endposition[1] - initalposition[1]))){
		return true;
	} else if (initalposition[1] === endposition[1]){
		return true;
	} else if (initalposition[0] === endposition[0]){
		return true;
	} else {
		return false;
	}
};