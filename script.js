var contclick=0;
var c=0;
var a=0;
$(document).ready(function(){

    
    makeGrid();
    a++;
    console.log("yolo");
    $(".container").mousedown(colourGrid());
    $('.reset').mousedown(function(){
	makeGrid();
}
			 );
});
			     
function makeGrid(){

	
    $(".container").empty();
	

    var gridSize = prompt("Size of Sketchpad?(2-100)");   

    var gridSpacing = 100/gridSize;
    
    for(var i=0; i<gridSize*gridSize; i++){
    
	    $(".container").append("<div class=\"square\"></div>");
    }

    var elements = document.querySelectorAll('.square');

    for(var i=0; i<elements.length; i++){
	elements[i].style.width = gridSpacing + "%";
	elements[i].style.height = gridSpacing + "%";
    }
}

function colourGrid(){
    console.log("colour");
    console.log(c++);

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

function clearGrid(){
    console.log("yolo00");
    $('.square').css("background-color", "lightblue");
}


function test(){
    console.log(c++);
}

