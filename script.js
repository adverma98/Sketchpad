var contclick=0;
var gridSize=16;


$(document).ready(function(){

    makeGrid();


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

    var color="teal";

 /*   if(getId('whiteRadio').checked)
	color="lightblue";
    else if(getId('rgbRadio').checked)
	color=randRGB();
    else if(getId('rainbowRadio').checked)
	color=randRainbow();*/
    
 /*   if(isRainbow){
    	var letters = '0123456789ABCDEF';
	     color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
    }*/

    $(".container").mousedown(function(){
	contclick=1;	
    }).mouseup(function(){	
	contclick=0;	
    });
    $(".square").mouseout(function(){
	if(contclick==1){
	 if(getId('eraserRadio').checked)
	color="#6db4e9e6";
    else if(getId('redRadio').checked)
	color='red';
    else if(getId('blueRadio').checked)
	color='blue';
    else if(getId('blackRadio').checked)
	color='black';
	    	    
    else if(getId('greenRadio').checked)
	color='green';
    else if(getId('yellowRadio').checked)
	color='yellow';
    else if(getId('whiteRadio').checked)
	color='white';
    else if(getId('pinkRadio').checked)
	color='pink';
    else if(getId('orangeRadio').checked)
	color='orange';
    else if(getId('rainbowRadio').checked)
	color=randRainbow();
	   // $(this).addClass("on");
	    $(this).css("background-color", color);

	}
    });
    

}

function clearGrid(){
    $('.square').css("background-color", "lightblue");
}



function getId( i) {
  return document.getElementById(i);
};


function rand( i){

    return Math.floor(Math.random()*i);
    
};

function randRainbow(){

    return 'rgb('+rand(255)+','+rand(255)+','+rand(255)+')';
};

