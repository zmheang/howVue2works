



`vue初始化：`

- `initMixin()`
- `stateMixin()`
- `eventsMixin()`
- `lifecycleMixin()`
- `renderMixin()`
- `initGlobalAPI()`
- `Vue`原型上的`$isServer,$ssrContext`属性添加`getter`
- `Vue`原型上的`FunctionalRenderContext`属性赋值
- `Vue`原型上添加`version`属性
- `Vue.prototype.__patch__`
- `Vue.prototype.$mount`
- `Vue.prototype.$mount`



由于`vue`打包的是一个`html`页面，最后我们访问的是`index.html`，此时的js文件已经是vue本来的代码和我们的代码结合在一起之后的了

```
<div id="app">
  {{ message }}
</div>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

这就是`vue`的核心代码，当执行`new Vue()`的时候，之前`vue`准备的那么多就开始运行了