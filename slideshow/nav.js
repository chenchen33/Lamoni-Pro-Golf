var current = 6;

function showNext(index){
	$("#item" + current).animate({"left":"-980px"},2000);
	$("#dot" + current).attr("src", "slideshow/dot.png");
	
	current = index || current % 6 + 1;
	$("#item" + current).show().animate({"left":"980px"},0).animate({"left":"0px"},2000);
	$("#dot" + current).attr("src", "slideshow/reddot.png");
}


function showPrev(index){
	$("#item" + current).animate({"left":"980px"},2000);
	$("#dot" + current).attr("src", "slideshow/dot.png");
	
	current = index ||  (current % 7 - 1 == 0 ? 6 : current % 7 - 1);
	$("#item" + current).show().animate({"left":"-980px"},0).animate({"left":"0px"},2000);
	$("#dot" + current).attr("src", "slideshow/reddot.png");
}

$(document).ready(function(){
	$(".dottab img").click(function(){
		index = this.id[3];
		if (index > current){
			showNext(index);
		} else{
			showPrev(index);
		}
	});
	
	
	$(".slideshow").hover(function () {
		clearInterval(st);
		return false;
	},function(){
		st = setInterval(function(){showNext();}, 10000);
	});
	
	$("#prev").click(function(){ showPrev(); });
	$("#next").click(function(){ showNext(); });

});