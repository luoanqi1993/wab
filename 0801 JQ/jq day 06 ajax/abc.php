<?php
	header("Content-Type: text/html; charset=utf-8");
	$apple = '我是一个苹果';
	$flag = $_GET['a'];
	if($flag==1){
		echo '<div style="color:red">'.$apple.'</div>';
		/*echo输出，返回*/
	}else if($flag==2){
		echo '<div style="color:yellow">香蕉</div>';
	}
?>