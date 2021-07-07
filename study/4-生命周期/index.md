





```mermaid
graph TD
  a[new Vue] --> b[init Event & Lifecycle]
  b --> x(( ))
  x -.-> y[beforeCreate]
  x --> c[init injections & reactivity]
  c --> z(( ))
  z -.-> o[created]
  z --> d{Has 'el' option?}
  d -->|yes| e{Has 'template' option?}
  d -.-> |No   when vm.$mount is called|e
  e --> |yes|f[Compile template into render function]
  e --> |No|g[Compile el`s outerHTML as tempplate]
  f --> p(( ))
  g --> p
  p -.-> q[beforeMount]
  p --> h[Create vm.$el and replace 'el' with it]
  h --> i((Mounted))
  i --> r(( ))
  r -.-> u[updated]
  r --> s[Virtual DOM re-render and patch]
  s --> t(( ))
  t --> v[beforeUpdate]
  t -->|when data changes|i
  i -->|when vm.$destory is called|j[Teardown watchers. child components and event listens]
  j --> k((Destoryed))
```



生命周期：

1. 初始化阶段：为`vue`实例上初始化一些属性，事件以及响应式数据
2. 模板编译阶段：将模板编译成渲染函数
3. 挂载阶段：将实例挂载到指定`DOM`上，即模板渲染到真实的`DOM`中
4. 销毁阶段：将实例自身从父组件中删除，并取消依赖追踪及事件监听



使用`vue`：

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

其实在自己写的代码运行之前，就会执行vue本身的一些js代码，这个思想其实之前一直没有转变过来，总是以为一开始执行的就是自己写的代码，这样是不对的，vue本身就是一个框架，所以在自己的代码之前就已经做了很多事情，为了能够使用的可以编写更加舒适的代码
所以在之前就已经执行了：
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
...
等js代码

function Vue(options) {
  this._init(options)
}
这个_init就是在initMixin的时候挂载在vue原型的方法
Vue.prototype._init = function (options?: Object) {
  const vm = this
  // 将vm.constructor的options的值混合在vue.optioons上，根据不同的选项有不同的合并策略，钩子函数也会合并，并保存在数组中，这样就都可以执行
    vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
    )
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

  // 只有挂载了el元素上才会进入下一步，不然就会停在这里
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
}
所以当我们new Vue()的时候就开始执行了_init()


```

1. `initLifecycle():`

   主要是一些属性的初始化：主要的是`$parent.  $root`

2. `initEvents():`

   在模版编译的过程中就会将代码中的event事件解析出来，分类在render的时候初始化，都是父组件在模版中使用v-on或@注册的子组件内触发的事件

   那么`initEvents()`到底做了什么：

   ```javascript
   vm._events = Object.create(null)
     // init parent attached events
   // 将父组件向子组件注册的事件注册到子组件的实例中
     const listeners = vm.$options._parentListeners
     if (listeners) {
       // 对于新老events的不同，
       updateComponentListeners(vm, listeners)
     }
   ```

   

3. `initRender():`

4. `initInjectioons():`

5. `initState():`

6. `initProvide():`





















