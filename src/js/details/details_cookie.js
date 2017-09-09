/* 
* @Author: Marte
* @Date:   2017-09-09 13:13:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 14:40:24
*/

document.addEventListener('DOMContentLoaded',()=>{
    // 先查看当前购物车有无cookie


    var epet_sensor_add_cart = document.getElementById('epet_sensor_add_cart');
    var cart_buynum = document.getElementById('cart_buynum');
    var abcde = document.getElementById('abcde');
    // var cart_buynum = document.querySelector('#cart_buynum');
    $("input[id='cart_buynum']").val();
    console.log(epet_sensor_add_cart);
    console.log(cart_buynum)
    console.log(abcde)
    var arr_goods = [];
    var cookies = document.cookie;
    if(cookies.length>0){
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');

            if(arr[0] === 'carlist'){
                arr_goods = JSON.parse(arr[1]);
            }
        })
    }
    console.log(777)
    // 添加到购物车
    epet_sensor_add_cart.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
       console.log(666) 
        // 获取当前属性
        var abcdeGUID = abcde.getAttribute('data-gid');
        var abcdeSBJ = abcde.getAttribute('data-subject');
        var abcdeSRC = abcde.getAttribute('data-src');
        var abcdePRI = abcde.getAttribute('data-price');
        var abcdeSTO = abcde.getAttribute('data-stock');

        var goodsObj = {};
        goodsObj.GUID = abcdeGUID;
        goodsObj.SBJ = abcdeSBJ;
        goodsObj.SRC = abcdeSRC;
        goodsObj.PRI = abcdePRI;
        goodsObj.STO = abcdeSTO;
        goodsObj.CBN = cart_buynum;

        //如果cookie为空，直接添加 
        if(arr_goods.length === 0){
            arr_goods.push(goodsObj);
        }else{
            // 先判断cookie中有无相同的guid商品
            for(var i=0;i<arr_goods.length;i++){
                // 存在，则数量+1
                if(arr_goods[i].guid === abcdeGUID){
                    arr_goods[i].qty++;
                    break;
                }
            }
            // 如果没有
            if(i === arr_goods.length){
                //添加到arr_goods
                arr_goods.push(goodsObj); 
            }
        }
        // 存入cookie
        document.cookie = 'carlist=' + JSON.stringify(arr_goods);
        console.log(cookies);
    } 
})