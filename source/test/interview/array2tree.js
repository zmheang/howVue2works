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

const arr2Tree1 = (array) => {
  // 将一个元素添加至tree的对应节点上
  function findByIdFromArr(ele, tree) {
    for (let i = 0; i < tree.length; i++) {
      if (ele.pid == tree[i].id) {
        if (tree[i].children) {
          // 先不去重
          tree[i].children.push(ele)
        } else {
          tree[i].children = [ele]
        }
      } else {
        if (tree[i].children && tree[i].children.length > 0) {
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

function arr2Tree2(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  //
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    // 对象中没有
    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id];

    if (pid === null) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result;
}

const arr2Tree3 = list => {
  let res = []
  const map = {}

  list.forEach(ele => {
    const {id, pid} = ele
    const children = (map[pid] = (map[pid] || []))
    if(!res && pid == null) {
      res = children
    }
    children.push(ele)
    ele.children = map[id] || (map[id] = [])
  })
  return res || []



}





// console.log(arr2Tree(arr))
// console.log(arr2Tree2(arr))
console.log(arr2Tree3(arr))


