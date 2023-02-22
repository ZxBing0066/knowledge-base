# tmuxinator

> tmuxinator是一个tmux的管理工具,使用它可以很方便的创建和管理tmux

* 安装

  ```sh
  gem install tmuxinator
  ```

* 设置默认编辑器

  tmuxinator某些操作会需要调用默认编辑器,可以执行以下命令查看默认编辑器:
  
  ```sh
  echo $EDITOR
  ```
  
  若是没有设置可以将以下代码添加到你的默认shell配置文件中:
  
  ```sh
  export EDITOR='vim'
  ```
  
* 自动补全

  从仓库中或者是源码中下载对应的文件放到`~/.bin`文件夹中,然后将其配置到`shell`配置文件中,以`zsh`为例:
  
  ```
  source ~/.bin/tmuxinator.zsh
  ```
  
* 使用

  * 创建一个项目
    
    ```sh
    tmuxinator new [project]
    ```
    
  * 编辑项目

    ```sh
    tmuxinator open [project]
    ```
    
  * 打开一个session

    ```sh
    tmuxinator start [project] [alias]
    ```
    
    使用alias将会为session设定一个别名,让同一个配置文件可以重用
    
  * 其他命令

    * 复制一个已有的项目

      ```sh
      tmuxinator copy [existing] [new]
      ```
      
    * 列出所有项目

      ```sh
      tmuxinator list
      ```
    
    * 删除项目

      ```sh
      tmuxinator delete [project]
      ```
      
    * 清空所有配置项

      ```sh
      tmuxinator implode
      ```
      
    * 检查环境配置文件等

      ```sh
      tmuxinator doctor
      ```
      
    * 显示帮助

      ```sh
      tmuxinator help
      ```
      
    * 显示项目执行的shell命令

      ```sh
      tmuxinator debug [project]
      ```
      
    * 显示版本号

      ```sh
      tmuxinator version
      ```


> [tmuxinator github地址](https://github.com/tmuxinator/tmuxinator)
