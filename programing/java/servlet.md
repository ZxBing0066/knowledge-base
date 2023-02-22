# servlet

## 关系声明

在 web.xml 中 定义 servlet

-   使用 servlet 字段声明，servlet-name 指定名称，servlet-class 指定类
-   servlet-mapping 声明请求地址和 servlet 的关系，servlet-name 指定处理的 servlet，url-pattern 指定匹配规则

## 如何运行

接收到请求后

1. 从 web.xml 中寻找请求地址对应的 servlet 类
2. 当第一次请求时
    1. 加载 servlet 类
    2. 实例化 servlet 类
    3. 执行实例的 init 方法并传入 ServletConfig 对象
3. 调用 service 方法，传入 request 和 response 对象
4. 当 web 容器要停止 server 或下线项目时，会调用实例的 destroy 方法
