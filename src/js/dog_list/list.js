/* 
* @Author: Marte
* @Date:   2017-09-07 17:32:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-07 20:11:06
*/
document.addEventListener('DOMContentLoaded',function(){
    var glist1 = document.querySelector('.glist1');
    // var btn = document.querySelector('#btn');

    // 如何通过js获取接口（后端提供）数据
    // ajax

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
                        <a class="gtitle" target="_blank" title="${item.title}">
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

            // 把数据写入页面
            // glist1.innerHTML = '';
            // glist1.appendChild(div);
        }
    }

    // xhr.open('get','http://localhost:1212/api/goodslist.php',true);
    xhr.open('get','http://localhost/gz1704/src/mysql/goods.php',true);

    // // 2. 配置参数，建立与服务器的连接
    // xhr.open('get','http://localhost:1704/api/goodslist.php',true);//readyState:1

    // // 3.发送请求
    xhr.send();

                            // <div class="gigm-srl fl">
                            //     <ul class="gimg-srl-li" style="width:117px">
                            //         <li data-market="${item.market}">
                            //             <a target="_blank" title="${item.weight}" class>
                            //                 <img alt="${item.weight}" width="30" height="30" src=""/>
                            //             </a>
                            //         </li>
                            //         <li data-market="${item.market}">
                            //             <a target="_blank" title="${item.weight}" class>
                            //                 <img alt="${item.weight}" width="30" height="30" src=""/>
                            //             </a>
                            //         </li>
                            //         <li data-market="${item.market}">
                            //             <a target="_blank" title="${item.weight}" class>
                            //                 <img alt="${item.weight}" width="30" height="30" src=""/>
                            //             </a>
                            //         </li>
                            //     </ul>
                            // </div>
    
})