/* 
* @Author: Marte
* @Date:   2017-09-02 10:19:17
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-05 14:59:49
*/
// 表单验证
$(document).ready(function(){


    // 验证用户名密码
    $("#nickname").blur(function(){
        var name = document.getElementById('nickname').value;
        var nickname_img = document.getElementById('nickname_img');
        var nickname_msg_div = document.getElementById('nickname_msg_div');
        var nickname_msg = document.getElementById('nickname_msg');
        // 根据正则表达式判断用户名
        var reg = /^[a-z0-9_-]{4,20}$/;
        if(!reg.test(name)){
            nickname_msg_div.style.display = 'block';
            nickname_msg.innerHTML ='请输入4-20位用户名';
            return;
        }
        nickname_msg_div.style.display = 'none';
        nickname_img.style.display = 'block';
    })
    // 验证密码
    $("#passwordr").blur(function(){
        var passwordr = document.getElementById('passwordr').value;
        var password_img = document.getElementById('password_img');
        var password_msg_div = document.getElementById('password_msg_div');
        // var password_msg = document.getElementById('password_msg');
        // 密码正则表达式
        var reg = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,20}/;
        if(!reg.test(passwordr)){
            password_msg_div.style.display = 'block';
            password_msg.innerHTML ='请输入8-20位密码';
            return;
        }
        password_msg_div.style.display = 'none';
        password_img.style.display = 'block';
        // 确认密码
        $("#passwordag").blur(function(){
            var passwordag = document.getElementById('passwordag').value;
            var passwordag_img = document.getElementById('passwordag_img');
            var passwordag_msg_div = document.getElementById('passwordag_msg_div');
            if(passwordag.length === 0){
                passwordag_msg_div.style.display = 'block';
                passwordag_msg.innerHTML ='请输入确认密码';
                return;
            }
            passwordag_msg_div.style.display = 'none';
            if(passwordag != passwordr){
                passwordag_msg_div.style.display = 'block';
                passwordag_msg.innerHTML ='两次密码不一致！';
                return;
            }
            passwordag_msg_div.style.display = 'none';
            passwordag_img.style.display = 'block';
        })
    })

    function getlevel(){
        var qiangdu = document.getElementById('qiangdu');
        qiangdu.style.display = 'block';
        $('#leval0').removeClass('defaultpwd');
        $('#leval1').removeClass('defaultpwd');
        $('#leval2').removeClass('defaultpwd');
        var password = $('#passwordr').val();
        var leval =  apsl(password);
        if(password.length == 0 ){
            return false;
        }
        for(var i = 0 ;i <= leval; i++){
            $('#leval'+i).addClass('defaultpwd')
        }
    }
    // 判断密码强度算法
    function apsl(password) {
        var securityLevelFlag = 0;
        if (password.length < 6) {
            return 0;
        }
        else {
            var securityLevelFlagArray = new Array(0, 0, 0, 0);
            for (var i = 0; i < password.length; i++) {
                var asciiNumber = password.substr(i, 1).charCodeAt();
                if (asciiNumber >= 48 && asciiNumber <= 57) {
                    securityLevelFlagArray[0] = 1;  //digital
                }
                else if (asciiNumber >= 97 && asciiNumber <= 122) {
                    securityLevelFlagArray[1] = 1;  //lowercase
                }
                else if (asciiNumber >= 65 && asciiNumber <= 90) {
                    securityLevelFlagArray[2] = 1;  //uppercase
                }
                else {
                    securityLevelFlagArray[3] = 1;  //specialcase
                }
            }
            for (var i = 0; i < securityLevelFlagArray.length; i++) {
                if (securityLevelFlagArray[i] == 1) {
                    securityLevelFlag++;
                }
            }
            return securityLevelFlag;
        }
    }
    // $("#nickname").blur(function(){
    //     var name = document.getElementById('nickname').value;
    //     var nickname_img = document.getElementById('nickname_img');
    //     var nickname_msg_div = document.getElementById('nickname_msg_div');
    //     var nickname_msg = document.getElementById('nickname_msg');
    //     var reg = /^[a-z0-9_-]{4,20}$/;
    //     if(!reg.test(name)){
    //         nickname_msg_div.style.display = 'block';
    //         nickname_msg.innerHTML ='请输入4-20位用户名';
    //         return;
    //     }
    //     nickname_msg_div.style.display = 'none';
    //     nickname_img.style.display = 'block';
    // })
    // function checkUsername(){
    //     var name = document.getElementById('nickname').value;
    //     var nickname_msg_div = document.getElementById('nickname_msg_div');
    //     var nickname_msg = document.getElementById('nickname_msg');
    //     if(name.length<4 || name.length>20){
    //         nickname_msg_div.style.display = block;
    //         nickname_msg.innerHTML ='请输入4-20位用户名'
    //     }
    // }

});