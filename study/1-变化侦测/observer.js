import {def} from "../utils";
import Dep from './dep'

class Observer {
  constructor(value) {
    this.value = value
    // this.dep = new Dep()
    this.vnCounnt = 0

    // add '__ob__' tag
    def(value, '__ob__' , this)
    // 数组单独处理
    if(Array.isArray(value)) {
      console.log('this is array')
    }else {
      // add
      this.walk(value)
    }
  }

  // object内部所有属性都添加依赖
  walk(value) {
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(value, keys[i])
    }
  }


}


function defineReactive(obj, key, val = null) {
  // 每个data都管理一个dep
  const dep = new Dep()
  // 检测属性正确性
  // Object.getOwnPropertyDescriptor() 方法
  // 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 添加依赖
      const value = getter ? getter.call(obj) : val
      dep.depend()
      return value
    },
    set(newVal) {
      const value = getter ? getter.call(obj) : val
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
        dep.notify()
      }
    }
  })




}
