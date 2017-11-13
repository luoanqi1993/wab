/**
 * Created by Administrator on 2017/9/25.
 */
function $(id){    // ��ȡ id
    return document.getElementById(id);
}


function scroll(){
    if(window.pageXOffset != null){  //  ie9 +
        return  {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){  //  ��׼ģʽ
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }else{   //  ����ģʽ
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}


function client(){   //  ��Ļ���
    if(window.innerWidth != null){     //  ie9 +
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode == "CSS1Compat"){   //  ��׼ģʽ
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }else{   //  ����ģʽ
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}