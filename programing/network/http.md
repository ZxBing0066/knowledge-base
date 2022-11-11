# http 协议

## 缓存

### 强缓存

-   Expires http 1.0，定义缓存时间
-   Cache-Control http 1.1，优先级比 Expires 高
    -   no-cache 缓存通过协商缓存决定
    -   no-store 不进行缓存命中
    -   max-age 决定缓存时间，时间内直接走强缓存

chrome 下强缓存状态码 200，network 中有 disk cache/memory cache 标识，不走服务端

### 协商缓存

-   对比客户端缓存资源的 If-modified-Since 和服务端资源的 Last-Modified
-   缓存的 If-None-Match 和服务端 ETag 对比

chrome 下协商缓存命中时状态码为 304，浏览器将使用本地缓存资源

### 缓存

-   分内存缓存和磁盘缓存
-   一般图片等可能重复使用的资源会放在内存缓存

## 通信过程

## cookie

-   会跟随请求发送（非 fetch）
-   大小较小
-   可 http-only
-   跨域携带需要 with-

## 状态码

-   2XX：请求成功
-   3XX：重定向，301 永久重定向，302 临时重定向，304 命中缓存
-   4XX：由于客户端错误导致服务端问题，404 文件找不到，401、403 权限、验证问题
-   5XX：服务端错误

## 安全

-   CSRF: Cross-Site Request Forgery
-   DNS 拦截

## 请求结构

-   请求头
-   请求体
-   响应头
-   响应体

## http 1.1

## http 2.0

## http 3.0

## https

## 请求流程

## get 和 post

## 简单请求、复杂请求

## 跨域 [^1]

### 会导致跨域问题的请求

-   XHR 和 featch
-   字体
-   webgl 素材
-   canvas drawimage
-   css shape image

### 预检请求

简单请求不会触发预检请求，直接请求，非简单请求将会先发送预检请求，通过后再发送。

预检请求 method 为 options，并携带原请求的 header 信息还有两个特殊 header 信息：

```
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

### 简单请求

-   method 为 GET、HEAD、POST
-   只可以定义少数的 header 信息：Accept、Accept-Language、Content-Language、Content-Type、Range
-   Content-Type 允许的内容只能是以下几种： application/x-www-form-urlencoded、multipart/form-data、text/plain

### 方案

-   jsonp：只能为 get 请求
-   cors：

### cors

服务端接收到请求后，使用以下头告知浏览器是否允许该请求：

```
// 允许的地址，为 * 则为全部匹配
Access-Control-Allow-Origin: https://foo.example
// 允许的 method
Access-Control-Allow-Methods: POST, GET, OPTIONS
// 允许的自定义头
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
// access-control 的有效事件，改时间内将不会再发起预检请求
Access-Control-Max-Age: 86400
```

携带 cookie 问题

-   浏览器需要指定特定的 allow-origin，然后客户端 XHR 必须设置 withCredentials 为 true
-   且服务端返回头增加 Access-Control-Allow-Credentials
-   服务端返回的 Access-Control 信息中不能有通配符

## 参考资料

-   https://http3-explained.haxx.se/zh

[^1]: [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
