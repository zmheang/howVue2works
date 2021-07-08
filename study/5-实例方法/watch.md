`示例：`

```javascript
vm.$watch(expOrFn, callback. [options])
```

`params:`

- `{string | Function} expOrFn`
- `{Function | Object} callback`
- `{Object} [options]`
  - `{boolean} deep`
  - `{boolean} immediate`

`return: {Function} unwatch`

`usage:` 注意当监听对象是一个对象或者数组的时候，新值与旧值相同

```javascript
Vue.prototype.$watch = function (expOrFn,cb,options) {
    const vm: Component = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      cb.call(vm, watcher.value)
    }
    return function unwatchFn () {
      watcher.teardown()
    }
  }
```

