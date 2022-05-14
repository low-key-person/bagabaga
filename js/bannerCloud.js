/**
 * 
 * @date    2018-02-02 14:20:47
 * @version $Id$
 */


$(function(){
	bannerCloud(".cloud1",30000);
	window.setInterval(function(){
		bannerCloud(".cloud1",30000);
	}, 1000);
	/*window.setInterval(function(){
		bannerCloud(".cloud2",30000);
	}, 1000);*/
	closeBg();
})
function bannerCloud(cloudBox,speed){
	$(cloudBox).animate({width:'130%'},speed)
	$(cloudBox).animate({width:'100%'},speed)
	//$(cloudBox).animate({'background-size':'130% 130%'},30000);
}

function closeBg(){
	var closeBg =  $('.logoLianghui .closeBg');
	closeBg.on('click', function() {
		$("body").css('background', '#f2f2f2');
		$('.mean').remove();
		$(".fireman930-bg").css({
			"background": 'none',
			property2: 'value2'
		});
		$(".fireman930-box-bg-in").css({'padding':'0','margin-top':'0px'});
		$(".header").css({
			width: '3000px',
			position: 'absolute',
			left: '50%',
			'margin-left':'-1500px'
		});
		$(".content").css("padding-top","149px");
	});
}
