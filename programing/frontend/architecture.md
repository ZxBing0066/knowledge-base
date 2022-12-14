# 架构

前端架构的价值

## 前端架构的价值

-   对于应用的使用者的价值

    -   架构师需要把握整体的应用性能，保障应用的可用性、安全性
    -   涉及的点
        -   交互体验
            -   交互逻辑清晰合理符合直觉
            -   报错、加载有合适的页面反馈，不让用户困惑
        -   性能体验
            -   保障加载性能，注意实际加载时间与体感加载时间的差异
            -   首屏渲染
            -   DNS-prefetch、https-prefetch、缓存
            -   CDN
        -   安全防护
            -   WAF
            -   高防
            -   应急措施
        -   可用性保障
            -   灰度建设
            -   DNS

-   对于应用的开发者的价值

    -   通过技术架构保障开发者的开发效率、开发体验，让开发者能够集中于眼前的事情，减少开发者的重复劳动
    -   把控整体技术设计，能够带领团队攻坚
    -   涉及的点
        -   脚手架的建设
        -   文档的建设
        -   工作流的建设
        -   开发环境、IDE、灰度系统的建设
        -   自动化的建设

-   对于业务的价值

    -   做好数据统计和分析，向上汇报
        -   把握用户的存留情况，流失情况
    -   把握应用和业务的契合度，让应用满足业务需求，最好能对业务起到加成效果
        -   了解业务流程，思考优化点，进行技术加成
        -   思考业务价值，通过架构降低业务成本，提高业务价值等
            -   比如项目存在多端需求，可采用同构方案降低技术成本

## 前端架构师的能力要求

-   广
    -   需要了解行业的各种相关知识，选择合适的解决方案
    -   需要了解业务的价值，做出合适的选择
-   深
    -   在项目遇到问题时能够排忧解难

## 微前端的价值

1. 集成的价值，与技术栈无关，可以让项目脱离历史包袱的束缚，让后续的研发不受束缚
2. 巨石应用的拆解，慢慢剥离巨石应用，平滑过渡，渐进式升级
3. 解耦，让各项目独立开发、发布，不受其他项目的影响，沙箱可以叠加运行时解藕
4. 聚合的价值，可以抽离公共模块，让各应用公用
5. 能力原子化，让应用的能力可以自由拆解、聚合，搭建输出

额外的价值：

1. 开发、构建速度提升
2. 缓存利用更高效
3. 测试、发布、回滚更方便
4. 降低各团队的协作成本
5. 新产品的快速落地
6. 公共功能的统一管理，团队职能划分

巨石应用的开发困境

1. 项目大、难维护、难拆解
2. 改动范围难控制
3. 多人协作困难
4. 技术体系难升级

## 微前端的技术核心

1. 路由
    1. 项目注册
    2. 项目管理
2. 项目加载、挂载
    1. 按需加载
    2. 缓存
    3. 依赖控制
3. 隔离

其它

1. 基建架构

-   https://micro-frontends.org/

## 架构设计流程

-   clone 项目
-   安装依赖
-   启动项目
-   开发项目
    -   语言同步
    -   热更新
    -   lint 工具
    -   多项目整合
    -   多项目开发
-   开发完成
    -   预检测
    -   格式化
    -   分析报告
    -   自动化测试
-   提交
    -   CI/CD
    -   自动化检测
    -   自动化构建
    -   分析报告
    -   上报
-   上线
    -   灰度策略
    -   灰度控制
    -   回 gun
-   线上
    -   数据上报
    -   错误上报
    -   CDN
