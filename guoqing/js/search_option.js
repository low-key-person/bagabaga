// JavaScript Document
$(function(){
	function seclectOp(butnClick){
		$(butnClick).next('ul.option').children('li').click(function(){
			$(butnClick).val($(this).text());
			$(butnClick).siblings(".colid").val($(this).attr("data-value"));
			$(butnClick).siblings(".colid2").val($(this).attr("data-value"));
			$(butnClick).siblings(".colid3").val($(this).attr("data-value"));
			$(butnClick).next('ul.option').slideUp(0)
		}) 
	}
	$('.inp').click(function(){
		seclectOp(this);//搜索下拉列表
		$(this).next('ul.option').slideDown(0).parent('.seclect_op').css('z-index',9999);
		$(this).parent('.seclect_op').mouseleave(function(){
			 $(this).find('ul.option').slideUp(0);
			 $(this).css('z-index',22)
			})
	})
    
	
	//form-1
	$("#flpage").submit(function(e){
        var mintime=$(".date_picker").val();
        if(mintime==""){
            $("#timetype").val("timeqb")
        }else{
            $("#timetype").val("timezd")
        }
        $("#maxtime").val(mintime);
    })

	//form-2
	$("#flpage2").submit(function(e){
        var minpcode=$("#minpcode").val();
        $("#maxpcode").val(minpcode);
		
		var pubtypeCon=$("#fwzhvalue3").val();
        $(".fwvl2").val(pubtypeCon);
		
		var value1=$("#pubmintimeMonth").val();
        $("#pubmaxtimeMonth").val(value1);
		
		var value2=$("#pubmintimeYear").val();
        $("#pubmaxtimeYear").val(value2);
		
		var value3=$("#fwzhvalue2").val();
        $("#fwzhvalue").val(value3);
		
		var value4=$("#fwzhvalue4").val();
        $("#fwzhvalue3").val(value4);
    })

	
	//带滚动条的下拉
	function seclectOp1(butnClick){
		$(butnClick).next('ul.option').children('li').click(function(){
			$(butnClick).val($(this).text());
			$(butnClick).siblings(".colid").val($(this).attr("data-value"));
			$(butnClick).siblings(".colid2").val($(this).attr("data-value"));
			$(butnClick).siblings(".colid3").val($(this).attr("data-value"));
			$(butnClick).next('ul.option').slideUp(0)
			$(butnClick).next('ul.option').height(0);
		}) 
	}
	$('.inp1').click(function(){
		seclectOp1(this);//搜索下拉列表
		$(this).next('ul.option').css({"z-index":999999,"display":"block"}).height(343);
		$(this).parent('.seclect_op').css("z-index",999999);
		$(this).parent('.seclect_op').mouseleave(function(){
			 $(this).css("z-index",1).find('ul.option').css({"display":"block"}).height(0);
			})
	})
	
	//鼠标滑过变透明
	function HoverFade(butn){
		$(butn).hover(
			function(){
				$(this).fadeTo(200,.7)
			},
			function(){
				$(this).fadeTo(200,1)
			}
		)
	}
	HoverFade('.btnBlue');
})