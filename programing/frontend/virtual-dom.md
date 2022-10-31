# 虚拟 dom

-   速度比不上原生 api，但是得益于 diff，再大部分情况下可以减少不必要的 dom 操作，简化代码逻辑，降低开发成本和将性能控制
    在可接受范围内
-   dom 对象可以映射到各种环境
-   diff 算法
    -   补丁队列
    -   ｜ patches = patch(oldVNode, newVNode)
    -   ｜ [ {type:'INSERT',vNode:...}, {type:'TEXT',vNode:...}, //更新文本 {type:'PROPS',propsPatch: []} //更新属性 ]
    -   注意 key 的正确使用
