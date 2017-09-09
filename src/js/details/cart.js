/* 
* @Author: Marte
* @Date:   2017-09-09 15:14:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 17:40:34
*/

window.onload = function(){
    var tbd = document.querySelector('.tbd');
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

    render()
    // 事件委托实现删除单个商品效果
    // * 删除cookie中对应的商品数据
    // * 删除对应DOM节点
    // tbody.onclick = function(e){
    //     e = e || window.event;
    //     var target = e.target || e.srcElement;


    //     if(target.gid === '${item.GUID}'){
    //         // 获取当前li
    //         var currentLi = target.parentNode;

    //         var guid = currentLi.getAttribute('data-guid');

    //         // 删除DOM
    //         // currentLi.parentNode.removeChild(currentLi);


    //         // 删除cookie
    //         // 1）先找到cookie中对应的数据，并删除它
    //         // 2）重写cookie
    //         cartlist.forEach(function(item,idx){
    //             if(item.guid === guid){
    //                 cartlist.splice(idx,1);
    //             }
    //         });

    //         var now = new Date();
    //         now.setDate(now.getDate()+8);
    //         Cookie.set('cartlist',JSON.stringify(cartlist),now);

    //         render();
    //     }
    // }

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
                    <a gid="${item.GUID}" class="c666">[删除]</a>
                </td>
            </tr>
            `
        }).join('');

    }


console.log(arr_goods);
// render()

}