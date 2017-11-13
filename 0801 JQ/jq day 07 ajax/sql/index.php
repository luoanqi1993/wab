<?php
	$us = $_POST['user'];
	$pd = $_POST['pass'];
	$flag = $_POST['flag'];
	$_mysqli = new mysqli();
	//连接数据库
	//参数：1.主机名（IP），2.账户，3.密码，4数据库
	$_mysqli -> connect('localhost','root','','mysql');
	//设置字符集
	$_mysqli -> set_charset('utf8');
	
	if($flag==1){
		//执行数据库查询语句，获得结果集
		$result = $_mysqli -> query("SELECT * FROM `login` WHERE `username` = '".$us."' AND `password` = '".$pd."'");
		//遍历你的结果集合
		$row = $result -> fetch_row();
		if($us==$row[0]&&$pd==$row[1]){
			echo '登录成功';
		}else{
			echo '登录失败';
		}
	}else{
		$result = $_mysqli -> query("INSERT INTO `login` (`username`, `password`) VALUES ('".$us."', '".$pd."');");
		if($result==1){
			echo '注册成功';
		}else{
			echo '注册失败';
		}
	}
	
	
	
	
	
	
	
	
	
	
?>
