// ==UserScript==
// @name       Weibo Fans Remover
// @namespace  http://us.cijian.fansremover
// @version    0.1
// @description  �����Ƴ���˿�����Ƴ��Լ��Ѿ���ע����
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
    $('span:contains("ȡ����ע")').click();
    $('span:contains("ȷ��")').click();
    setTimeout(function(){
    	location.reload();
    },1000);
},3000);
