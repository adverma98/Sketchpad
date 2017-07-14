$(document).ready(function(){
    var contclick=0;
    makeGrid();

    $(".container").mousedown(colourGrid());

});

$(".reset").click(makeGrid());

			     
function makeGrid(){
    
    var gridSize = prompt("Size of Sketchpad?(2-100)");
    
    for(var i=0; i<gridSize; i++){
	for(var j=0; j<gridSize; j++){
    
	    $(".container").append("<div class=\"square\"></div>");
	    $(".square").height(832/gridSize).width(832/gridSize);

	}
    } 
}

function colourGrid(){
    
    $(".container").mousedown(function(){
	contclick=1;	
    }).mouseup(function(){	
	contclick=0;	
    });
        
    $(".square").mouseout(function(){
	if(contclick==1)
	    $(this).addClass("on");
    });

}





