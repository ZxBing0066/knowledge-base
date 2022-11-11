# 事件

-   采用事件委托
-   react 中的事件为合成事件，生成新的事件对象，原生事件则挂在合成事件下
-   react 17 前事件绑在 document 中，采用事件池复用事件源
-   react 17 后事件绑定到 render 元素上，而不是 document 上，取消了事件池

取消事件池的原因[^1]:

现代浏览器中并无法证明事件池提高了性能，反而带来了很多开发问题

[^1]: https://reactjs.org/blog/2020/08/10/react-v17-rc.html#no-event-pooling
