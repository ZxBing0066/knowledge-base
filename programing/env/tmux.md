# Tmux

> Tmux是一个管理终端窗口会话的工具,而且具有很多很赞的用途

## 安装

  * 包管理器安装

    ```sh
    brew install tmux
    ```

  * 编译安装

    ```sh
    git clone https://github.com/tmux/tmux.git # 获取想要安装的版本源码
    cd tmux
    sh autogen.sh 
    ./configure && make 
    ```

    安装前需注意安装`gcc`等编译依赖包

## panes的默认布局方式
  
  默认有even-horizontal, even-vertical, main-horizontal, main-vertical, tiled五种布局方式

## CLIENTS和SESSIONS

  `CLIENTS`代表运行了tmux的终端,`SESSIONS`代表tmux中的会话.

## WINDOWS和PANES

  `WINDOWS`代表tmux中的窗口,`PANES`代表tmux中的面板.

## 快捷键

| 快捷键     | 用途 |
| :---      | :--- |
| C-b       | 前置功能键,所有快捷键都是在此之后输入来触发的 |
| ?         | 列出按键绑定 |
| :         | 进入命令模式 |
| C-z       | 挂起 |
| t         | 显示时间 |
| ~         | 显示tmux之前的消息通知 |
| C,M-o     | 旋转,反向旋转当前panes的布局 |
| M-1~5     | 切换对应的panes的默认布局 |
| Space     | 在panes的默认布局中循环切换 |
| C,M-方向键 | 以每次1,5像素调整pane大小 |
| 方向键     | 按方向进入pane |
| ",%       | 上下,左右分割pane |
| ;         | 切换到之前的pane |
| o         | 切换到下一个pane |
| q         | 显示pane的index |
| m         | 标记当前pane |
| M         | 清除编辑的pane |
| x         | 干掉当前pane |
| z         | 切换当前pane的缩放模式 |
| {,}       | 向前,后交换pane位置 |
| !         | 将当前pane脱离当前window独立新开一个window |
| c         | 创建一个新的window |
| &         | 干掉当前的window |
| f         | 搜索window |
| w         | 列出所有的window |
| i         | 显示当前window的一些信息 |
| l         | 切换到之前的window |
| p,n       | 切换到下一个window |
| 0~9       | 切换对应index的window |
| '         | 输入window的index来切换window |
| .         | 输入设置当前window的index
| ,         | 重命名当前window |
| $         | 重命名session |
| (,)       | 向前,向后切换session |
| L         | 切换至之前的session |
| s         | 列出所有的session |
| [         | 进入复制模式 |
| #         | 列出所有的粘贴缓冲区 |
| ]         | 粘贴最近的缓冲区内容 |
| =         | 选择粘贴的缓冲区 |
| -         | 删除最近的粘贴缓冲区 |
| d         | 断开当前client |
| D         | 选择一个client使其断开 |
| r         | 强制重绘当前client |

* 问题
`tmux`打开`emacs`无法使用`shift+arrow`选中:

  将以下内容添加到`~/.tmux.conf`:
  ```
  setw -g xterm-keys on
  ```
  将以下内容添加到`~/.emacs.d/init.el`:
  ```
  ;; handle tmux's xterm-keys
  ;; put the following line in your ~/.tmux.conf:
  ;;   setw -g xterm-keys on
  (if (getenv "TMUX")
      (progn
        (let ((x 2) (tkey ""))
      (while (<= x 8)
        ;; shift
        (if (= x 2)
            (setq tkey "S-"))
        ;; alt
        (if (= x 3)
            (setq tkey "M-"))
        ;; alt + shift
        (if (= x 4)
            (setq tkey "M-S-"))
        ;; ctrl
        (if (= x 5)
            (setq tkey "C-"))
        ;; ctrl + shift
        (if (= x 6)
            (setq tkey "C-S-"))
        ;; ctrl + alt
        (if (= x 7)
            (setq tkey "C-M-"))
        ;; ctrl + alt + shift
        (if (= x 8)
            (setq tkey "C-M-S-"))

        ;; arrows
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d A" x)) (kbd (format "%s<up>" tkey)))
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d B" x)) (kbd (format "%s<down>" tkey)))
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d C" x)) (kbd (format "%s<right>" tkey)))
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d D" x)) (kbd (format "%s<left>" tkey)))
        ;; home
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d H" x)) (kbd (format "%s<home>" tkey)))
        ;; end
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d F" x)) (kbd (format "%s<end>" tkey)))
        ;; page up
        (define-key key-translation-map (kbd (format "M-[ 5 ; %d ~" x)) (kbd (format "%s<prior>" tkey)))
        ;; page down
        (define-key key-translation-map (kbd (format "M-[ 6 ; %d ~" x)) (kbd (format "%s<next>" tkey)))
        ;; insert
        (define-key key-translation-map (kbd (format "M-[ 2 ; %d ~" x)) (kbd (format "%s<delete>" tkey)))
        ;; delete
        (define-key key-translation-map (kbd (format "M-[ 3 ; %d ~" x)) (kbd (format "%s<delete>" tkey)))
        ;; f1
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d P" x)) (kbd (format "%s<f1>" tkey)))
        ;; f2
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d Q" x)) (kbd (format "%s<f2>" tkey)))
        ;; f3
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d R" x)) (kbd (format "%s<f3>" tkey)))
        ;; f4
        (define-key key-translation-map (kbd (format "M-[ 1 ; %d S" x)) (kbd (format "%s<f4>" tkey)))
        ;; f5
        (define-key key-translation-map (kbd (format "M-[ 15 ; %d ~" x)) (kbd (format "%s<f5>" tkey)))
        ;; f6
        (define-key key-translation-map (kbd (format "M-[ 17 ; %d ~" x)) (kbd (format "%s<f6>" tkey)))
        ;; f7
        (define-key key-translation-map (kbd (format "M-[ 18 ; %d ~" x)) (kbd (format "%s<f7>" tkey)))
        ;; f8
        (define-key key-translation-map (kbd (format "M-[ 19 ; %d ~" x)) (kbd (format "%s<f8>" tkey)))
        ;; f9
        (define-key key-translation-map (kbd (format "M-[ 20 ; %d ~" x)) (kbd (format "%s<f9>" tkey)))
        ;; f10
        (define-key key-translation-map (kbd (format "M-[ 21 ; %d ~" x)) (kbd (format "%s<f10>" tkey)))
        ;; f11
        (define-key key-translation-map (kbd (format "M-[ 23 ; %d ~" x)) (kbd (format "%s<f11>" tkey)))
        ;; f12
        (define-key key-translation-map (kbd (format "M-[ 24 ; %d ~" x)) (kbd (format "%s<f12>" tkey)))
        ;; f13
        (define-key key-translation-map (kbd (format "M-[ 25 ; %d ~" x)) (kbd (format "%s<f13>" tkey)))
        ;; f14
        (define-key key-translation-map (kbd (format "M-[ 26 ; %d ~" x)) (kbd (format "%s<f14>" tkey)))
        ;; f15
        (define-key key-translation-map (kbd (format "M-[ 28 ; %d ~" x)) (kbd (format "%s<f15>" tkey)))
        ;; f16
        (define-key key-translation-map (kbd (format "M-[ 29 ; %d ~" x)) (kbd (format "%s<f16>" tkey)))
        ;; f17
        (define-key key-translation-map (kbd (format "M-[ 31 ; %d ~" x)) (kbd (format "%s<f17>" tkey)))
        ;; f18
        (define-key key-translation-map (kbd (format "M-[ 32 ; %d ~" x)) (kbd (format "%s<f18>" tkey)))
        ;; f19
        (define-key key-translation-map (kbd (format "M-[ 33 ; %d ~" x)) (kbd (format "%s<f19>" tkey)))
        ;; f20
        (define-key key-translation-map (kbd (format "M-[ 34 ; %d ~" x)) (kbd (format "%s<f20>" tkey)))

        (setq x (+ x 1))
        ))
      )
    )     
  ```
[答案地址](http://unix.stackexchange.com/questions/24414/shift-arrow-not-working-in-emacs-within-tmux)


> [tmux github地址](https://github.com/tmux/tmux)

> [参考文档](http://manpages.ubuntu.com/manpages/xenial/en/man1/tmux.1.html)
