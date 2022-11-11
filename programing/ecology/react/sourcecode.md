# 源码解读

## 包职责

-   react 核心包，所有包通过 react 进行关联
-   react-dom 浏览器 dom 操作、渲染相关
-   react-reconciler 协程 diff
-   scheduler 任务调度，优先级分配，任务调用

## 流程

非 fiber：

jsx - 生成虚拟 dom
render - 递归虚拟 dom，创建生成真实 dom 节点渲染，事件绑定
state change - enqueueSetState 放到更新队列中

fiber：

jsx - 生成虚拟 dom
render - 通过虚拟 dom 生成 fiber，fiberRootNode 保存整个 fiber 链条 - scheduler 进行任务调度 - 通过 workInProgress（fiberNode） 进行节点生成/更新 - 
use - 通过 ReactCurrentDispatcher 获取 hooks - mountWorkInProgressHook workInProgress 的 memoizedState 为 hooks 状态数据 - 链表结构 - 生成 dispatch 绑定 fiberNode 和 queue
state-change - dispatchSetState 生成 update、action 存储变更 - pushConcurrentUpdateQueue 放到队列中 - scheduleUpdateOnFiber
workLoop - finishQueueingConcurrentUpdates 更新 - 

两个 fiber，current workInProgress

## 导出内容 

### react

#### \_\_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED

用作 react 各个包间通信

#### Children

导出 Children 方法

-   map
-   forEach
-   count
-   toArray
-   only

#### Component

-   constructor 参数
    -   props
    -   context
    -   updater
-   实例化挂载
    -   props
    -   context
    -   refs
    -   updater
-   属性
    -   isReactComponent
    -   ｜ 空对象
    -   setState
    -   ｜ 调用 updater.enqueueSetState
    -   forceUpdate
    -   ｜ 调用 updater.enqueueForceUpdate
    -   挂载 isMounted, replaceState 告警

#### PureComponent

基本与 Component 一致

-   属性
    -   isPureReactComponent true

#### Fragment symbol

-   Profiler
-   StrictMode
-   Suspense
-   SuspenseList
-   cloneElement
-   createContext

#### createElement

-   流程
    -   检查 config 是否存在
    -   检查是否存在 ref
    -   检查是否存在 key，存在会被转 string
    -   获取 **self, **source
    -   使用 hasOwnProperty 提取需要的属性为 props，抛弃 RESERVED_PROPS：key、ref、**self、**source
    -   使用 arguments.length 判断拼接 children 参数，如果存在则放到 props 中覆盖
    -   获取 defaultProps，如果 prop 为 undefined 则赋值 defaultProp
    -   dev 环境定义 ref、key 的 getter，用于告警
    -   返回 ReactElement：type、key、ref、self、source、ReactCurrentOwn.current、props
-   ReactElement

    -   返回对象：$$typeof REACT_ELEMENT_TYPE

-   createFactory
-   createMutableSource
-   createRef
-   createServerContext
-   forwardRef
-   isValidElement
-   lazy
-   memo
-   startTransition
-   experimental
    -   use
    -   useEvent
-   unstable
    -   act
    -   Cache
    -   DebugTracingMode
    -   LegacyHidden
    -   Offscreen
    -   Scope
    -   TracingMarker
    -   getCacheSignal
    -   getCacheForType
    -   useCacheRefresh
    -   useMemoCache

#### hooks

-   useId
-   useCallback
-   useContext
-   useDebugValue
-   useDeferredValue
-   useEffect
-   useImperativeHandle
-   useInsertionEffect
-   useLayoutEffect
-   useMemo
-   useMutableSource
-   useSyncExternalStore
-   useReducer
-   useRef
-   useState
-   useTransition

### react-dom

#### hydrateRoot

-   createHydrationContainer 创建水合容器
    -   createFiberRoot 创建 FiberRootNode
    -   createHostRootFiber 创建 fiber 根节点
        -   在 FiberRootNode 上挂载 stateNode（fiber 根结点） 和 memoizedState
        -   initializeUpdateQueue 传入 fiber 根结点，挂载 updateQueue
    -   getContextForSubtree 获取 context 并挂载，hydrate 下为空
    -   requestUpdateLane
    -   createUpdate
    -   enqueueUpdate
    -   scheduleInitialHydrationOnRoot
-   listenToAllSupportedEvents 事件监听

FiberRootNode 存储了一些全局信息，fiber 根节点为 FiberNode。

#### render

lane 任务优先级

-   hydration
-   render
    -   告警 & root 模式检查
    -   按照 \_reactRootContainer 判断是否为第一次调用
        -   第一次调用时调用 legacyCreateRootFromDOMContainer
            -   判定是否为 isHydrationContainer 决定分支，调用 render 为 false，此处不讨论
            -   清空目标元素内容
            -   包装 callback
            -   调用 createContainer
                -   进入 react-reconciler 包
                -   调用 createFiberRoot
                -   调用 createHostRootFiber
                -   按照各种模式 flag 计算最终的模式
                -   调用 createFiber 创建 fiber 根节点
                    -   FiberNode 包括
                        -   tag
                        -   key
                        -   elementType
                        -   type
                        -   stateNode
                        -   return
                        -   child
                        -   sibling
                        -   index
                        -   ref
                        -   pendingProps
                        -   memoizedProps
                        -   updateQueue
                        -   memoizedState
                        -   dependencies
                        -   mode
                        -   flags
                        -   subtreeFlags
                        -   deletions
                        -   lanes
                        -   childLanes
                        -   alternate
            -   将 container 标记为 root
            -   调用 listenToAllSupportedEvents 开始监听事件
                -   进入 react-dom-bindings 包
                -   在 root 元素上添加事件绑定，做好委托准备
            -   调用 flushSync updateContainer 更新
                -   从 fiber 尾部节点开始
                -   performSyncWorkOnRoot
                -   workLoopSync
                -   performUnitOfWork
                -   completeWork
                -   createInstance
                -   createElement
                -   updateFiberProps
                -   appendAllChildren
                -   bubbleProperties subtreeFlags
                -   先尝试 siblingFiber，再尝试 returnFiber，为 null 则任务完成
        -   否则调用 updateContainer

#### createRoot

## 重要文件

-   ReactSymbols.js 包含 React 内部的类型等 symbol

## hooks 原理

ReactCurrentDispatcher.current
