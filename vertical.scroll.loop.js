/****
 *
 * @Date 2014/10/25
 *
 * 前提条件：
 *    ^[element] {overflow: hidden;}
 *
 * 实现列表元素的纵向无缝滚动。
 * 主要实现思路：当第一个元素滚出视角区域时，则将其移动到元素列表的最后边，然后给顶端元素的 margin-top 新增一个单位高度。
 */

(function(sn){
	sn.append(sn.html());             // 讲需要滚动的元素的子节点复制一份，以免滚动时最下方出现空白
	setInterval(function(){           // 定时刷新 DOM
		var snf = sn.find('li:first'),
			snmt = snf.css('margin-top'),
			snmtv = parseInt(snmt) - 1;
		if(snmtv % 30 === 0){           // 具体元素的高度为 30，当元素上滚的距离达到一个单位的时候，则将第一个元素移动到最后边，然后增加一个单位高度
			sn.append('<li>' + snf.html() + '</li>');
			snf.remove();
		} else {
			snf.css('margin-top', snmtv + 'px');    // 重新设置元素的 magrin-top	
		}
	}, 50);
})($('#scroll-notice'));    // 传入需要滚动的元素
