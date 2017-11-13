<?php
	$us=$_POST['us'];
	$pd=$_POST['pd'];
	$flag=$_POST['flag'];
	$data=array();
	$data[0]=array($us,$pd);
	$json_string=json_encode($data);
	if($flag==0){
		if($us!=''&&$pd!=''){
			echo "注册成功";
		}else{
			echo "注册失败";
		}
	}else{
		echo $json_string;
	}
?>