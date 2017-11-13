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
		lbsl(i)
	});
	$('.btn_lis').children().click(function(){
		clearInterval(timer);
		index = $(this).index();
		lbsi(index);
	});
	function lbs(s){
		console.log(s)
		$('.lbk').children().eq(s-1).animate({left:-1226})
		$('.lbk').children().eq(s).css('left','1226px').animate({left:0});
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
	}
	function lbsl(s){
		console.log(s)
		$('.lbk').children().eq(s+1).animate({left:1226})
		$('.lbk').children().eq(s).css('left','-1226px').animate({left:0});
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
	}
	function lbsi(s){
		console.log(s)
		if(s==i){
			return;
		}
		$('.lbk').children().eq(i).animate({left:-1226})
		$('.lbk').children().eq(s).css('left','1226px').animate({left:0});
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
		i=s;
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