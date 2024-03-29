# 那些 “稀奇古怪” 的问题合集

## 部分浏览器中 1900 年中国时区不对

在 Chrome 中，`new Date(1900, 0, 1)` 可以发现生成的时间时区不正确，不是 +0800 而是 +0805，而把年份切换到 1901 就变成了 +0800，在 IE 中时区确一直是
+0800。

这并不是 Chrome 的 bug，而是在 1901 年之前，中国地区所使用的时区就是 +0805，而 1901 年才修改成了 +0800。可以查看
https://www.timeanddate.com/time/zone/china/shanghai 此网站中提供的时区信息。

但是这个改动会导致一些程序问题，比如计算农历、计算天数，可能因为额外多出的几分钟导致天数错误、不精确等问题，遇到这些情况可以使用 1901 做基准时间或者做
好补位。

参考资料：https://stackoverflow.com/questions/50640010/why-is-new-date-returning-the-wrong-timezone-in-chrome

## 夏令时

-   不占位隐藏字符
-   同样展示字符 实际编码未必相同
-   文件中转固定编码名称
