var queenAttack = function(initialPosition, endPosition){

var result;

	if ((Math.abs(endPosition[0] - initialPosition[0])) === (Math.abs(endPosition[1] - initialPosition[1]))){
		return true;
	} else if (initialPosition[1] === endPosition[1]){
		return true;
	} else if (initialPosition[0] === endPosition[0]){
		return true;
	} else {
		return false;
	}
};

$(document).ready(function(){
	$("form#queenattack").submit(function(event){

		var initialPositionX = parseInt($("input#initialpositionx").val());
		var initialPositionY = parseInt($("input#initialpositiony").val());
		var endPositionX = parseInt($("input#endpositionx").val());
		var endPositionY = parseInt($("input#endpositiony").val());

		var initialPosition = [initialPositionX, initialPositionY];
		var endPosition = [endPositionX, endPositionY];

		var potentialAttack = queenAttack(initialPosition, endPosition);


		if (potentialAttack) {
			$('#not').text('');
		} else {
			$('#not').text('not');
		}

		$("#result").show();
		

		event.preventDefault();
	});
});