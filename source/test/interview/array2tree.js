console.log('array to tree')
console.log('--------------------------------------')

let arr = [
  {id: '1', pid: null},
  {id: '2', pid: null},
  {id: '3', pid: null},
  {id: '1-1', pid: '1'},
  {id: '1-2', pid: '1'},
  {id: '2-1', pid: '2'},
  {id: '3-1', pid: '3'},
  {id: '1-1-1', pid: '1-1'},
  {id: '1-1-2', pid: '1-1'},
  {id: '1-1-1-1', pid: '1-1-1'},
]

const arr2Tree = (array) => {
  // 将一个元素添加至tree的对应节点上
  function findByIdFromArr(ele, tree) {
    for (let i = 0; i < tree.length; i++) {
      if(ele.pid == tree[i].id) {
        if(tree[i].children) {
          // 先不去重
          tree[i].children.push(ele)
        }else {
          tree[i].children = [ele]
        }
      }else {
        if(tree[i].children && tree[i].children.length > 0) {
          findByIdFromArr(ele, tree[i].children)
        }
      }
    }
  }
  let res = array.reduce((acc, cur) => {
    // 没有父节点的说明是第一层，有父节点的去找到父节点，然后添加到children下
    if (!cur.pid) {
      acc.push(cur)
    } else {
      findByIdFromArr(cur, acc)
    }
    return acc
  }, [])
  return res
}

console.log(arr2Tree(arr))
