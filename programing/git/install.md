# Git install

## Git 编译安装

> [官方文档](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-from-Source) ps: 还是官方文档靠谱,网上找了几个都是有问题,可能是
> 过时了.

使用`yum`等工具安装`git`的时候经常因为仓库没有更新下载下来的是旧版的`git`,要使用最新版的`git`还是得自己动手啊.以`centos`为例

1. 卸载旧版本

```sh
sudo yum remove git     # 删除yum安装版本
which git               # 输出git安装路径
rm -rf /gitpath         # 删除
```

2. 安装编译工具

```sh
sudo yum groupinstall “Development Tools”
```

3. 安装依赖(视机器环境而定)

```sh
sudo yum install curl-devel expat-devel gettext-devel openssl-devel perl-devel zlib-devel
sudo yum install asciidoc xmlto docbook2X # 文档所需依赖环境
sudo ln -s /usr/bin/db2x_docbook2texi /usr/bin/docbook2x-texi # 添加docbook2x-texi软链接
```

4. 下载最新源码

```sh
wget -O git.zip https://github.com/git/git/archive/master.zip
```

5. 解压

```sh
unzip git.zip
cd git-master
```

6. 安装

```sh
make configure
./configure --prefix=/usr
make all doc info
sudo make install install-doc install-html install-info
```

7. 错误收集

> 错误信息

```sh
*tclsh failed; using unoptimized loading
MSGFMT    po/de.msg make[1]: *** [po/de.msg] Error 127
make: *** [all] Error 2
```

> 解决方案

```sh
sudo apt-get install gettext
```
