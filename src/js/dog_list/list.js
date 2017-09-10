/* 
* @Author: Marte
* @Date:   2017-09-07 17:32:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-10 16:03:38
*/
document.addEventListener('DOMContentLoaded',function(){
    var glist1 = document.querySelector('.glist1');
    var pxpriceup = document.querySelector('.pxpriceup');
    var pxpricedown = document.querySelector('.pxpricedown');
    var hidden_list = document.querySelector('#hidden_list');
    // console.log(pxprice)
    // var btn = document.querySelector('#btn');

        // 1.创建一个异步请求对象
        var xhr = new XMLHttpRequest();//reayState:0

        // 4.处理数据
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState);//1,2,3,4
            if(xhr.readyState === 4){
                // 把json字符串转换成数组
                var res = JSON.parse(xhr.responseText);
                console.log(res);

                var ul = document.createElement('ul');
                // var div =document.createElement('div');
                function list_c(){

                   glist1.innerHTML = res.map(item=>{
                        return `
                        <div class="list_box-li" data-gid="${item.gid}">
                            <div class="list-box-con">
                                <div class="pro-country country-photo">
                                    <img src="${item.c_photo}">
                                </div>
                                <div class="gimg rela">
                                    <div class="hovtitle">${item.formats}</div>
                                    <a class="gd-photo"><img src="${item.img}"/></a>
                                </div>
                                <div class="fmgoods-main gimgsrl" >
                                </div>
                                <a href="./details.html?gid=${item.gid}" class="gtitle" target="_blank" title="${item.title}">
                                    <span class="title-typename tit-label ft12 hide" style="display:none"></span>
                                    <span class="title-subject">${item.subject}</span>
                                </a>
                                <p class="gprice">
                                    <span class="c999 through market-price">￥${item.market}</span>
                                    <span class="cred ft16 price">￥${item.price}</span>
                                    <span class="c999 dprice">${item.dprice}</span>
                                </p>
                            </div>
                        </div>`
                    }).join('');

                }
                price_px();
                list_c();

                function price_px(){
                        // 价格排序
                        var kaiguan = true;
                        var price = res.price;
                        //绑定点击事件
                        pxpriceup.onclick = function(){
                            var compare = function (prop) {
                                return function (obj1, obj2) {
                                    var val1 = obj1[prop];
                                    var val2 = obj2[prop];
                                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                                        val1 = Number(val1);
                                        val2 = Number(val2);
                                    }
                                    if (val1 < val2) {
                                        return -1;

                                    } else if (val1 > val2) {
                                        return 1;

                                    } else {
                                        return 0;
                                    }            
                                } 
                            }
                            res.sort(compare("price"))
                            list_c();
                            // console.log(666)
                            // if(kaiguan){
                            //     // top.style.display = 'block';
                            //     // bottom.style.display = 'none';
                            //     //写入前先清空
                            //     glist1.innerHTML = '';
                            //     //先把res按价格进行排序
                            //     for(var i=0;i<res.length-1;i++){
                            //         for(var j=0;j<res.length-1-i;j++){
                            //             if(res[j].price > res[j+1].price){
                            //                 var temp = res[j+1];
                            //                 res[j+1] = res[j];
                            //                 res[j] = temp;
                            //                 console.log(temp)
                            //             }
                            //         }
                            //     }
                            //     kaiguan = false;            
                            // }else{
                            //         // top.style.display = 'none';
                            //         // bottom.style.display = 'block';
                            //         //写入前先清空
                            //         glist1.innerHTML = '';
                            //         //先把res按价格进行排序
                            //         for(var i=0;i<res.length-1;i++){
                            //             for(var j=0;j<res.length-1-i;j++){
                            //                 if(res[j].price < res[j+1].price){
                            //                     var temp = res[j+1];
                            //                     res[j+1] = res[j];
                            //                     res[j] = temp;
                            //                     console.log(temp)
                            //                 }
                            //             }
                            //         }
                            //         kaiguan = true;
                            //     }
                            // //生成排序后的数据
                            // list_c();  
                            
                        }
                        pxpricedown.onclick = function(){
                            var compare = function (prop) {
                                return function (obj1, obj2) {
                                    var val1 = obj1[prop];
                                    var val2 = obj2[prop];
                                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                                        val1 = Number(val1);
                                        val2 = Number(val2);
                                    }
                                    if (val1 > val2) {
                                        return -1;

                                    } else if (val1 < val2) {
                                        return 1;

                                    } else {
                                        return 0;
                                    }            
                                } 
                            }
                            res.sort(compare("price"))
                            list_c();
                        }
                }
            }
        }
        xhr.open('get','http://localhost/gz1704/src/mysql/goods.php',true);

        xhr.send();
})