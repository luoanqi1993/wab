<?php
	
	$username = $_POST['username'];
	$password = $_POST['password'];
	if($username=='admin'&&$password=='123'){
		echo '<div>登陆成功</div>';
	}else{
		echo '<div>登陆失败</div>';
	}
?>