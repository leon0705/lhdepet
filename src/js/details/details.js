    /* 
* @Author: Marte
* @Date:   2017-09-08 11:29:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 17:00:09
*/
document.addEventListener('DOMContentLoaded',()=>{
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    var id = getUrlParam('gid');
    console.log('gid:'+id);
    $.ajax({
     type:'get',
     url:'http://localhost/gz1704/src/mysql/details.php',
     dataType:'json',
     success:function(res,status){
         console.log(status)
         $.each(res, function(idx,val) {
             //根据id获取详情数据
             //
             //左侧商品图片
             if(id == val.gid){
                var wrap_img='';
                wrap_img+=[
                '<a id="zoom1" class="cloud-zoom" style="z-index:0;position:relative;display:block; ">',
                    '<img alt="'+val.gid+'" src="'+val.img+'"/>',
                '</a>',
                '<div class="mousetrap" style="width: 300px; height: 300px; cursor: move;">',
                '</div>',
                '<div class="mousetrap" style="width: 300px; height: 300px; cursor: move;">',
                '</div>'
                ].join('');

                var oborder_img='';
                oborder_img+=[
                '<li class>',
                    '<a class="cloud-zoom-gallery gimg" >',
                        '<img alt="'+val.subject+' 缩略图1"/>',
                    '</a>',
                '</li>',
                '<li class>',
                    '<a class="cloud-zoom-gallery gimg" >',
                        '<img alt="'+val.subject+' 缩略图2"/>',
                    '</a>',
                '</li>',
                '<li class>',
                    '<a class="cloud-zoom-gallery gimg" >',
                        '<img alt="'+val.subject+' 缩略图3"/>',
                    '</a>',
                '</li>'
                ].join('');
                 console.log(wrap_img);

                 var xq_num='';
                 xq_num+=[
                    '<span class="c999">编号：',
                    '<span/>',
                    val.gid
                 ].join('');

                 // 右侧内容
                 var gddes='';
                 gddes+=[
                    '<h1 class="gdtitle c333 ft18 bold" id="abcde" data-gid="'+val.gid+'" data-subject="'+val.subject+'" data-src="'+val.img+'" data-price="'+val.price+'" data-stock="'+val.stock+'" data-dprice="'+val.dprice+'">',
                        val.subject,
                    '</h1>',
                    '<div class="ft14 mt c93c">',
                        val.title,
                    '</div>',
                    '<div class="epet-pprice pad20 mt15 ft14">',
                        '<div class="mt5 clearfix">',
                            '<span class="c999 fl">',
                                '市场价',
                            '</span>',
                            '<del class="c333 fl">',
                                '￥'+val.market,
                            '</del>',
                        '</div>',
                        '<div class="mt5 clearfix">',
                            '<span class="c999 fl mt20">',
                                'E宠价：',
                            '</span>',
                            '<span class="ft20 c93c">￥',
                            '</span>',
                            '<span class="c93c goods-font bold" id="goods-sale-price" data-name="sale_price">',
                                val.price,
                            '</span>',
                        '</div>',
                    '</div>',
                    '<div class="gdtable gdattr gadttrnoBorder ft14 overflow pt10 pb10">',
                        '<div class="clearfix">',
                            '<div class="ats-style mt5">',
                                '<span class="c999">剩余：',   
                                '</span>',
                                '<span class="ce54649">',
                                    val.stock,
                                '</span>',
                                '袋',
                            '</div>',
                            '<div class="ats-style mt5 ml20">',
                            '</div>',
                            '<div class="ats-style mt5 ml20">',
                                '<span class="c999">赠送：',
                                '</span>',
                                '最多',
                                '<span class="c78b300">',
                                    val.price/10,
                                '</span>',
                                '宠币',
                            '</div>',
                        '</div>',
                        '<div class="gdicos mt pb10 pointer">',
                            '<span class="cfff ft12 ftc" );">正品溯源</span>',
                            '<span class="cfff ft12 ftc" );">全球精选</span>',
                            '<span class="cfff ft12 ftc" );">自营快递</span>',
                            '<span class="cfff ft12 ftc" );">自营大仓</span>',
                        '</div>',
                    '</div>',
                    '<div class="norms clearfix mt15">',
                        '<span class="fl ft14 db c999">重量：',
                        '</span>',
                        '<div class="norms-con fl">',
                            '<a herf="./details.html?gid=${item.gid}" title="'+val.formats+'" class="norms-a">',
                                val.formats,
                            '</a>',
                            '<a herf="./details.html?gid=${item.gid}" title="'+val.formats+'" class="norms-a">',
                                val.formats,
                            '</a>',
                        '</div>',
                    '</div>',
                    '<div class="norms clearfix mt15 pb10">',
                        '<span class="fl ft14 db c999 mt5">我要买：',
                        '</span>',
                        '<div class="norms-con fl">',
                            '<span class="cgnum fl mr">',
                                '<span class="chgnum lim-buynum ft14">',
                                '</span>',
                                '<input type="number" min="1" max="99" id="cart_buynum" class="text buynum" value="1" size="2">',
                                '<span class="chgnum add-buynum ft14">',
                                '</span>',
                            '</span>',
                            '<span class="fl mt">袋</span>',
                        '</div>',
                    '</div>',
                    '<div class="gdtable sent-city">',
                    '</div>',
                    '<div class="norms clearfix mt15">',
                        '<div class="norms-con fl">',
                            '<div class="c999 ft13">E宠快递15点前下单，其他快递16点前下单，当天发货。',
                                '<a href="" target="_blank">运费详情&gt;&gt;',
                                '</a>',
                            '</div>',
                        '</div>',
                    '</div>',
                    '<div class="clearfix mt20 pt10">',
                        '<div class="fl addcart-div" id="addcart_div">',
                            '<div class="add-buycart ft20 cfff ftc pointer" data-name="addcart-botton">',
                                '<input id="cart_gid" type="hidden" value="127618">',
                                '<input id="cart_buymode" type="hidden" value="">',
                                '<input id="cart_pam" type="hidden" value="">',
                                '<input id="cart_pam1" type="hidden" value="">',
                                '<a class="db epet_sensor_add_cart" id="epet_sensor_add_cart" href="./cart.html" target="_blank">',
                                    '<span class="cfff">加入购物车',
                                    '</span>',
                                '</a>',
                            '</div>',
                        '</div>',           
                        '<div class="advice ml20 fl">',
                            '<a href="" class="db ft14 c333 mt5">',
                                '<i class="db xqico">',
                                '</i>咨询',
                            '</a>',
                        '</div>',
                    '</div>',
                 ].join('');

             }

             $('#wrap').append(wrap_img);
             $('.oborder').append(oborder_img);
             $('.xq-num').append(xq_num);
             $('.gddes').append(gddes);
         });
    // 异步函数执行速度会慢一点
          doAfterLoad();
     }
    })
    
    function doAfterLoad(){
        var epet_sensor_add_cart = document.getElementById('epet_sensor_add_cart');
        var cart_buynum = document.getElementById('cart_buynum').value;
        var abcde = document.getElementById('abcde');
        // var cart_buynum = document.querySelector('#cart_buynum');
        console.log(epet_sensor_add_cart);
        console.log(cart_buynum)
        console.log(abcde)

        // 先查看当前购物车有无cookie
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
        // 添加到购物车
        epet_sensor_add_cart.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            // 获取当前属性
            var abcdeGUID = abcde.getAttribute('data-gid');
            var abcdeSBJ = abcde.getAttribute('data-subject');
            var abcdeSRC = abcde.getAttribute('data-src');
            var abcdePRI = abcde.getAttribute('data-price');
            var abcdeSTO = abcde.getAttribute('data-stock');
            var abcdeDPR = abcde.getAttribute('data-dprice');

            var goodsObj = {};
            goodsObj.GUID = abcdeGUID;
            goodsObj.SBJ = abcdeSBJ;
            goodsObj.SRC = abcdeSRC;
            goodsObj.PRI = abcdePRI;
            goodsObj.STO = abcdeSTO;
            goodsObj.CBN = cart_buynum;
            goodsObj.DPR = abcdeDPR;

            //如果cookie为空，直接添加 
            if(arr_goods.length === 0){
                arr_goods.push(goodsObj);
            }else{
                // 先判断cookie中有无相同的guid商品
                for(var i=0;i<arr_goods.length;i++){
                    // 存在，则数量+1
                    if(arr_goods[i].GUID === abcdeGUID){
                        arr_goods[i].CBN++;
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
    }
})