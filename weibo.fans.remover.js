// ==UserScript==
// @name       Weibo Fans Remover
// @namespace  http://us.cijian.fansremover
// @version    0.1
// @description  快速移除粉丝——移除自己已经关注的人
// @match      http://*weibo.com/*/myfollow*
// @require http://libs.baidu.com/jquery/1.9.0/jquery.js
// @copyright  2012+, MurphyL 
// @email im@cijian.us
// ==/UserScript==

setTimeout(function(){
    console.log('==========================================');
    $('.SW_fun').first().click();
    $('.SW_fun').addClass('selected');
    //$('.W_btn_c_disable').attr('class','btn_arrow W_btn_d');
    $('span:contains("取消关注")').click();
    $('span:contains("确定")').click();
    setTimeout(function(){
    	location.reload();
    },1000);
},3000);
