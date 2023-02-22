# Alias-别名配置

> `alias`命令是用来给`shell`命令设置别名的,说简单点就是设置快捷命令,比如原来需要输入`git commit -am 'message'`,设置别名后直接输入`gcam 'message'`就好了,大大提高使用效率

* 添加或修改
```sh
alias aliasname='command -argumnts'
```

* 列出当前所有的`alias`
```sh
alias
```

* 删除别名
```sh
unalias aliasname
```

* 注意事项
> `alias`设置是临时性的,就是说退出`shell`之后设置的别名就会被销毁,所以需要设置永久别名需要直接修改`shell`配置文件
```sh
vim ~/.zshrc # zsh配置文件,其他shell自行更换文件名
```
> 格式为`alias zshconfig="mate ~/.zshrc"`,添加到底部即可,修改后记得使用`source`命令来应用一下新的配置.

* 进阶用法
> 还有一些高端的用法可以看[这里](http://www.linuxhowtos.org/Tips%20and%20Tricks/command_aliases.htm)学习