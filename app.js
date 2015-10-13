$(document).ready(function() {

	// function hideAllBoxes() {

	// 	var allBoxes = $(".box");

	// 	for (var i = 0; i < allBoxes.length; i++) {

	// 		var box = allBoxes[i];

	// 		setTimeout(function(box){
	// 			$(box).show()
	// 		}, 1000*i, box);
	// 	}
	// };

	function pickCells() {
		
		var counter = 1

    for (var i = 0; i < 4; i++) {

    	setTimeout(function() {

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
    }, 4000)
  }

	pickCells();

	var userSelect = 1;

	$("td").on("click", function(){
		var cell = $(this)
		if(cell.hasClass("cell"+ userSelect)){
			userSelect++
			cell.addClass("selected")
		} else {
			console.log("End Game")
		}
		// do stuff on click

	});
});

// Execute hideAllBoxes
	// hideAllBoxes();

	// Shuffling cells added from net
	// shuffle($("table tbody"));
	//     function shuffle(tbl) {
	//         var arr = tbl.find("td");
	//         for(
	//           var j, x, i = arr.length; i;
	//           j = parseInt(Math.random() * i),
	//           x = arr[--i], arr[i] = arr[j], arr[j] = x
	//         );

	//         var tmp;
	//         var rows = tbl.find("tr").length

	//         var cols = tbl.find("tr:first td").length

	//         for (i = 0; i < rows; i++){
	//             tmp = tbl.find("tr").eq(i);
	//             tmp.html()
	//             for (j = 0; j < cols; j++)
	//                 tmp.append(arr[i*cols+j]);
	//         }       
	//   }

// var movingBoxes = [box1, box2, box3, box4]



// 	$(".box").on("click", function(){

// 		var boxWhichWasClicked = $(this);
// 		console.log(boxWhichWasClicked.attr("id") + ' works!')

// 	  boxWhichWasClicked.delay(100).queue(function() {
// 			$(boxWhichWasClicked).css("background-color", "white");
// 		})

// })



// need to grab all cells and randomize the order before showing them
// then store the ID of the boxes shown in an array to save the order, and compare to the user choice 
	
// });
		// $(box).on(click. function(){

		// })
		// var p = $(box).css("background-color", "yellow");
		// p.hide;

// $(function showRandomBoxes() {
// 	$(box).show.math.random()
// });


	// $(boxWhichWasClicked).animate({"background-color", "blue"});
	// boxWhichWasClicked.addClass("noColour");
	// boxWhichWasClicked.removeClass("noColour");
  // p.show(1500);
// $(boxWhichWasClicked).css("background-color", "red");