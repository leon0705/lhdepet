/* 
* @Author: Marte
* @Date:   2017-09-02 17:32:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 17:52:19
*/
// 判断密码强度算法
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