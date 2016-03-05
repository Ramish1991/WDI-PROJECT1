$(document).ready(function() {

	var playerOneScore = 0
	var playerTwoScore = 0

	var currentPlayer = 1 
	var round = 1

	var playerOneScoreElement = $('.score.player1')
	var playerTwoScoreElement = $('.score.player2') 

	function pickCells() {

		var counter = 1

		for (var i = 0; i < 4; i++) {

 		setTimeout(function() { // LETS TD CELLS APPEAR EACH BY EACH

 			var cells = $("td:not(.selected)")
 			var randomIndex = Math.floor(Math.random() * (cells.length-1))

 			var currentCell = $(cells[randomIndex])
 			currentCell.addClass("cell" + counter)
 			counter++

 			currentCell.addClass("selected")
 		}, i * 1000);
 	}
 	setTimeout(function(){
 		$("td.selected").removeClass("selected")
 	}, i * 1000)
 }

// START BUTTON IS SWITCHED TO RESET BUTTON
 document.getElementById('begin-btn').onclick = function() {
 	pickCells();
 	$('#begin-btn').attr('id', 'reset-btn')
 	document.getElementById('reset-btn').onclick = function() {
 		resetBoard();
 	}
 }

 function resetBoard() {
 	$("td").removeClass("selected cell1 cell2 cell3 cell4");
 	userSelect = 1
	pickCells(); // pick new cells
	// change player
	if (currentPlayer === 1) {
		currentPlayer = 2
	} else  {
		currentPlayer = 1					
	}
	if (round === 6){
		alert("Game Over");
		
		if (playerOneScore > playerTwoScore){
			alert ("Player 1 won!") 
		}  else {
			alert ("Player 2 won!")
		}
	}

	round++
}

var userSelect = 1;

$("td").on("click", function(){
	console.log(currentPlayer)
	var cell = $(this)
	if(cell.hasClass("cell"+ userSelect)){
		if(userSelect === 4) {
			
			setTimeout(
				function(){

					if (currentPlayer === 1){
						playerOneScore++
						// alert("Player 1 scored " + playerOneScore)
					} else {
						playerTwoScore++
						// alert("Player 2 scored " + playerTwoScore)
					}
					playerOneScoreElement.text(playerOneScore)
					playerTwoScoreElement.text(playerTwoScore)
					
					resetBoard();
					console.log("playerOneScore", "playerTwoScore")
				},
				2000
				)

		}
		userSelect++
		cell.addClass("selected")
	} else {
		alert("You lost!")
		resetBoard();
	}

});


});
