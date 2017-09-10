/* 
* @Author: Marte
* @Date:   2017-09-09 15:14:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-10 16:05:09
*/

window.onload = function(){
    var tbd = document.querySelector('.tbd');
    console.log(tbd)
    var cookies = document.cookie;
    // var cart_table = document.querySelector('.cart-table');
    var arr_goods = [];

    if(cookies.length>0){
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');

            if(arr[0] === 'carlist'){
                arr_goods = JSON.parse(arr[1]);
            }
        })
    }

    render();

    // 事件委托实现删除单个商品效果
    tbd.onclick = function(e){

        e = e || window.event;
        var target = e.target || e.srcElement;

        // 是否点击了删除按钮
        if(target.id === 'cart_del'){
            var currentTd = target.parentElement;
            console.log(currentTd)
            var currentTr = currentTd.parentElement;
            console.log(currentTr)
            // 获取当前guid
            var currentGUID = target.getAttribute('gid');
            console.log(currentGUID)

            arr_goods.forEach(function(item,idx){
                if(item.GUID === currentGUID){
                    arr_goods.splice(idx,1);
                }
            });
            var now = new Date();
            now.setDate(now.getDate()+8);
            // 设置过期时间
            Cookie.set('cartlist',JSON.stringify(arr_goods),now);
            // 调用common封装函数
            render();
        }
    }

    function render(){

        tbd.innerHTML = arr_goods.map(function(item){
            return `
            <tr class="cart-order">
                <td width="50" align="center">
                    <input type="checkbox" name="check_goods_${item.GUID}"/>
                </td>
                <td width="500" valign="middle">
                    <div class="por-img fl overflow bgwhite ftc">
                        <a href="http://localhost/gz1704/src/html/details.html?gid=${item.GUID}" target="_blank" >
                            <img src="${item.SRC}" width="80"/>
                        </a>
                    </div>
                    <div class="por-intro fl ml20 mt" style="margin-top:30px;">
                        <a href="http://localhost/gz1704/src/html/details.html?gid=${item.GUID}" target="_blank" class="c333" >
                            ${item.SBJ}
                        </a>
                    </div>
                    <div class="clear"></div>
                </td>
                <td width="150" align="center" style="padding-top:20px;">
                    <div class="buynum-wrap clearfix">
                        <span id="less1" doclick="changeBuyNum" act="sub" class="ft18 fl ">-</span>
                        <input autocomplete="off" readonly="true" name="gnum_${item.GUID}" type="text" class="text buynum ftc fl bgwhite" value="${item.CBN}" id="num" size="">
                        <span doclick="changeBuyNum" act="add" id="add1" class="fl ">+</span>
                    </div>
                    <p class="c666 mtneg10"></p>
                </td>
                <td width="200" align="center" class="c000 bold ft14">
                    ￥${item.PRI}
                    <p class="c89">￥${item.DPR}</p>
                </td>
                <td width="200" align="center">
                    <a class="c666">[收藏]</a>
                    <a gid="${item.GUID}" id="cart_del" class="c666">[删除]</a>
                </td>
            </tr>
            `
        }).join('');
    }

console.log(arr_goods);
}