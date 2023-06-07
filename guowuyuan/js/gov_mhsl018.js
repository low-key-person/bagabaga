$(document).ready(function(){	
		$(".u .scrol li:first").addClass("selected")
		var indexList = 0;  
		$(".tab_title ul li").click(function(){
			indexList = $(".tab_title ul li").index(this);
			$(this).addClass("selected").siblings().removeClass("selected");
			$(".tab_content .image").eq(indexList).show().siblings().hide();
		});
		var i = 6;  //定义每个面板显示8个菜单
		var len = $(".u .scrol li").length;  //获得LI元素的个数
		var page = 1;
		var maxpage = Math.ceil(len/i);
		var scrollWidth = $(".u").width();
		$(".vright").click(function(e){
			if(!$(".u .scrol").is(":animated")){
			if(page == maxpage ){
				$(".u .scrol").stop();
				$("#div1").css({
					"top": (e.pageY + 20) +"px",
					"left": (e.pageX + 20) +"px",
					"opacity": "0.9"
				
				}).stop(true,false).fadeIn(800).fadeOut(800);
				
			}else{
				$(".u .scrol").animate({left : "-=" + 900 +"px"},1000);
				page++;
			}
			}
		});
		$(".vleft").click(function(){
		if(!$(".u .scrol").is(":animated")){
			if(page == 1){
			$(".u .scrol").stop();
			}else{
			$(".u .scrol").animate({left : "+=" + 900 +"px"},1000);
			page--;
			}
			}
		});
})