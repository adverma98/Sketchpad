/*$(document).ready(function(){

    for(var i=0; i<16; i++){
	
	for(var j=0; j<16; j++){
	    console.log('o');
	    $("<div class='square'></div>").appendTo('body');

	}}
     $('.square').css({'width': 100px, 'height': 100px});
	

});*/
$(document).ready(function(){

    for(var i=0; i<16; i++){
	
	for(var j=0; j<16; j++){
    
   $("div").height("200px");
   $("div").width("200px");
   $("div").css("border-radius","10px");

	}}


});
function makeGrid() {
   for (var x = 0; x < numberSquares; x++) {
      for (var y = 0; y < numberSquares; y++) {
         $("<div class='square'></div>").appendTo('.container');
      }
   }
   $('.square').css({'width': squareSize, 'height': squareSize});
}

