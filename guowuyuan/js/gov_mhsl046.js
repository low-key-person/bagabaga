$(document).ready(function(){       
    $('#demo-06').jCarouselLite({
        btnPrev: '#prev-06',
        btnNext: '#next-06',
        visible: 4,
        vertical: true,
        circular:false,
		scroll:1
    });     
    $(".jCarouselLite-01 li:first").addClass("selected")
    $(".dateconList .abox:first").show();
    $(".jCarouselLite-01 li").click(function(){
        index = $(".jCarouselLite-01 li").index(this);
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".dateconList .abox").eq(index).show().siblings().hide(); 
        
    })

	var index = 0;
	$(".ccrolltab .ulSmallPic li ").click(function(){
		 index = $(this).index();

		$(".jCarouselLite-01 li").eq(index).addClass("selected").siblings().removeClass("selected");
		$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();
		$(".tcrolltab .ulSmallPic li ").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$(".ccrolltab .ulSmallPic li ").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		
		$("#demo-06 ul").animate({"top":index*-57})

		$(".tcrolltab .ulBigPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		
		if(index>30){
			$(".ccrolltab .lastdate").show()	
		}else{
			$(".ccrolltab .lastdate").hide()	
		}
		$(".tcrolltab .lastdate").hide()
	});
	
	$(".tcrolltab .ulSmallPic li ").click(function(){
		 index = $(this).index();
		$(".jCarouselLite-01 li").eq(index).addClass("selected").siblings().removeClass("selected");
		$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();
		$(".tcrolltab .ulSmallPic li ").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$(".ccrolltab .ulSmallPic li ").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$("#demo-06 ul").animate({"top":index*-57})
	 	$(".ccrolltab .ulBigPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		if(index>30){
			$(".tcrolltab .lastdate").show()	
		}else{
			$(".tcrolltab .lastdate").hide()	
		}
		$(".ccrolltab .lastdate").hide()	
	});
	var left = $(".ccrolltab .ulSmallPic").offset().left;
	$("#cRightBtnA").on("click",function(){
		var left1 = $(".ccrolltab .ulSmallPic").offset().left;
		if(left != left1){
			$(".tcrolltab .ulSmallPic").animate({left:-540});
		}
		$(".tcrolltab .ulBigPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$(".ccrolltab .ulSmallPic li").each(function(i,n){
			if($(this).attr("class") === "liSelected"){
				index = i;
				$(".jCarouselLite-01 ul li").eq(i).addClass("selected").siblings().removeClass("selected");
				$(".tcrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				$(".ccrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				$("#demo-06 ul").animate({"top":index*-57})
				$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();
				return false;
			}
			
			if(index>30){
			$(".ccrolltab .lastdate").show()	
			}else{
				$(".ccrolltab .lastdate").hide()	
			}
			$(".tcrolltab .lastdate").hide()	
		});
		$(".tcrolltab .lastdate").hide()	
	});
	
	var left2 = $(".tcrolltab .ulSmallPic").offset().left;
	$("#tRightBtnA").on("click",function(){
		var left3 = $(".tcrolltab .ulSmallPic").offset().left;
		if(left2 != left3){
			$(".ccrolltab .ulSmallPic").animate({left:-540});
		}
		$(".tcrolltab .ulSmallPic li").each(function(i,n){
			if($(this).attr("class") === "liSelected"){
				index = i;
				$(".jCarouselLite-01 ul li").eq(i).addClass("selected").siblings().removeClass("selected");
				$(".ccrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				$(".tcrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				
				$("#demo-06 ul").animate({"top":index*-57})
				$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();
				return false;
			}
			if(index>30){
			$(".tcrolltab .lastdate").show()	
			}else{
				$(".tcrolltab .lastdate").hide()	
			}
			$(".ccrolltab .lastdate").hide()	
		});
		$(".ccrolltab .ulBigPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$(".ccrolltab .lastdate").hide()	
	});
	
	var left = $(".ccrolltab .ulSmallPic").offset().left;
	$("#cLeftBtnA").on("click",function(){
		var left1 = $(".ccrolltab .ulSmallPic").offset().left;
		if(left != left1){
			$(".tcrolltab .ulSmallPic").animate({left:0});
		}
		$(".ccrolltab .ulSmallPic li").each(function(i,n){
			if($(this).attr("class") === "liSelected"){
				index = i;
				$(".jCarouselLite-01 ul li").eq(i).addClass("selected").siblings().removeClass("selected");
				$(".tcrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				$(".ccrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				$("#demo-06 ul").animate({"top":index*-57})
				$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();
				return false;
			}
			if(index>30){
			$(".ccrolltab .lastdate").show()	
			}else{
				$(".ccrolltab .lastdate").hide()	
			}
			$(".tcrolltab .lastdate").hide()	
		});
		$(".tcrolltab .ulBigPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$(".tcrolltab .lastdate").hide()	
	});
	
	var left2 = $(".tcrolltab .ulSmallPic").offset().left;
	$("#tLeftBtnA").on("click",function(){
	    var left3 = $(".tcrolltab .ulSmallPic").offset().left;
		if(left2 != left3){
			$(".ccrolltab .ulSmallPic").animate({left:0});
		}
		
		$(".tcrolltab .ulSmallPic li").each(function(i,n){
			if($(this).attr("class") === "liSelected"){
				index = i;
				$(".jCarouselLite-01 ul li").eq(i).addClass("selected").siblings().removeClass("selected");
				$(".ccrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				$(".tcrolltab .ulSmallPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
				
				$("#demo-06 ul").animate({"top":index*-57})
				$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();
				return false;
			}
			if(index>30){
			$(".tcrolltab .lastdate").show()	
			}else{
				$(".tcrolltab .lastdate").hide()	
			}
			$(".ccrolltab .lastdate").hide()	
		});
		$(".ccrolltab .ulBigPic li").eq(index).addClass("liSelected").siblings().removeClass("liSelected");
		$(".ccrolltab .lastdate").hide()	
	});
	
	
	
	$("#prev-06").click(function(){

		$(".jCarouselLite-01 li.selected").prev("li").addClass("selected").next("li").removeClass("selected");

	})

	$("#next-06").click(function(){

		$(".jCarouselLite-01 li.selected").next("li").addClass("selected").prev("li").removeClass("selected");
	})

	
	$(".tcrolltab .ulSmallPic li ").click(function(){
		index = $(".tcrolltab .ulSmallPic li").index(this);
		$(".jCarouselLite-01 li").eq(index).addClass("selected").siblings().removeClass("selected");
		$(".dateconList .abox").eq(index).fadeIn(500).siblings().hide();

		$("#demo-06 ul").animate({"top":index*-57})

	})
	
	$(".jCarouselLite-01 li:last").after("<li style=\"float: none; width: 100px; height: 57px;\"><span><a target=\"_blank\"href=\"http://www.gov.cn/zhuanti/mhsl_sxsjml.htm\" style=\"font-size:12px;color:#ffffff;\">搜索最新进展</a></span></li>")
})