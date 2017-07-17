var contclick=0;
var gridSize=16;

$(document).ready(function(){

    makeGrid();
    $('#colorChange').click(function(){
	genRainbow();
    });
    
//    $('#colorChange').data('toggle', !$('#colorChange').data('toggle'));


 //   makeGrid();
    $(".container").mousedown(function(){
	colourGrid();
    });
    
    $('.reset').mousedown(function(){
	makeGrid();
    });
    
});
			     
function makeGrid(){

    $(".container").empty();

    	
   
    gridSize = prompt("Size of Sketchpad?(2-100)","16");   

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
    $('.square').css("background-color", "lightblue");
}


function genRainbow() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
    	$(".rainbow").css({'background-color': color});
        $(".container").mousedown(function(){
	contclick=1;	
    }).mouseup(function(){	
	contclick=0;	
    });
        
    $(".square").mouseout(function(){
	if(contclick==1)
	    $(this).addClass("rainbow");
    });
    	$(".rainbow").css({'background-color': color});
}
