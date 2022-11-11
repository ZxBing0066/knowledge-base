# 事件循环

## 事件循环

-   脚本加载完成开始执行全局代码
-   代码执行完成后将会持续监听任务队列
-   任务队列中存在任务时就会取出任务并执行
-   执行完成后继续监听

## 微任务与宏任务

-   微任务优先级高于宏任务
-   使用 queueMicrotask 来插入微任务

常见的宏任务：

-   setTimeout/setInterval
-   I/O 事件（点击、加载等）
-   UI 渲染

常见的微任务：

-   Promise(大部分实现而言，部分早期 polyfill 只能借助 setTimeout 实现，所以依旧是宏任务)
-   process.nextTick（node.js）
-   MutationObserver

## requestAnimationFrame

-   一般为 1s 60 次，建议为按照屏幕刷新率来确定
-   使用 cancelAnimationFrame 清理
-   后台会被暂停

## node 和 browser 事件循环的区别

## 参考资料

-   http://latentflip.com/loupe/
