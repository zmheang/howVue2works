export function def(obj, key, val, enumerable = true) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: enumerable,
    writable: true,
    configurable: true
  })
}

export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

