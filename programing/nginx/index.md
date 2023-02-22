# Nginx
## Install
1. 使用`yum`或者`apt-get`等包管理器,安装迅速但是更新慢,需要使用新版需要配置源,以`centos7 yum`为例([document地址](http://nginx.org/en/linux_packages.html)):
  1. 创建`/etc/yum.repos.d/nginx.repo`文件,然后加入以下内容:
  ```
  [nginx]
  name=nginx repo
  baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/
  gpgcheck=0
  enabled=1
  ```
  2. 将上面内容的`OS`替换为`centos`,`OSRELEASE`替换为系统版本号`7`
  3. 需要`Mainline`版本的在`url`的`OS`目录前添加`mainline`目录
  4. 然后直接使用包管理器安装就可以安装最新版了

2. 直接使用源码编译的方式([document地址](http://nginx.org/en/docs/configure.html)):
  待补全...
  
## Start

## Config