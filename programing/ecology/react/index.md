# React

## 使用

-   生命周期
    -   constructor
    -   static getDerivedStateFromProps
    -   render
    -   componentWillMount
    -   componentDidMount
    -   shouldComponentUpdate
    -   getSnapshotBeforeUpdate 在 fiber commit 前抓取当前 dom 中的信息 return，return 的值会被接下来的 DidUpdate 获取。
    -   componentWillReceiveProps
    -   componentWillUpdate
    -   componentDidUpdate
    -   componentWillUnmount
    -   static getDerivedStateFromError
    -   componentDidCatch
-   controlled/uncontrolled

## 原理

-   react 16 之前，通过递归遍历 vdom，调用 dom API 增删改来更新渲染
-   fiber
    -   vdom reconcile 为 fiber 树
    -   空闲时调用 reconcile
    -   reconcile 可打断
    -   reconcile 是做 diff ，打上增删改的 tag，并创建对应的 dom
    -   commit 时一次性将 fiber 渲染到 dom
    -   schedule
-   事件
-   hooks 原理
    -   ReactCurrentDispatcher
    -   renderWithHooks
    -   function 组件初始化后
    -   ｜ renderWithHooks(
    -   ｜ ​ null, // current Fiber
    -   ｜ ​workInProgress, // workInProgress Fiber
    -   ｜ ​Component, // 函数组件本身
    -   ｜ ​props, // props
    -   ｜ ​context, // 上下文
    -   ｜ ​renderExpirationTime,// 渲染
    -   ｜ ​ExpirationTime);
    -   current fiber 树
    -   ｜ commit 阶段替换为真实 dom
    -   workInProgress fiber 树
    -   ｜ 将要渲染的的 fiber 树
    -   workInProgress memoizedState
    -   ｜ 以链表形式存放 hooks 信息
    -   dispatcher
-   hooks 优势
    -   方便代码的复用
    -   支持生命周期，可以方便管理
-   keys
-   refs
-   setState
    -   同步/异步
    -   触发多次
-   forceUpdate
-   defaultProps
-   displayName
-   useEffect 和 useLayoutEffect
    -   layoutEffect 为同步，可减少闪烁但不可滥用
-   任务优先级

![picture 4](/img/index-377c20d26cfd4cc5a5a5c5713511a9b03414f9f322fc2bf975fc6d9ea76e568b.png)  
