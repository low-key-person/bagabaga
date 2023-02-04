$(function(){
	/*slider*/
	$('#demo01').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});
	$(".cond_list h1").click(function() {
		if ($(this).parents(".cond_list").hasClass("hover")) {
			$(this).parents(".cond_list").siblings(".hover").removeClass("hover").addClass("remove").children(".list_txt_a").stop().slideUp("slow");
		} else {
			$(this).parents(".cond_list").siblings(".hover").removeClass("hover").addClass("remove").children(".list_txt_a").stop().slideUp("slow");
			if($(this).parents(".cond_list").hasClass("remove")){
				$(this).siblings(".list_txt_a").stop().slideDown("slow").parent().removeClass("remove").addClass("hover");
			}
		}
	});
})