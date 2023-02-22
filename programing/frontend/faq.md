
## 父子百分比尺寸

Q: 父元素设定最大高度，子元素使用百分比无法生效，会被内容撑大

W: 一般布局高度由内而外，内部使用百分比需要外部为固定尺寸，否则无法生效，

A: 使用 flex 布局，可解决此类问题

```html
<div class="a">
    <div class="b">
        <div class="c">
            <div class="d"></div>
        </div>
    </div>
</div>
```

```css
.a {
    display: flex;
    max-height: 80vh;
    background: red;
}
.b {
    flex: 1;
    background: pink;
}
.c {
    height: 100%;
    background: saddlebrown;
    overflow: auto;
}
.d {
    background: papayawhip;
    height: 100000px;
}
```

<iframe src="https://codesandbox.io/embed/competent-leftpad-z1boc?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fstyles.css&theme=dark"
     title="competent-leftpad-z1boc"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     width="100%"
     height="500"
   ></iframe>

## overflow 和 box-shadow

Q: overflow（hidden/auto/scroll）容器子元素存在阴影时，阴影会被容器遮挡。且横向或纵向滚动会影响到另一边的阴影。

W: overflow 会导致容器成为 BFC，从而导致容器内渲染只出现在盒子内部。

A: 使用 padding 撑开容器，让阴影正常显示，想要修复容器展示大小，可配合使用 -margin。

!!! danger 注意使用 -margin 修复展示大小后，会导致滚动条的偏移，以及滚动时容器展示区域的扩大。

## request body need maintainers

npm 版本与 pnpm 源不匹配，需要降级至 npm 7 以下


## Catastrophic Backtracking

https://www.regular-expressions.info/catastrophic.html

`^(.|\s)*?(\/\/\s*demo\s*start\s*)`
