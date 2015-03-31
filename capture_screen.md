# 实现网页截图

> 实现思路，将网页的 body 部分写入 canvas，再将 canvas 转换为 base64 的 dataURI。

## 实现将 web 页面转换为 canvas 的 javascript 的库文件：[html2canvas](http://html2canvas.hertzen.com/)；

## 转换 base64 的案例代码：

```javascript
    html2canvas(document.body, {
        onrendered: function(canvas) {
            console.log(canvas)
            var context = canvas.toDataURL();;
           console.log(context);
            window.open(context);
        }
    });
```
