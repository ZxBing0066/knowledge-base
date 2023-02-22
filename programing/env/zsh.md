# ZSH

> `MacOS`中默认安装`zsh`,`Linux`中没有.

## 安装

[官网](http://www.zsh.org/)

```sh
yum install zsh # for Redhat Linux
apt-get install zsh # for Ubuntu Linux
```

## 安装oh-my-zsh

[Github](https://github.com/robbyrussell/oh-my-zsh)

```sh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" # use curl
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)" # use wget
```

## 配置
```sh
vim ~/.zshrc # 查看zsh配置文件
ZSH_THEME="random" # 主题,所包含的主题可以在~/.oh-my-zsh/themes/中查看,random是随机主题
plugins=(git ruby) # 插件,插件使用空格隔开
alias zshconfig="mate ~/.zshrc" # 配置别名
```

## 配置修改应用

> 配置修改后不会立即生效,需要重启`shell`或者使用`source ~/.zshrc`命令来应用修改

* `zsh`主题之[agnoster](https://github.com/agnoster/agnoster-zsh-theme)
1. 测试字体是否支持
```sh
echo "\ue0b0 \u00b1 \ue0a0 \u27a6 \u2718 \u26a1 \u2699"
```
![字体支持后的输出](https://gist.githubusercontent.com/agnoster/3712874/raw/characters.png)
2. 不支持是需要安装[powerline字体](`https://github.com/powerline/fonts`)
3. 安装字体后需要配置`terminal`的字体展示
> `iterm`中在`Preferences => Profiles => Text`中修改`Non-ASCII Font`为刚刚安装的字体即可,若是仍然不能展示可重启`terminal`试试

* [iterm配色主题切换](https://gist.github.com/kevin-smets/8568070)
1. 下载iterm主题[主题库地址](http://iterm2colorschemes.com/) 推荐[Dark.itermcolors]( https://raw.githubusercontent.com/altercation/solarized/master/iterm2-colors-solarized/Solarized%20Dark.itermcolors)
2. 在`preferences => Profiles => Colors`中选择`Load Presets => import`导入配色文件
3. `Load Presets => ThemeName`载入对应的配色


> [参考地址](http://zhuanlan.zhihu.com/mactalk/19556676)

* 快捷键配置
> 修改`~/.oh-my-zsh/lib/key-bindings.zsh`中的快捷键绑定

* 自定义配置

使用`option`按键跳转单词
  ```sh
  bindkey "^[[1;3C" forward-word
  bindkey "^[[1;3D" backward-word
  ```
