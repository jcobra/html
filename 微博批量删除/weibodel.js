// 1、F12进入浏览器开发者模式
// 2、在控制台（Console）中黏贴如下代码
// 3、执行代码

var s = document.createElement("script");
s.setAttribute("src", "https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
s.onload = function() {
    for (var i = 0; i < 100; i++) {
        setTimeout(function() {
            $('a[action-type="fl_menu"]')[0].click();
            $('a[title="删除此条微博"]')[0].click();
            $('a[action-type="ok"]')[0].click();
        }, 1000 * i);
    }
}
document.head.appendChild(s);