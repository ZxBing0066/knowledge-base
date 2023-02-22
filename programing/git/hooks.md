# hooks

## husky

husky 不再自动安装，需要配置 prepare，yarn2 下 husky 安装需要注意

husky 不再支持独立配置文件或 package.json 配置

新版直接使用 git core.hooksPath，优势是比直接使用更友好点

需要使用 package.json 可使用 hook 中调用 npm script 的方式
