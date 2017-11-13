(function($) {  
    $.fn.slider = function(options) {  
        //this指向当前的选择器  
        var config = {  
            index: 0,  
            timer: null,  
            speed: 3000,  
            min: 0.3, //和css中的样式对应  
            max: 1  
        };  
        var opts = $.extend(config, options);  
        //核心方法，把当前index的图片和icon显示，把除此之外的图片和icon隐藏  
        var core = function() {  
            if (opts.index > 4) {  
                opts.index = 0;  
            } else if (opts.index < 0) {  
                opts.index = 4;  
            }  
            $('.lbk').children().eq(opts.index).fadeIn(400).siblings('li').fadeOut(400);
			$('.btn_lis').children().eq(opts.index).addClass('btn_ls').siblings('li').removeClass('btn_ls');
        };  
        //左边  
        $(this).find(".btn_l").bind("click", function() {  
            --opts.index;  
            core();  
        });  
        //右边  
        $(this).find(".btn_r").bind("click", function() {  
            ++opts.index;  
            core();  
        });  
        //每个icon分配事件  
        $(this).find(".btn_lis").on("click", "li", function() {  
            var index = $(this).index();  
            opts.index = index;  
            core();  
        });  
        //定时器  
        var start = function() {  
            opts.timer = setInterval(function() {  
                ++opts.index;  
                core();  
            }, opts.speed);  
        }  
        $(this).hover(function() {  
            clearInterval(opts.timer);  
        }, function() {  
            start();  
        });  
        start();  
    }  
}(jQuery));  