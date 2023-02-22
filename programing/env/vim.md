# Vim使用

`v`切换为视图选择模式,移动光标可进行选中
`v`为字符选中,`V`为行选中,`ctrl+v`为块选中

选中状态后,`y`拷贝选中,`d`剪切选中

`yw`拷贝当前光标所在单词,`dw`为剪切

`p`粘贴

`u`撤销上次更改

`%`块跳转

`:linenum`行跳转

## Vundle

> `Vundle`是`vim`的一款插件管理工具, 相对而言还是比较容易上手的.[Github地址](https://github.com/VundleVim/Vundle.vim)

## 安装

1. clone
> 从`github`中`clone`源码到`~/.vim/bundle/Vundle.vim`文件夹中
```sh
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

2. 配置
> 将下面的代码复制到`~/.vimrc`文件中,`注意Plugin那几行插件不是必须的,保留需要的即可`
```sh
set nocompatible              " be iMproved, required
filetype off                  " required
" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')
" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Avoid a name conflict with L9
Plugin 'user/L9', {'name': 'newL9'}
" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
```

3. 安装
> 打开`vim`执行`:PluginInstall`命令来进行安装,或者直接在`shell`执行`vim +PluginInstall +qall`命令也可以

## 使用`Vundle`管理插件
1. 安装
> 可以使用`:PluginInstall plugin`命令来进行安装(这种方式和配置`alias`一样是临时的),也可以通过修改`~/.vimrc`来修改插件(这种方式才是永久的),修改后记得执行`:PluginInstall`来更新
2. 展示所安装插件
> 使用`:PluginList`
3. 更新插件
> 使用`:PluginUpdate`
4. 查找插件
> 使用`:PluginSearch plugin`