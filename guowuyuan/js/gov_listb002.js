
	function gov_list(a,b,c,d,e){			   
	//mouseover效果
	function liMouseOn(){
		$(a).find(".ulBigPic li").attr("class","");
		for(var i=0; i<$(a).find(".ulBigPic li").length;i++) {
			(function(j){
				$(a).find(".ulBigPic li:eq("+j+")").mouseover(function(){
					if($(a).attr("class") == "dSmallList" || $(a).attr("class") == "dMiddleList") {
						if($(this).attr("class") != "liSelected") {
							$(this).attr("class","liSelected");
						}
					}
				});
				$(a).find(".ulBigPic li:eq("+j+")").mouseout(function(){
					if($(a).attr("class") == "dSmallList" || $(a).attr("class") == "dMiddleList") {
						if($(this).attr("class") == "liSelected") {
							$(this).attr("class","");
						}
					}
				});
			}) (i);
		}
	}
	
	//定义当前、之前、之后要显示图片的排位
	var curPic=0,nextPic=-1,prePic=-1;preShowPic=-1;
	var allPic=$(a).find(".ulBigPic li").length;
	//初始化当前、之前、之后要显示图片的排位
	
	function numInit(num){
		if(num=="init"){
			if(allPic > 1) {
				nextPic=curPic+1;
				prePic=allPic-1;
			}else if(allPic == 1){
				nextPic=0;
				prePic=0;
			}
			$(a).find(".ulBigPic li:eq("+curPic+")").attr("class","liSelected");
		}else if(num == "plus"){
			preShowPic=curPic;
			prePic=curPic;
			curPic=nextPic;
			if(curPic < (allPic-1)) {
				nextPic=curPic+1;
			}else if(curPic == (allPic-1)) {
				nextPic=0;
			}
			$(a).find(".ulBigPic li:eq("+curPic+")").attr("class","liSelected");
			if(preShowPic != curPic) {
				$(a).find(".ulBigPic li:eq("+preShowPic+")").attr("class","");
			}
		}else if(num == "minus") {
			preShowPic=curPic;
			nextPic=curPic;
			curPic=prePic;
			if(curPic > 0) {
				prePic=curPic-1;
			}else if(curPic == 0 && allPic > 1) {
				prePic=allPic-1;
			}
			$(a).find(".ulBigPic li:eq("+curPic+")").attr("class","liSelected");
			if(preShowPic != curPic) {
				$(a).find(".ulBigPic li:eq("+preShowPic+")").attr("class","");
			}
		}else{
			preShowPic=curPic;
			curPic=num;
			if(curPic == (allPic-1)) {
				nextPic=0;
				if(allPic > 1) {
					prePic=curPic-1;
				}else if(allPic == 1) {
					prePic=0;
				}
			}else if(curPic == 0) {
				prePic=allPic-1;
				if(allPic > 1) {
					nextPic=1;
				}else if(allPic == 1) {
					nextPic=0;
				}
			}else{
				nextPic=curPic+1;
				prePic=curPic-1;
			}
			$(a).find(".ulBigPic li:eq("+curPic+")").attr("class","liSelected");
			if(preShowPic != curPic) {
				$(a).find(".ulBigPic li:eq("+preShowPic+")").attr("class","");
			}
		}
		//alert("curPic="+curPic+"/nextPic="+nextPic+"/prePic="+prePic+"/preShowPic="+preShowPic);
	}
	
	//大图左右按钮初始化
	function btnAInit(){
		if(allPic < 2) {
			$(b).attr("class","sLeftBtnABan");
			$(c).attr("class","sRightBtnABan");
		}else{
			if(curPic == 0) {
				$(b).attr("class","sLeftBtnABan");
				$(c).attr("class","sRightBtnA");
			}else if(curPic == (allPic-1)) {
				$(b).attr("class","sLeftBtnA");
				$(c).attr("class","sRightBtnABan");
			}else{
				$(b).attr("class","sLeftBtnA");
				$(c).attr("class","sRightBtnA");
			}
		}
	}
	
	//小图左右按钮初始化
	function btnBInitA(){
		if(allPic > 6) {
			$(e).attr("class","sRightBtnB");
		}
	}
	
	function btnBInitB(){
		if(curPic > 2 && (allPic-curPic) > 4) {
			if($(d).attr("class") != "sLeftBtnB") {$(d).attr("class","sLeftBtnB");}
			if($(e).attr("class") != "sRightBtnB") {$(e).attr("class","sRightBtnB");}
		}else if(curPic < 3){
			if($(d).attr("class") != "sLeftBtnBBan") {$(d).attr("class","sLeftBtnBBan");}
			if(allPic > 6) {
				if($(e).attr("class") != "sRightBtnB") {$(e).attr("class","sRightBtnB");}
			}else{
				if($(e).attr("class") != "sRightBtnBBan") {$(e).attr("class","sRightBtnBBan");}
			}
		}else if(curPic > (allPic-4)) {
			if($(e).attr("class") != "sRightBtnBBan") {$(e).attr("class","sRightBtnBBan");}
			if(allPic > 6) {
				if($(d).attr("class") != "sLeftBtnB") {$(d).attr("class","sLeftBtnB");}
			}else{
				if($(d).attr("class") != "sLeftBtnBBan") {$(d).attr("class","sleftBtnBBan");}
			}
		}
	}
	
	//小图标签selected函数
	function smallPicSelected(){
		if(!$(a).find(".ulSmallPic li:eq("+curPic+")").hasClass("liSelected")) {$(a).find(".ulSmallPic li:eq("+curPic+")").addClass("liSelected");}
		if(preShowPic!=(-1)) {
			if($(a).find(".ulSmallPic li:eq("+preShowPic+")").hasClass("liSelected")) {
				$(a).find(".ulSmallPic li:eq("+preShowPic+")").removeClass("liSelected");
			}
		}
	}
	
	//小图滚动函数
	function smallPicScroll(){
		if(curPic != preShowPic) {
			var leftPosition=0;
			if(curPic>11 && curPic<($(a).find(".ulSmallPic li").length-6)) {
				leftPosition=-(curPic-11)*77;
			}else if(curPic > ($(a).find(".ulSmallPic li").length-9) && $(a).find(".ulSmallPic li").length>12) {
				leftPosition=-($(a).find(".ulSmallPic li").length-11)*77;
			}
			leftPosition+="px";
			$(a).find(".ulSmallPic").attr("rel","moving");
			$(a).find(".ulSmallPic").animate({left:leftPosition},200,function(){$(a).find(".ulSmallPic").attr("rel","stop");});
		}
	}
	
	//大图按钮效果
	$(b).mouseover(function(){
		if($(this).attr("class")=="sLeftBtnA") {
			$(this).attr("class","sLeftBtnASel");
		}
	});
	
	$(b).mouseout(function(){
		if($(this).attr("class")=="sLeftBtnASel") {
			$(this).attr("class","sLeftBtnA");
		}
	});
	
	$(b).click(function(){
		if($(this).attr("class")=="sLeftBtnASel") {
			numInit("minus");
			btnBInitB();
			smallPicSelected();
			smallPicScroll();
			if(curPic == 0) {$(b).attr("class","sLeftBtnABan");}
			if(curPic < (allPic-1) && $(c).attr("class")=="sRightBtnABan") {$(c).attr("class","sRightBtnA");}
		}
	});
	
	$(c).mouseover(function(){
		if($(this).attr("class")=="sRightBtnA") {
			$(this).attr("class","sRightBtnASel");
		}
	});
	
	$(c).mouseout(function(){
		if($(this).attr("class")=="sRightBtnASel") {
			$(this).attr("class","sRightBtnA");
		}
	});
	
	$(c).click(function(){
		if($(this).attr("class")=="sRightBtnASel") {
			numInit("plus");
			btnBInitB();
			smallPicSelected();
			smallPicScroll();
			if(curPic == (allPic-1)) {$(c).attr("class","sRightBtnABan");}
			if(curPic > 0 && $(b).attr("class")=="sLeftBtnABan") {$(b).attr("class","sLeftBtnA");}
		}
	});
	
	//小图li按键效果
	for (var i=0;i<$(a).find(".ulSmallPic li").length;i++) {
		(function(j) {
			$(a).find(".ulSmallPic li:eq("+j+")").click(function() {
				if($(this).attr("class") != "liSelected") {
					numInit(j);
					btnAInit();
					smallPicSelected();
				}
			})
		}) (i);
	}
	
	//小图左右按键效果
	$(d).mouseover(function(){
		if($(this).attr("class")=="sLeftBtnB") {
			$(this).attr("class","sLeftBtnBSel");
		}
	});
	
	$(d).mouseout(function(){
		if($(this).attr("class")=="sLeftBtnBSel") {
			$(this).attr("class","sLeftBtnB");
		}
	});
	
	$(d).click(function(){
		if($(this).attr("class")=="sLeftBtnBSel") {
			var leftPosition=$(a).find(".ulSmallPic").css("left");
			var leftPositionNum=Number(leftPosition.substring(0,(leftPosition.length-2)));
			leftPosition=leftPositionNum+147+"px";
			if(leftPosition=="0px") {if($(this).attr("class") != "sLeftBtnBBan") {$(this).attr("class","sLeftBtnBBan");}}
			var bestLeftNum=-($(a).find(".ulSmallPic li").length-6)*147;
			if((leftPositionNum+147) > bestLeftNum && $("sRightBtnB").attr("class") != "sRightBtnB") {$(e).attr("class","sRightBtnB")}
			if($(a).find(".ulSmallPic").attr("rel")=="stop"){
				$(a).find(".ulSmallPic").attr("rel","moving");
				$(a).find(".ulSmallPic").stop();
				$(a).find(".ulSmallPic").animate({left:leftPosition},200,function(){$(a).find(".ulSmallPic").attr("rel","stop");});
			}
		}
	});
	
	$(e).mouseover(function(){
		if($(this).attr("class")=="sRightBtnB") {
			$(this).attr("class","sRightBtnBSel");
		}
	});
	
	$(e).mouseout(function(){
		if($(this).attr("class")=="sRightBtnBSel") {
			$(this).attr("class","sRightBtnB");
		}
	});
	
	$(e).click(function(){
		if($(this).attr("class")=="sRightBtnBSel"){
			var leftPosition=$(a).find(".ulSmallPic").css("left");
			var leftPositionNum=Number(leftPosition.substring(0,(leftPosition.length-2)));
			leftPosition=leftPositionNum-147+"px";
			var bestLeftNum=-($(a).find(".ulSmallPic li").length-6)*147;
			if((leftPositionNum-147)==bestLeftNum) {$(this).attr("class","sRightBtnBBan");}
			if(leftPositionNum==0 && $(d).attr("class")=="sLeftBtnBBan") {$(d).attr("class","sLeftBtnB");}
			if($(a).find(".ulSmallPic").attr("rel")=="stop") {
				$(a).find(".ulSmallPic").attr("rel","moving");
				$(a).find(".ulSmallPic").stop();
				$(a).find(".ulSmallPic").animate({left:leftPosition},200,function(){$(a).find(".ulSmallPic").attr("rel","stop");});
			}
		}
	});
	
	liMouseOn();
	numInit("init");
	btnAInit();
	btnBInitA();
	smallPicSelected();	
	
	}
	
	
