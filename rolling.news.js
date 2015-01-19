/********
 * need jQuery
 *  <li id="data-news" class="news">
 *    <ol>
 *    <li><a href="javascript:;" target="_blank">关于启用银行账号的通知</a></li>
 *    <li><a href="javascript:;" target="_blank">#################</a></li>
 *    <li><a href="javascript:;" target="_blank">$$$$$$$$$$$$$$$$$</a></li>
 *    </ol>
 *  </li>
 *************/
 
setInterval(function(){
  var items = $('#data-news li'),
      il = items.length,  // 有多少条新闻
      it = items.first(), // 第一条新闻
      ih = it.height(),   // 第一条新闻的高度
      mt = parseInt(it.css('marginTop')); // 第一条新闻的高度
  $('#data-news li:first').animate({
      marginTop: (mt / ih + il === 1) ? 0 : (mt - ih)
  });
}, 5000);
