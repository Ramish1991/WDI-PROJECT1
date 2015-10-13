$(document).ready(function() {

$(function (){
	$(".box").on("click", function(){

		var boxWhichWasClicked = $( this );
		console.log(boxWhichWasClicked.attr("id") + ' works!');


		// $(boxWhichWasClicked).animate({"background-color", "blue"});
		// boxWhichWasClicked.addClass("noColour");
		// boxWhichWasClicked.removeClass("noColour");

	// $(boxWhichWasClicked).css("background-color", "red");
	// p.show(1500);
	$(boxWhichWasClicked).css("background-color", "red");

	boxWhichWasClicked.delay(100).queue(function() {
		$(boxWhichWasClicked).css("background-color", "white");
	  });

	});
})


$(function hideAllBoxes() {

	var allBoxes = $(".box");

	for (var i = allBoxes.length - 1; i >= 0; i--) {

		var box = allBoxes[i];

		// var p = $(box).css("background-color", "yellow");
		// p.hide;

	}; 

})

});
