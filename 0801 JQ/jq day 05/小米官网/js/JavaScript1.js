$(function(){
	var i = 0;
	//i代表图片的索引，0表示第一张图片
	var timer = null;
	$('.btn_r').click(function(){
		clearInterval(timer);
		i==4?i=0:i++;
		lbs(i)
	});
	$('.btn_l').click(function(){
		clearInterval(timer);
		i==0?i=4:i--;
		lbs(i)
	});
	$('.btn_lis').children().click(function(){
		clearInterval(timer);
		i = $(this).index();
		lbs(i);
	});
	function lbs(s){
		$('.lbk').children().eq(s).fadeIn(400).siblings('li').fadeOut(400);
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
	}
	timer=setInterval(lb,3000);
	function lb(){
		i++;
		if(i==5){
			i=0;
		}
		lbs(i);
	}
	
	$('.lbk').mouseenter(function(){
		clearInterval(timer);
	});
	$('.lbk').mouseleave(function(){
		timer=setInterval(lb,3000);
	});
	
	
	
	
	
	
	
});
