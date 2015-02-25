// ==UserScript==
// @name       WpFormer
// @namespace  http://cijian.us/
// @version    0.1
// @description  enter something useful
// @copyright  2012+, You
// @require http://libs.baidu.com/jquery/1.9.0/jquery.js
// ==/UserScript==

console.assert($, 'Load jQuery failure!');

var commentPrefix = commentPrefix || ['好久没转悠了，来看看老友！', '秋老虎快走了，打酱油的时候到了！', '没事四下转悠，看看来了！', '我轻轻的来，然后又轻轻的走了', '晕啊，貌似好久没更新了啊', '看看，转转，然后离开'];

var isWordpress = function() {
    var metes = $('meta[name=generator][content^=WordPress]');
    if (metes && metes.length) {
        return true;
    }
    var pn = $('.wp-pagenavi');
    if (pn && pn.length) {
        return true;
    }
    var links = $('link[rel="stylesheet"][href*="wp-content/themes"]');
    if (links && links.length) {
        return true;
    }
    return false;
}

var flag = isWordpress();

console.log('域名为[' + location.host + ']的网站%c' + (flag ? '是' : '不是') + '%c基于 WordPress 的！', "color:red", "color:black");

if (flag) {
    $('#author').val('MurphyL');
    $('#email').val('im@murphyl.com');
    $('#url').val('http://cijian.us');
    var index = parseInt(Math.random() * commentPrefix.length);
    $('#comment').val(commentPrefix[index]);
}
