$(function() {
	var list = $('#selected_list'); //设置爱好
	var lis = $('#items>li'); //已有标签

	//判断list的子元素的长度
	function maxLength() {
		//如果大于2，返回false,否则返回true
		if(list.children().length > 2) {
			return false;
		} else {
			return true;
		}
	}
	
	lis.click(function() { //给已经有的标签添加点击事件
		//第一步，判断标签是否有样式，如果没有，表示可以操作，如果有样式，就无法操作
		if($(this).hasClass('select') == false) {
			//第二步，添加新标签
			//如果list的子元素小于或者等于2，就可以添加新的li；
			if(maxLength() == true) {
				//加上样式
				$(this).addClass('select');
				//直接获取内容创建节点
				//list.append("<li>"+$(this).html()+"</li>");
				//克隆节点
				var newLis = $(this).clone();
				newLis.click(function() {
					//获取该标签的内容
					var thisCon = $(this).html();
					//遍历ul里面的所有子元素
					$.each(lis, function(a, b) {
						if($(b).html() == thisCon) {
							//移除当前选择的li的class，让他可以继续操作
							$(b).removeClass('select');

						}
					});
					//删除选中标签
					$(this).remove();
				});
				list.append(newLis);
			} else {
				//超过三个标签则提示超出
				alert('最多只能添加三个标签');
			}

		}

	});
	
	
	$('#add').click(function(){
		//获取下面哪个ul的所有子元素
		var listC = list.children();
		//获取输入框的内容
		var txt = $('#aihao').val();
		//清空输入框
		$('#aihao').val('');
		//循环遍历上面ul的子元素，如果已经存在，则不再添加新标签
		for(var i = 0; i < lis.length;i ++){
			if(txt == lis.eq(i).html()){
				alert('该标签已存在');
				return;
			}
		}
		//调用maxLength()方法，查询当前添加的标签是否已经达到最大数量
		if(maxLength() == true){
			//如果没有达到最大，则可以添加新标签
			var newLis = $('<li>'+txt+'</li>');
			//该标签是通过输入框添加的，上面UL不存在该类型标签，所以，删除的时候，只需要删除自己就可以了
			list.append(newLis);
			newLis.click(function(){
				$(this).remove();
			});
		}else{
			alert('最多只能添加三个标签')
		}

	});
	

});