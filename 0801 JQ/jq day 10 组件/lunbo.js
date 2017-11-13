(function($){
	$.fn.slider = function(options){
		// 创建默认值
		var moren = {
			index : 0,
			timer : null,
			speed : 3000,
		};
		var opts = $.extend(moren,options);
		 //核心方法，把当前index的图片和icon显示，把除此之外的图片和icon隐藏  
		
		// 动画函数
		var animate = function(){
			if(opts.index>4){
				opts.index = 0;
			}else if(opts.index<0){
				opts.index = 4;
			}
			$(".lbk").children().eq(opts.index).fadeIn(400).siblings().fadeOut(400);
			$(".btn_lis").children().eq(opts.index).addClass("btn_ls").siblings().removeClass("btn_ls");			
		};
		
		//点击左边
		$(this).on("click",".btn_l",function(){
			--opts.index;
			animate();
		});
		//点击右边
		$(this).on("click",".btn_r",function(){
			++opts.index;
			animate();
		});
		//点击焦点
		$(this).children().on("click","li",function(){
			var index = $(this).index();
			opts.index = index;
			animate();
		});
	
	
		// 自动动画		
		var start = function(){
			opts.timer = setInterval(function(){
				++opts.index;
				animate();
			},opts.speed);
		};
		start();
		
		//鼠标hover事件
		$(this).hover(function(){
			clearInterval(opts.timer);
		},function(){
			start();
		});
	}		
})($)

