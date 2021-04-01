function mergeObject (obj1, obj2) {
  Object.keys(obj2).forEach(key => {
    let v1 = obj1[key]
    let v2 = obj2[key]
    if (Array.isArray(v1) && Array.isArray(v2)) {
      obj1[key] = v1.concat(v2)
    } else if (isObj(v1) && isObj(v2)) {
      mergeObject(v1, v2)
    } else {
      obj1[key] = v2
    }
  })

  return obj1
}

function isObj(obj) {
  return typeof obj === 'object' && obj !== null
}

function isFn(fn) {
  return typeof fn === 'function'
}

var obj1 = {
  a: {
    c: 5,
    b:[2,3,4]
  },
  d () {
    console.log(5)
  }
}

var obj2 = {
  a: {
    c: 4,
    b: [5]
  },
  d: 5,
  e () {
    console.log('e')
  }
}
const obj = mergeObject(obj1, obj2)
console.log(obj)
obj.e()
