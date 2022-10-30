# 包管理器

-   版本管理
-   包安装
-   发包
-   node 版本管理器
    -   nvm
    -   volta
-   包管理器
    -   npm
    -   yarn
    -   cnpm
    -   pnpm
        -   为什么不全用软连接
            https://pnpm.io/faq#why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store
        -   软连接和硬连接的区别
            https://xzchsia.github.io/2020/03/05/linux-hard-soft-link/#:~:text=%E7%A1%AC%E9%93%BE%E6%8E%A5%E5%92%8C%E8%BD%AF%E9%93%BE%E6%8E%A5%E7%9A%84%E5%8C%BA%E5%88%AB&text=%E5%AE%9E%E9%99%85%E4%B8%8A%EF%BC%8C%E7%A1%AC%E9%93%BE%E6%8E%A5%E5%92%8C,-
            %E7%9A%84%E6%96%87%E4%BB%B6%E5%88%9B%E5%BB%BA%E8%BD%AF%E8%BF%9E%E6%8E%A5%E3%80%82
            -   软连接为快捷方式，有单独文件
            -   硬连接是同一份文件
            -   硬连接不得连接不存在的文件、不得连接目录、不得跨文件系统连接
        -   workspace
            -   使用 pnpm-workspace.yaml 定义
            -   workspace 间互相引用可使用 workspace: 协议，可以在 publish 时自动转换为对应版本号。（需要使用 pnpm
                publish）
