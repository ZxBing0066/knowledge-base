# 《PWA 开发实战》

## 前言

-   渐进式 Web 应用（progressive Web App，PWA）

## 第 1 章 渐进式 Web 应用介绍

-   PWA 的优势

    -   无连接状态下的可用性

    -   加载速度快

    -   推送通知

    -   主屏幕快捷方式

    -   媲美原生

-   service worker

    -   可以通过注册来控制站点的一个或多个页面。

    -   可以监听并响应在其控制之下的所有页面的事件。可以拦截和修改事件

    -   可以在用户离线的情况喜爱工作，检测离线状态或服务响应慢的情况，使用缓存内容替代

    -   关闭标签也依然运行，并可以和服务器通信，可以接受并显示推送通知，确保每个操作都传递到服务器。

## 第 2 章 你的第一个 service worker

-   serviceWorker 注册

```js
navigator.serviceWorker
    .register('/serviceWorker.js')
    .then(function (registration) {})
    .catch(function (err) {});
```

-   生命周期

    -   修改 service worker 文件后，不会立即生效，旧版本还会依旧处于激活中，新版本处于等待状态

    -   开启 chrome Service Workers 的 Update on reload 强制更新

-   可拦截请求并进行变更

-   渐进增强

    -   渐进增强能为用户提供尽可能多的功能体验

    -   可以让网站兼容所有用户

-   为了保护用户和防止中间人攻击，只有使用 HTTPS 的页面才能使用 service worker

-   开发中可以通过 localhost 来绕过安全连接的限制，但部署后必须使用 HTTPS 才能正常工作

-   service worker 作用域

    -   为了安全问题，service worker 只能控制他的目录下的请求

    -   通过 scope 可以限制作用域，但是只能向下

## 第 3 章 CacheStorage API

-   CacheStorage 是一种全新的缓存层

-   open、add、addAll、match

-   不能取代 HTTP 缓存

## 第 4 章 service worker 生命周期和缓存管理

-   生命周期

    -   installing

        -   使用 register 时，代码会被下载、解析并进入安装状态，如果安装成功，就会进入 installed 状态。发生错误则进入
            redundant 状态。

        -   监听 install 事件，并调用 waitUntil 可延时 install 事件，promise 失败后会进入 redundant 状态。

    -   installed/waiting

        -   安装成功进入 installed 状态

        -   一般会马上进入 activating 状态，除非另一个激活的 service worker 依旧在控制，这时会维持 waiting 状态

    -   activating

        -   在激活并接管应用前，会触发 activate 事件。

        -   和 installing 一样可以使用 waitUntil 扩展

    -   activated

        -   service worker 只能在页面开始加载之前控制页面

    -   redundant

        -   不会有任何作用

    -   service worker 独立于窗口或标签

    -   第一次加载时安装 service worker，然而此时页面已经开始执行，service worker 无法控制，只有等安装完成后的打开的页面
        才可被控制。

-   service worker 生命周期和 waitUntil

    -   service worker 不是一直运行，否则浏览器性能会受到严重影响

    -   service worker 在控制域中事件触发时，会被唤醒，然后处理并再次终止

    -   异步处理可使用 waitUntil 扩展执行，防止提前终止

-   更新 service worker

    -   新的 service worker 注册和安装后不会替换现有的 service worker，而是保持 waiting

    -   直到 service worker 作用域下的每个标签页或窗口关闭，旧的 service worker 才会进入废弃状态，新的 service worker 才
        会激活

    -   设计是为了防止多版本 service worker 同时运行导致不兼容问题

-   管理缓存

    -   如果在 install 时安装缓存，只会在 install 触发时安装

    -   任何对 service worker 文件的修改，都会触发 service worker 的更新，此时会触发 install 并重新安装缓存

    -   每个 service worker 都有单独的缓存

-   缓存管理和清除

    -   浏览器对缓存存在存储限制

    -   cache.keys 获取所有缓存名称

    -   cache.delete 删除对应缓存

    -   install 时安装缓存，activate 时删除旧缓存

-   重用已缓存的响应

    -   通过 caches.match 匹配存在的缓存，并复制到新缓存中

-   service worker 响应头

    -   service worker 缓存时间不能过长，否则会导致更新不及时

    -   错误的 service worker 逻辑不及时更新会导致一些难以修复的问题

    -   默认、最大过期时间为 24 小时

## 第 5 章 拥抱离线优先

-   什么是离线优先

    -   离线和低连接是不可避免的，不该视为灾难

    -   拥抱离线优先应在用户离线是保证大部分功能的可用

-   常用缓存模式

    -   仅缓存

        -   适用静态资源，更新后可通过修改文件名或手动更新缓存更新

    -   缓存有限、网络回退

        -   缓存找不到时会尝试从网络请求中返回

    -   仅网络

    -   网络优先、缓存回退

        -   适用过时内容依然一定程度有用的情况

    -   先缓存、后网络

        -   先返回缓存中的数据、再去按照需要更新缓存，并更新页面

    -   通用回退

        -   缓存找不到、网络不可用时，返回一个替代的默认版本

-   混合与匹配:创造新模式

    -   按需缓存

        -   第一次请求后，将内容保存到缓存

        -   response 如果不止一次用到 需要进行 clone

    -   缓存优先，网络作为回退方案，并频繁更新缓存

        -   先返回缓存，然后后台更新缓存

    -   网络优先，缓存作为回退方案，并频繁更新缓存

        -   每次网络请求都替换缓存为最新

    -   规划缓存策略

        -   使用缓存优先，网络作为回退方案，并频繁更新缓存模式返回 index.html 文件

        -   使用缓存优先，网络作为回退方案模式返回首页需要展示的所有静态文件

        -   从网络中返回谷歌地图的 JavaScript 文件。如果请求失败，返回一个替代的脚本

        -   使用网络优先，缓存作为回退方案，并频繁更新缓存模式，返回 events.json 文件

        -   使用按需缓存模式返回事件的图片文件，如果网络不可用并且图片没有缓存，则回退到默认的通用图片

        -   数据分析的请求直接通过，不作处理

    -   缓存预测

        -   猜测用户接下来会用到的内容来缓存

-   App shell 架构

    -   鼓励尽可能轻量的向用户呈现一个 shell，随着其变得可用再填充内容和附加功能

    -   优先显示屏幕结构和内容，而非可以推迟处理的结构

## 第 6 章 使用 IndexedDB 在本地存储数据

-   什么是 IndexedDB

    -   IndexedDB 是浏览器中的事务型对象存储数据库

    -   事务型

        -   操作会按照事务来分组，一个事务中，要么所有操作都成功、要么都失败

    -   对象存储数据库

        -   不用与关系型存储数据列、表格，对象型数据库可以存储多个对象

    -   索引数据库

        -   可以在对象存储中添加索引，并用来检索需要的对象

    -   基于浏览器的

        -   完全基于浏览器运行

    -   其它内容

        -   可以创建多个数据库

        -   每个数据库可以包含多个对象存储

        -   每个对象存储通常只包含一种数据类型

        -   对象存储包含键值队

        -   值几乎可以是任何 JavaScript 中的数据内容

        -   键用来引用对象存储中的某个值，可以是简单的数字标或特定路径

        -   遵循同源策略

        -   数据库是版本控制的。创建或修改结构时可通过新版本号打开数据库连接，会触发 upgrade needed 事件，在事件中处理新
            旧版本的迁移更改

        -   大部分 IndexedDB 操作都是异步的

    -   数据库使用基本模式

        -   打开数据

        -   启动事务，用来读取或写入对象存储

        -   打开对象存储

        -   在对象存储中执行操作

        -   完成事务

-   使用 IndexedDB

    -   打开数据库连接

        -   open 在没有的时候会创建对应数据库

        -   监听 onsuccess 获取 idb 对象

    -   数据库版本

        -   open 第二个参数为版本，版本变化时会触发 upgradeneed 事件

    -   修改对象存储

        -   db.createObjectStore 创建对象存储

    -   添加数据

        -   db.transaction 创建事务

        -   往事务中添加数据

        -   transaction 的第一个参数为事务作用域，作用域相同的不同事务会串行等待运行，不同则可以并行运行

    -   读取数据

        -   db.transaction 开启事务，然后通过 get 读取

    -   版本管理

        -   多版本迁移的兼容

        -   通过判断之前数据库版本，做对应操作

        -   或者通过判断当前数据库情况，执行对应操作

    -   使用游标

        -   事务中使用 openCursor 打开游标

        -   游标只是一个指针，不包含结果

        -   游标每次变动都会触发 onsuccess

    -   创建索引

        -   通过 autoIncrement 创建自动索引，这种称为 out-of-line key 外键，键和值的存储是分离的

        -   使用自身属性做键叫做 inline key 内键

    -   使用索引

        -   打开事务 打开制定索引 打开游标

    -   限制游标的范围

        -   打开游标的缩略写法

                ```js
                exchangeIndex.openCursor("CAD");
                exchangeIndex.openCursor(IDBKeyRange.only("CAD"));
                ```

        -   还支持 lowerBound()、upperBound() 和 bound()

            -   lowerBound 为指定键以后的键

            -   upperBound 为指定键以前的键

            -   lowerBound，upperBound 第二个参数为是否排除传入键

            -   bound 为组合，四个参数为 lowerBound、upperBound、忽略 lowerBound、忽略 upperBound

    -   设置游标方向

        -   打开游标时第二个参数传入 prev 使用相反的方向

            ```js
            exchangeStore.openCursor(null, 'prev');
            ```

    -   更新对象存储中的对象

        -   通过 put 更新对象（外键）

        -   内键需要检索对应对象，然后通过 update 或 put 更新值，此时不需要指定主键，因为传递原始对象中包含了键名

    -   删除对象

        -   可直接调用 delete 传入主键

        -   内键需要检索然后在游标上调用 delete

    -   删除所有对象

        -   调用 clear

    -   处理冒泡 IDB 错误

        -   IDB 错误事件会冒泡

-   SQL 忍者的 IndexedDB

    -   SQL 和 IDB 的对比

        -   游标

            -   打开游标和运行 SELECT \* FROM table; 类似。

            -   不同的是游标只是指向对象，没有返回对象

        -   IDBKeyRange

            -   IDBKeyRange 相当于 WHERE

        -   索引

            -   IDB 的索引更简化

            -   IDB 只允许使用已经索引的属性来限制游标

        -   游标方向

            -   类似于 SQL 的 ORDER BY x DESC

            -   不过只能根据对象存储的键或索引的键来排序

-   Promise 式的数据库

-   IndexedDB 管理

    -   存储限制

    -   超出限制可能数据被浏览器自动清理

-   IndexedDB 生态

    -   PouchDB

        -   优先 IndexDB、WebSQL 作为回退

    -   localForage

        -   使用 IndexDB、WebSQL，localStorage 作为回退

    -   Dexie.js

        -   提升 IndexedDB 开发体验

    -   IndexedDB Promised

        -   使用 Promised 改进 IndexedDB 体验

## 第 7 章 使用后台同步保证离线功能

-   后台同步如何工作

    -   在 service worker 中注册 sync，并处理

-   SyncManager

    -   访问 SyncManager

        -   service worker 中使用 self.registration 获取

        -   页面中通过 navigator.serviceWorker.ready 获取

    -   注册事件

        -   调用 sync.register

    -   sync 事件

        -   发送时机

            -   注册完成后

            -   用户从离线变成在线时

            -   每隔几分钟，有尚未完成的注册时

        -   事件通过 promise 响应，promise 完成后注册会被删除，promise 失败会保留并等待下次重试

    -   事件标签

        -   标签时唯一的，如果使用已有标签会被忽略

    -   获取已注册的事件列表

        -   使用 getTags 获取所有的已注册标签列表

    -   最后的机会

        -   多次失败时会尝试最后一次调用，可通过 事件的 lastChance 判断，最后一次失败如何处理

-   传递数据给 sync 事件

    -   页面执行的大多数操作依赖于数据完成， 而 sync 事件能接收到的只有名称

    -   几种方案

        -   IDB 中维护操作队列

            -   完成一个删除一个，全部完成再完成回调

        -   IDB 中维护请求队列

            -   将请求存储到 IDB 中

            -   重新发送请求

        -   传递数据给 sync 事件标签

            -   把参数拼接到事件名称中

-   给应用添加后台同步

## 第 8 章 使用 postMessage 在 service worker 和页面之间通信

-   几种通信类型

    -   窗口向 service worker 发消息

    -   service worker 向作用域所有窗口发消息

    -   service worker 向特定窗口发消息

    -   通过 service worker 在窗口间发消息

-   窗口向 service worker 发消息

    -   通过 navigator.serviceWorker.controller 获取操作页面的 serviceWorker

    -   event source 中存在一些窗口信息

    -   使用场景

        -   通过用户访问的页面，service worker 提前判断缓存

    -   注意判断 serviceWorker 是否存在

-   service worker 向作用域所有窗口发消息

    -   通过 self.clients.matchAll 获取控制作用域下所有的窗口对象

    -   client 存在 id

    -   matchAll 传入参数 includeUncontrolled 可包含未受控的客户端

-   service worker 向特定窗口发消息

    -   通过 get 特定 client id 获取特定的 client 并发送消息

    -   matchAll 和 post message 的 source 中都可以拿到 client id

-   使用 MessageChannel 保持通信渠道打开

    -   可将 MessageChannel 的另一个端口传给 service worker，就可以打开一条通信渠道

-   窗口间的通信

-   从 sync 事件向页面传递消息

## 第 9 章 可安装的 Web 应用:占领主屏先机

-   可安装的 Web 应用

    -   实现步骤

        -   注册 service worker

        -   创建 Web 应用清单文件

        -   在 Web 应用中，添加这个清单的链接

-   浏览器如何决定何时显示应用安装横条

    -   符合标准才会考虑，标准如下

        -   网站提供 HTTPS 服务

        -   网站注册了 service worker

        -   网站拥有一份 Web 应用清单，至少包含了必填字段

    -   用户对应用有足够的兴趣，取决于浏览器判断条件

-   剖析 Web 应用清单

    -   name 或 short_name

        -   name 为全名，如果位置不够则显示 short_name

    -   start_url

        -   点击图标时打开的 URL

    -   icon

        -   包含一个或多个对象的数组，描述可以使用的图标

        -   要触发安装，至少包含一个图标，尺寸至少为 144\*144

    -   display

        -   控制启动时的显示模式

            -   browser 浏览器中打开

            -   standalone 不显示浏览器栏

            -   fullscreen 不显示浏览器栏和设备栏

    -   description

        -   应用描述

    -   orientation

        -   指定屏幕方向

            -   landscape

            -   portrait

            -   auto

    -   theme_color

        -   主题色可以让浏览器和设备调整 UI 颜色来匹配网站

        -   也可通过 meta 标签设置

        -   meta 标签会覆盖清单设置

    -   background_color

        -   设备启动和加载时的背景色

        -   页面样式会覆盖该颜色

        -   不设置会为白色

    -   scope

        -   设置应用的作用域，如果超过作用域的链接会弹出到浏览器打开

        -   某些浏览器会设置安卓系统的 Intent Filter。指向作用域的页面会启动应用来打开

    -   dir

        -   显示 name、short_name、description 文本方向

            -   ltr 从左到右

            -   rtl 从右到左

            -   auto 使用浏览器语言设置

    -   lang

        -   指定 name、short_name、description 的文本语言

    -   prefer_related_applications

        -   设置为 true 时，会将当前平台的原生应用列举在安装横幅中

    -   related_applications

        -   设置安装的原生应用信息

            ```json
            "related_applications": [       {
                 "platform": "play",         "url": "https://play.google.com/store/apps/details?id=com.goth.app",         "id": "com.goth.app"
                 }, {         "platform": "itunes",         "url": "https://itunes.apple.com/app/gotham-imperial/id1234"
            }],
            "prefer_related_applications": true
            ```

-   各端兼容性

    -   安装的应用图个平台图标一致变化

    -   https://pwabook.com/appicons 可在此处查看详细列表

## 第 10 章 推送通知

-   推送通知的生命周期

    -   推送通知包含两个概念

        -   使用 push api 发送消息

        -   使用 notification API 显示消息

    -   Notification API

        -   获取权限后显示通知

            ```js
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    new Notification('Shiny');
                }
            });
            ```

    -   Push API

        -   需要经过统一的中心服务器，由浏览器决定

        -   步骤

            -   页面使用 Push API 调用 subscribe

            -   中心服务器接收到消息会返回新订阅的详情，返回给页面

            -   将详情发送到服务器保存

            -   服务器发消息给消息服务区

            -   消息服务器转发到 service worker

        -   权限同 Notification

    -   Push + Notification

        -   页面向用户请求显示通知的权限，用户授权;

        -   页面和中央消息服务器通信，要求服务器为这个用户创建一个新的订阅;

        -   消息服务器返回新的订阅详情对象作为响应;

        -   页面将订阅详情发送给服务器;

        -   服务器将订阅详情储存起来，以供将来使用;

        -   时间流逝，季节变化，需要发送新的通知;

        -   服务器使用订阅详情，通过消息服务器将消息发送给用户;

        -   消息服务器将消息转发给用户的浏览器;

        -   service worker 的 push 事件监听器收到消息;

        -   service worker 显示通知，其中包含了消息内容。

    -   用户权限按照同源策略保存

    -   页面的 Notification 在移动端无法正常工作，需要使用 service worker 调用

    -   Notification 的参数

    ```js
    navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Quick Poll', {
            body: 'Are progressive web apps awesome?',
            icon: '/img/reservation-gih.jpg',
            badge: '/img/icon-hotel.png',
            tag: 'awesome-notification',
            actions: [
                { action: 'confirm1', title: 'Yes', icon: '/img/icon-confirm.png' },
                { action: 'confirm2', title: 'Hell Yes', icon: '/img/icon-cal.png' }
            ],
            vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]
        });
    });
    ```

           - body 通知显示的正文文本


           - icon 通知中显示的图标地址


           - badge 用来代表发送通知的应用的图片 URL，或者是代表应用发送的通知类别


           - actions 可传入操作对象数组，让用户可以快捷操作


           - vibrate 设置震动模式


           - tag 通知的唯一标识，同样的标识新消息会替换旧消息


           - renotify 设置为 true，从而在更新消息时提醒用户


           - data 可以用来附加任何想要伴随通知发送的数据


           - dir 文本方向


           - lang 主要语言


           - noscreen 用来指定设备的屏幕是否会被这个通知打开。兼容较差


           - silent 是否为静默消息。兼容较差


           - sound 通知的铃声。兼容较差

    -   订阅消息过程

        -   创建应用时，生成一个公钥和一个私钥;

        -   私钥是保密的，保存在服务器中;

        -   公钥会包含在脚本中，并在创建订阅时被发送到消息服务器;

        -   消息服务器将公钥连同其他订阅详情一起存储起来;

        -   当服务器要发送消息时，使用私钥进行签名，随后发送到消息服务器;

        -   消息服务器使用公钥验证消息是否用正确的私钥签名，如果是，则将消息发送给用户。

    -   生成 VAPID 公钥和私钥

        -   使用 web-push 生产公私钥

    -   生成 GCM 密钥

        -   仅仅使用 VAPID 密钥不足以向所有的浏览器发送推送消息。

        -   早期的 Chrome 使用 GCM，当时还没有达成协议

        -   在 firebase 中查看密钥

        -   将 gcm_sender_id 添加到 manifest

    -   创建新订阅

        -   subscribe 参数 userVisibleOnly，代表所有消息用户可见，静默消息可能损害用户隐私

    -   推送消息

    -   监听推送事件

    -   监听 notificationclick 处理通知点击

## 第 11 章 渐进式 Web 应用的用户体验

-   信任

    -   用户对 web 信任感较弱

-   渐进式 Web 应用中的常见消息

    -   缓存完成

    -   某页面已缓存

    -   操作失败，并会在恢复连接时重试

    -   启用通知

-   选择通知用词

-   发送通知需要考虑时机和消息

    -   使用自己的通知授权界面

        -   可以多次尝试

        -   可以复用界面

        -   更好的用户体验

-   设计

    -   从设计反映出条件、环境的变化

    -   设计适配环境和媒介

    -   设计向用户注入信心

-   控制安装提示

    -   无法控制安装，但是可以拦截安装事件并延时或取消

-   使用 RAIL 测量性能并实现高性能

    -   响应(Response)

        -   当用户执行任何操作时，例如点击屏幕上的任何元素，我们希望能在 0.1 秒内做出响应。

    -   动画(Animation)

        -   要让动画在人眼中看起来流畅，它每秒至少需要更新 60 次。

    -   空闲(Idle)

        -   将非必要的工作推迟到空闲时间。

    -   加载(Load)

        -   当用户执行一个操作，例如在网站上请求页面时，你的目标是在一秒之内显示操作的结果

    -   RAIL 的指导原则是:

        -   在 100 毫秒或者更短时间内，显示对用户操作的某种响应;

        -   确保每 16 秒(或者更短)绘制一次屏幕动画;

        -   在页面空闲时执行工作，每次不超过 50 毫秒;

        -   在 1000 毫秒内加载并显示用户请求的内容。

## 第 12 章 渐进式 Web 应用的未来

-   使用 Payment Request API 接受支付请求

-   使用 Credential Management API 进行用户管理

-   WebGL 实时图像处理

-   未来的语音识别 API

-   使用 WebVR 在浏览器中实现虚拟现实

-   轻松共享应用

-   流畅的媒体播放 UI
