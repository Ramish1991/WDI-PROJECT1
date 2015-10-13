$(document).ready(function() {



	function hideAllBoxes() {

		var allBoxes = $(".box");

		for (var i = 0; i < allBoxes.length; i++) {

			var box = allBoxes[i];

			setTimeout(function(box){
				$(box).show()
			}, 1000*i, box);
		}
	};

	hideAllBoxes();

	$(".box").on("click", function(){

		var boxWhichWasClicked = $(this);
		console.log(boxWhichWasClicked.attr("id") + ' works!')

	  boxWhichWasClicked.delay(100).queue(function() {
			$(boxWhichWasClicked).css("background-color", "white");
		})

})



	// to create the sequence showing different boxes, 
	// need to use setInterval and then store the ID of the boxes shown in an array to save the order, and compare to the user choice 

	

	
});
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