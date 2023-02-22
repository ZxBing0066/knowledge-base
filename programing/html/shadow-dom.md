# ShadowDOM

> 使用`ShadowDOM`可以简单的将`js`,`CSS`,`template`封装为组件。使组件从主`DOM`中分离，而不会互相影响。

```
<html>
<head>
    <meta charset="UTF-8">
    <title>Shadow DOM</title>
</head>
<body>
    <div id="nameTag">
        <m1>と申します。</m1>
        <m2>test2</m2>
    </div>
    <template id="nameTagTemplate">
    <style>
    .outer {
      border: 2px solid pink;
      border-radius: 1em;
      background: url(sakura.jpg);
      font-size: 20pt;
      width: 12em;
      height: 7em;
      text-align: center;
      font-family: sans-serif;
      font-weight: bold;
    }
    .name {
      font-size: 45pt;
      font-weight: normal;
      margin-top: 0.8em;
      padding-top: 0.2em;
    }
    </style>
    <div class="outer">
      <div class="name">
        <content select="m1"></content>
        <content select="m2"></content>
      </div>
    </div>
    </template>
    <script src='./main.js'></script>
</body>
</html>
```

```js
var shadow = document.querySelector('#nameTag').createShadowRoot();
var template = document.querySelector('#nameTagTemplate');
var clone = document.importNode(template.content, true);
shadow.appendChild(clone);
```

## ShadowRoot

通过`createShadowRoot`来创建，使`dom`变为`ShadowRoot`。

## content

`content`作为`ShadowRoot`的子标签，可以通过`select`属性将原`dom`中的对应内容嵌套进去，`select`语法和`css selector`一样

