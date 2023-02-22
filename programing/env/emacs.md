# emacs

install 

https://www.gnu.org/software/emacs/manual/html_node/efaq/Installing-Emacs.html

question

http://stackoverflow.com/questions/19510522/in-centos-6-4-when-configure-emacs

## spacemacs

[Github地址](https://github.com/syl20bnr/spacemacs)

### 安装
> 详见`Github`
1. 备份原有配置
```sh
cd ~
mv .emacs.d .emacs.d.bak
mv .emacs .emacs.bak
```
2. clone仓库
```sh
cd ~
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
emacs # 等待自动安装
```
3. 启动emacs
```sh
emacs # 启动emacs,将会自动安装插件和配置,安装过程中将会有选项询问使用哪种模式可以看自己需求来选择
```
4. 安装完成后重启来让配置生效

### 快捷键
* 特殊快捷键符号表

| 符号 | 含义 |
| --- | --- |
| `C` | `Control` |
| `M` | `Meta` or `Alt` or `+Esc` |
| `Del` | `delete` |
| `RET` | `return` |

* 基本快捷键(Basic) 

| 快捷键 | 用途 |
| --- | --- |
| `C-x C-f` | `find`, 查找文件, 即在缓冲区打开/新建一个文件 |
| `C-x C-s` | `save`, 保存文件 |
| `C-x C-w` | `write`, 保存为 |
| `C-x C-v` | 关闭当前缓冲区文件并打开`find` |
| `C-x i` | 打开`find`选择文件,在光标处插入文件内容 |
| `C-x b` | 新建`?`/切换缓冲区 |
| `C-x C-b` | 显示缓冲区列表 |
| `C-x k` | 关闭缓冲区 |
| `C-x C-c` | 关闭emacs |

### 插件设置

* auto-completion

  1. 安装
  > 打开`~/.spacemacs`文件,在`dotspacemacs-configuration-layers`列表中添加`auto-completion`
  2. 配置
  > 1. `auto-completion-return-key-behavior`表示`RET`按下的操作,包括`complete`(选中当前的选项),`nil`(不做操作)
  > 2. `auto-completion-tab-key-behavior`表示`TAB`按下的操作,包括`complete`,`nil`,`cycle`(在选项中循环切换选中)
  > 3. `auto-completion-complete-with-key-sequence`表示
  3. 
  
















