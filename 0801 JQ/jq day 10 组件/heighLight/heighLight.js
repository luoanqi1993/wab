(function($){
	$.fn.extend({//固定写法
		heighLight:function(options){//给自定义方法命名
			var opt = $.extend({},defaults,options);//利用extend方法，覆盖插件默认参数
			return this.each(function(){//这里的this是指向jq,在这里return返回当前元素，后面就可以继续调用他(链式调用)
				//遍历所有需要高亮的dom
				var $this = $(this)//当前遍历的对象，赋值给$this存起来
				
				$this.css({//设置默认样式
					background:opt.background,
					color:opt.forground
				});
				
				var markup = $this.html();//获取当前文本的内容
				markup = $.fn.heighLight.format(markup);//把文本内容传进初始化的方法
				$this.html(markup);
			});
		}
	});
	var defaults={//定义默认参数
		background:'yellow',
		forground:'red'
	}
	//公共的格式化方法，我们默认是加粗，用户可以通过覆盖我们的方法来达到不同的格式化效果
	$.fn.heighLight.format = function(str){
		return "<strong>"+str+"</strong>"
	}
})($);