var queenAttack = function(initalposition, endposition){

	if (initalposition[1] === endposition[1]){
		return true;
	} else if (initalposition[0] === endposition[0]){
		return true;
	} else {
		return false;
	}
};