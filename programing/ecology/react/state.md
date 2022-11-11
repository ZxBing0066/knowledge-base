# state

## setState 同步/异步

-   在 react 能力范围内为异步
    -   生命周期中
    -   react 中的事件回调
    -   渲染会被合并
-   在 react 能力范围外为同步
    -   原生异步 API setTimeout/setInterval 等
    -   原生绑定事件
    -   渲染不会被合并
