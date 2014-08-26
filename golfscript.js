 window.onload = function(){
 
	/*Check to see if filter is selected*/
	var boolbrandTitleist = false;
	var boolbrandCallaway = false;
	var boolbrandWilson = false;
	var boolbrandBridgestone= false;
	
	var boolbrand0 = false;
	var boolbrand1 = false;
	var boolbrand2 = false;
	var boolbrand3 = false;
	
	
/*	
	$('#tileProducts').freetile({
		animate: true,
		elementDelay: 30
	});

	$('#tileProducts').on("click", ".product", function () {
		this.remove();
		$('#tileProducts').freetile({
		animate: true,
		elementDelay: 30
	});
	});*/

	/*Moving side menu out on hover and retact off hover*/
	$(".sideNavTab, .sideNav").hover(function(){

		$(".sideNav").css("left", "0");
		$(".sideNavTab").css("left", "152px");
		
	}, function(){$("#content,#itemCategory").hover(function(){
		$(".sideNav").css("left", "-192px");
		$(".sideNavTab").css("left", "-40px");


		$(".sideNav").css("left", "");
		$(".sideNavTab").css("left", "");
		});
		});
	
	/*Insert check mark when clicking a filter element*/
	$("#sideNavTable a").click(
		
		function(){
			/*var name = $(this).html();
			if(!eval("boolbrand"+name)){*/
				$(this).next().append("&#x2713;");
			/*}*/
		
			
			/*else{
				$(this).next().html("");
				boolbrandTitleist = false;
			}*/
		}
		
	);
	
	
	$('.thumb').click(function(){
		$('#bigpicball1').attr("src", $(this).attr("src"));				
	});
	
	
	$('.spaninfo').click(function(){
			$('.productinfo').css({"display":"block"});	
			$('.spaninfo').css({"background-color":"#FFF", "border-bottom-color":"#FFF"});				
			$('.productreview').css({"display":"none"});	
			$('.spanreview').css({"background-color":"#CCC", "border-bottom-color":"#CCC"});		
	});
	$('.spanreview').click(function(){
			$('.productinfo').css({"display":"none"});	
			$('.spaninfo').css({"background-color":"#CCC", "border-bottom-color":"#CCC"});				
			$('.productreview').css({"display":"block"});	
			$('.spanreview').css({"background-color":"#FFF","border-bottom-color":"#FFF"});		
	});
	
	
	
	var products = $('.product')
	$('.product').click(function(){
		var idNum = ($(this).attr("id")[4]);
		$('#popball'+idNum).css("display", "block");
		$('body').css({"overflow-y":"hidden"});
		$(html).css("overflow-y", "hidden");
	});
	
	
	$('.crosspic').click(function(){
		$('.productdetail').css("display", "none");
		$('body').css("overflow-y", "scroll");
		$(html).css("overflow-y", "scroll");
	});
}