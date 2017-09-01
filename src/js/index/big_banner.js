/* 
* @Author: Marte
* @Date:   2017-09-01 17:39:42
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-01 17:50:18
*/


    var img = document.getElementById("indexpics");
    var pics = img.getElementsByTagName("img");
    var i=0;
    img.style.position = "relative";
    var bigTimer =setInterval(function(){
        if( pics[i].width >= 770 ){
                pics[i].width = pics[i].width-1;
            }else{
                if(i==3){
                    img.style.left = 0;
                    for(var j=0;j<pics.length;j++){
                        pics[j].width = 810;
                    }
                    i=0;
                }else{
                    img.style.left = -770*(i+1)+"px";
                    i++;
                }
            }
    },150)
    
