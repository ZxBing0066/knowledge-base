# 安全

## 跨域

-   jsonp
    -   实现
        -   发起 script get 请求
        -   全局嵌入回调函数
        -   后端按照请求生成 script，script 中调用回调传入数据
    -   缺陷
        -   只支持 get
        -   需要后端配合
-   iframe + location.href/window.name
-   反代
-   cors
    -   简单请求
        -   get、post、head
        -   无自定义头
        -   content-type 为
            -   text/plain
            -   multipart/form-data
            -   application/x-www-form-urlencoded
    -   复杂请求
        -   预检请求
        -   需要 access-control-allow-headers、allow-origin、allow-method
    -   withCredentials
        -   allow-origin 不能为泛域名
        -   secure
        -   sameSite none
            -   跨站和跨域
-   postmessage

## cookie 安全

-   http only

## DDOS

## CSRF: Cross-Site Request Forgery

-   攻击模式
    -   在第三方网站中调用被攻击网站请求（form 表单等）
    -   请求发起会携带被攻击网站的 cookie
    -   由于携带用户的 cookie 导致验证通过从而可以使用用户的身份进行攻击
-   解决方案
    -   验证 origin、referer
    -   验证码
    -   通过使用第三方网站无法获取的 token 进行验证
    -   ｜ 如将 token 设置为 samesite，然后网站中通过脚本获取后写入请求头中，第三方网站中的脚本无权限获取该 token 则导致验证失败

## XSS: Cross-Site Scripting

-   存储
    -   攻击手段
        -   提交数据时嵌入特殊字符进行 sql 注入
    -   防御手段
        -   输入过滤
        -   拼接安全注意
-   反射
    -   攻击手段
        -   构建 url 攻击，比如在第三方页面中构建一个攻击 url，诱导用户点击或自动打开后会变成由用户发起的 http 请求
    -   防御手段
        -   不安全的 get 请求
        -   url 安全
-   dom
    -   攻击手段
        -   页面中嵌入的用户数据中写入攻击脚本，导致内容展示时被攻击富文本安全
    -   防御手段
        -   输入过滤
        -   展示过滤
        -   转译特殊字符
-   通用防御手段
    -   限制长度增加攻击难度
    -   http-only 避免 cookie 被获取
    -   验证码

## XS-Leaks

-   攻击手段
    -   利用 http 缓存，推断出用户信息
    -   ｜ 举例：如访问过 xxxhub，会缓存该站点的图片，则可以根据图片是否已经缓存，判断出是否访问过该网站
    -   图片缓存时可以直接获取到宽高
-   防御手段
    -   同 csrf

## 时长攻击
