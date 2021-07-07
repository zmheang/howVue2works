import {remove} from '../utils'
export default class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    remove(this.subs, sub)
  }
  depend() {


  }
  notify() {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }

}
