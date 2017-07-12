/*$(document).ready(function(){
    for(var i=0; i<16; i++){
	for(var j=0; j<16; j++){
	    console.log('o');
	    $("<div class='square'></div>").appendTo('body');
	}}
     $('.square').css({'width': 100px, 'height': 100px});
});*/
$(document).ready(function(){
    var contclick=0;
    for(var i=0; i<16; i++){
	
	for(var j=0; j<16; j++){
    
 $(".container").append("<div class=\"square\"></div>");

	}
//	$(".container").append("</br>");
}

    $(".container").mousedown(function(){
	contclick=1;
//	$(this).addClass("on");
//	$(".on").css("background-color","orange");
  }).mouseup(function(){
	contclick=0;
    });
        $(".square").mouseout(function(){
	    if(contclick==1)
		$(this).addClass("on");
	});
});


			     
