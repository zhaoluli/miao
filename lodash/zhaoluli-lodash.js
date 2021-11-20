
var zhaoluli = function () {

  function chunk (array, size = 1) {
    let newArray = []
    let count = Math.ceil(array.length / size)
    let j = size
    for (let i = 0, k = 0, j = size; i < count; k+=size, j+=size, i++) {
        if (i === 0){
          newArray.push(array.slice(i,j))
        }
        if (i > 0 && i < count - 1) {
          newArray.push(array.slice(k,j))
        }
        if (i === count - 1) {
          newArray.push(array.slice(k,array.length))
        }
      }
      return newArray
    }

      function isEqual(a, b) {
        if (a === b) {
          return true
        }
        let typea = typeof a
        let typeb = typeof b 
        if (typea !== typeb) {
          return false
        } else  {
          if (typea === 'object') {
            let keya = getKey(a)
            let keyb = getKey(b)
            if (keya.length !== keyb.length) {
              return false
            } else {
                keya.sort()
                keyb.sort()
                  for (let key in keya) {
                    if (keya[key] !== keyb[key]) {
                      return false
                    }
                  }
              }
            for (let key in a) {
              if (!isEqual(a[key], b[key])) {
                return false
              }
            }
            return true
          } else {
            return a === b
          }
        }
      }

      function getKey(obj) {
        let result = []
        for (let key in obj) {
          result.push(key)
        }
        return result
      }

    function compact(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number' && array[i] !== 0 && array[i] === array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    }

    function difference(array, ...values) {
      let newArray = []
      let result = [].concat(...values)
      for (let i =0; i < array.length; i++) {
        if (result.includes(array[i])) {
          continue
        } else {
          newArray.push(array[i])
        } 
      }
      return newArray
    }

    function drop(array, n = 1) {
      let result = []
      for (let i = 0; i < array.length; i++) {
        if (i > (n - 1)) {
          result.push(array[i])
        }
      }
      return result
    }

    function dropRight(array, n = 1) {
      let result = []
      for (let i = array.length - 1, j = 0; i >= 0 ; i--, j++) {
        if (j >= n) {
          result.push(array[i])
        }
      }
      let newArray = []
      for (let i = result.length - 1; i >= 0 ; i--) {
        newArray.push(result[i])
      }
      return newArray
    }

    function flatten(array) {
      let result = []
      for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j])
          }
        } else {
          result.push(array[i])
        }
      }
      return result
    }


    function flattenDeep(array) {
      let result = []
      array.forEach(item => {
        if (Array.isArray(item)) {
          result.push(...flattenDeep(item))
        } else {
          result.push(item)
        }
      })
      return result
    }

    function flattenDepth(array, depth = 1) {
      if (depth == 0) {
        return array.slice()
      }
      let result = []
      array.forEach(item => {
        if (Array.isArray(item)) {
          result.push(...flattenDepth(item, depth - 1))
        } else {
          result.push(item)
        }
      })
      return result
    }

    // function flattenDepth(array, depth = 1) {
    //   if (depth == 0) {
    //     return array.slice()
    //   }
    //   let result = []
    //   for (let i = 0; i < array.length; i++) {
    //     let item = array[i]
    //     if(Array.isArray(array[i])) {
    //       item = flattenDepth(item, depth - 1)
    //       for (let j = 0; j < item.length; j++) {
    //         result.push(item[j])
    //       }
    //     } else {
    //       result.push(array[i])
    //     }
    //   }
    //   return result
    // }

    function fill(array, value, start = 0, end = array.length) {
      for (let i = start; i < end; i++) {
        array[i] = value
      } 
      return array
    }
    
    function fromPairs(array) {
      let obj = {}
      for (let i of array) {
        obj[i[0]] = i[1]
      }
      return obj
    }

    function head(array) {
      for (let i = 0; i < array.length; i++){
        return array[i]
      }
    }
  


    function indexOf(array, value, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++) {

        if (array[i] === value) {
          return i
        }
      }
    }

    function initial(array) {
      array.pop()
      return array
    }

    function intersection(...array) {
      let map = {}
      array.forEach(item => {
        item.forEach(it => {
          if (it in map) {
            map[it]++
          } else {
            map[it] = 1
          }
        })
      })

      let result = []

      for (let i in map) {
        if (map[i] === array.length) {
          result.push(+i)
        }
      }
      return result
    }

    function join(array, separator = ',') {
      let str = ''
      for (let i = 0; i < array.length; i++) {
        str = str + array[i] + separator
      }
      
      let strs = ''
      for (let i = 0; i< str.length - 1; i++) {
        strs += str[i]
      }
      return strs
    }

    function last(array) {
      return array[array.length - 1]
    }

    function lastIndexOf(array, value, fromIndex = array.length-1) {
      for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === value) {
          return i
        }
      }
      return -1
    }

    function pull(array, ...values) {
      let result = []
      for (let i of array) {
        if (!values.includes(i)) {
          result.push(i)
        }
      }
      return result
    }

    function reverse(array) {
      let i = 0
      let j = array.length - 1
      while (j >= i) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        j--
        i++
      }
      return array
    }

    function sortedIndex(array, value) {
      let low = 0
      let high = array.length - 1
      if (array[low] > value) return 0
      if (array[high] < value) return high + 1
      while (high >= low) {
        let mid = (low + high) >> 1
        if (array[mid] === value) {
          high =  mid - 1
        }

        if (array[mid] > value) {
          high = mid - 1
        }

        if (array[mid] < value) {
          low = mid + 1
        }
      }
      return low
    }

    function union(...array) {
      let result = []
      for (let i = 0; i < array.length; i++) {
        result = result.concat(array[i])
      }
      return Array.from(new Set(result))
    }

    function uniq(array) {
      return Array.from(new Set(array))
    }

    function uniqBy(ary, predicate = identity) {
      predicate = iteratee(predicate)
      let result = []
      let seen = []
      for (let i = 0; i < ary.length; i++) {
        let temp = predicate(ary[i])
        if (!seen.includes(temp)) {
          result.push(ary[i])
          seen.push(temp)
        }
      }
      return result
    }

    function uniqWith(ary, predicate) {
      let result = []
      for (let i = 0; i < ary.length; i++) {
        if (!result.some(item => predicate(item, ary[i]))) {
          result.push(ary[i])
        }
      }
      return result
    }

    function unzip(array) {
      let result = []
      let count = array[0].length
      let j = 0
      while (count) {
        let ans = []
        for (let i = 0; i < array.length; i++) {
          ans.push(array[i][j])
        }
        result.push(ans)
        j++
        count--
      }
      return result
    }


    function without(array, ...values) {
      let result = []
      let map = new Map()
      for (let i of values) {
        map.set(i, true)
      }
      for (let i of array) {
        if (!map.has(i)) {
          result.push(i)
        }
      }
      return result
    }

    function xor(...array) {
      let map = {}
      let result = []
      let newArray = [].concat(...array)
      for (let i of newArray) {
        if (i in map) {
          map[i]++
        } else {
          map[i] = 1
        }
      }

      for (let i in map) {
        if (map[i] === 1) {
          result.push(+i)
        }
      }

      return result
    }

    function zip(...array) {
      let count = array[0].length
      let newArray = []
      let j = 0
      while (count) {
        let result = []
        for (let i = 0; i < array.length; i++) {
          result.push(array[i][j])
        }
        newArray.push(result)
        j++
        count--
      }
      return newArray
    }

    function shuffle(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        let idx = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[idx]
        array[idx] = temp
      }
      return array
    }


  //传入参数获取深层属性值
  function get(object, path, defaultVal = undefined) {
    path = toPath(path)// 当path为字符串是调用topath函数将其转化为数组
    for (let i of path) {//遍历数组
      if (object == undefined) {//object读取数组为undefined返回默认值
        return defaultVal
      } else {
        object = object[i] //object读取
      }
    }
    return object
  }

    // function toPath(val) {
    //   if (Array.isArray(val)) {
    //     return val
    //   } else {
    //     return val.split('][')
    //       .reduce((result, item) => {
    //       return result.concat(item.split('['))
    //   },[]).reduce((result, item) => {
    //       return result.concat(item.split('].'))
    //   },[]).reduce((result, item) => {
    //       return result.concat(item.split('.'))
    //   },[])
    //   }
    // }

      //将字符串转化为数组
  function toPath(val) {
    if (Array.isArray(val)) {
      return val
    } else {
      return val.replace(/\[|(\]\.)|\.|(\]\[)|(\]\.|\])/g, ',').split(',')
    }
  }

    //返回一个函数输出接受的属性字符串的属性值
    function property(prop) {
      return function (obj) {
        return get(obj, prop) //调用get函数获取深层次属性
      }
    }
  

    
  //返回一个函数判断接受的对象是否匹配另一个对象
  function matches(obj) {
    return function(srcObj) {
      for (let key in obj) {
        if (obj[key] !== srcObj[key]) {
          return false
        }
      }
      return true
    }
  }


    // function matches(obj) {
    //   return function(src) {
    //     for (let key in obj) {
    //       if (obj[key] !== src[key]) {
    //         return false
    //       }
    //     }
    //     return true
    //   }
    // }

    // function matchesProperty(ary) {
    //   let key = ary[0]
    //   let val = ary[1]
    //   return function(obj) {
    //     return obj[key] === val
    //   }
    // }

  //返回一个函数判断接受的数组是否配接收的对对对象
  function matchesProperty(ary) {
    let temp = ary[0]
    let temp1 = ary[1]
    return function(obj) {
      if (obj[temp] == temp1) {
        return true
      }
    }
    return false
  }



    //创建interatee函数将上面三种情况汇总
  function iteratee(param) {
    if (typeof param == 'string') {
     return param = property(param)
    }
    if (Array.isArray(param)) {
      return matchesProperty(param)
    }

    if (typeof param == 'object') {
     return param = matches(param)
    }
    if (typeof param == 'function') {

      return param
    }
  }

  function map(collection, predicate) {
    let mapper = iteratee(predicate)
    let result = []
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        result.push(mapper(collection[i], i, collection))
      }
    } else if (typeof collection == 'object') {
      for (var key in collection) {
        result.push(mapper(collection[key], key, collection))
      }
    }
    return result
  }

    function filter(collection, predicate) {
      predicate = iteratee(predicate)
      let result = []
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          if (predicate(collection[i], i, collection) == true)
            result.push(collection[i])
        }
      } else if (typeof collection == 'object') {
        for (var key in collection) {
          if (predicate(collection[key], key, collection) == true)
            result.predicate(collection[key])
        }
      }
      return result
    }

    function forEach(array, action) {
      for (let i = 0; i < array.length; i++) {
        action(array[i], i, array)
      }
      return array
    }

    function isMatch(object, source) {
      for (let key in source) {
        if (source[key] && typeof source[key] !== 'object') {
          if (source[key] !== object[key]) {
            return false
          } 
        } else {
            if (!isMatch(object[key], source[key])) {
              return false
            }
        }
      }
      return true
    }

    function sum(array) {
      return array.reduce((total, item) => {
        return total + item
      }, 0)
    }

    function sumBy(ary, predicate) {
      predicate = iteratee(predicate)
      return ary.reduce((total, cur) => {
        return predicate(cur) + total
      }, 0)
    }
    


    function split(str, separator, limit = Infinity) {
      let result = []
      let startIdx = 0 
      str = str.slice(0,limit + 1)
      if (typeof separator == 'string') {
        let index = str.indexOf(separator, startIdx) //取出第一次匹配的的下标
        while (index >= 0 ) { //下标还存在时
          result.push(str.slice(startIdx, index)) //将匹配下标之前的字符串push
          startIdx = index + separator.length // 每次push后更新起始下标
          index =  str.indexOf(separator, startIdx)//更新下一次匹配到的下标
        }
      }
      result.push(str.slice(startIdx)) // 将末尾的字符串匹配上去
      return result
    }

    function parseJson(input) {
      let str = input
  
      let i = 0
      function parseValue() {
        let c = str[i]
        if (c == '[') {
          return parseArray()
        }
        if (c == '{') {
          return parseObject()
        }
        if (c == '"') {
          return parseString()
        }
        if (c == 't') {
          return parseTrue()
        }
        if (c == 'f') {
          return parseFalse()
        }
        if (c == 'n') {
          return parseNull()
        }
        return parseNumber()
      }
      function parseTrue() {
        i += 4
        return true
      }
      
      function parseFalse() {
        i += 5
        return true
      }
      
      function parseNull() {
        i += 4
        return null
      }
      //字符串解析
      function parseString() {
        i++ //跳过当前双引号
        let strs = ''
        while (str[i] !== '"') {
          strs += str[i++]
        }
        i++ //跳过最后一个双引号
        return strs
      }
      //从i指向的位置解析出一个数值，此时i已经指向数值第一位
      function parseNumber() {
        let numStr = ''
        while (str[i] >= '0' && str[i] <= '9') {
          numStr += str[i++]
        }
        return +numStr
      }
      //此时i指向数组'['，解析出一个数组，移动i到数组最后，返回数组
      function parseArray() {
        i++
        let strAry = []
        if (str[i] == ']') {//数组为空时
          i++
          return strAry
        }
        while (true) {
          let val = parseValue()//递归判断数组里面的值
          strAry.push(val)
          if (str[i] == ']') {
            i++
            return strAry
          }else if (str[i] == ',') {
            i++
          }
        }
      }
      
      function parseObject() {
        i++
        let strObj = {}
        if (str[i] == '}') {
          i++
          return strObj
        }
        while (true) {
          let key = parseString()//对象的key肯定为字符串
          i++ //跳过冒号
          let val = parseValue()//对象的只有多种情况，使用递归解析
          strObj[key] = val
          if (str[i] == '}') {
            i++
            return strObj
          } else if (str[i] == ',') {
            i++
          }
        }
       }
       return parseValue()
    }


    function groupBy(array, predicate = it => it) {
      let result = {}
      for (let i = 0; i < array.length; i++) {
        let key = predicate(array[i], i, array)//将数组的相关属性传给predicate函数
        if (!Array.isArray(result[key])) {
          result[key] = []
        }
        result[key].push(array[i])
      }
      return result
    }

    function identity(value) {
      return value
    }

    function mapValues(obj, mapper) {
      let result = {}
      for (let key in obj) {
        let val = obj[key]
        result[key] = mapper(val, key, obj)
      }
      return result
    }

    function includes(collection, value, fromIndex = 0) {
      if (typeof collection == 'string') {
        if (collection.indexOf(value, fromIndex) !== -1) {
          return true
        }else {
          return false
        }
      }

      if (Array.isArray(collection)) {
        if (collection.indexOf(value, fromIndex) !== -1) {
          return true
        }else {
          return false
        }
      }

      if (typeof collection == 'object') {
        for (let key in collection) {
          if (collection[key] == value) {
            return true
          }
        }
        return false
      }
    }
  



    

  



        




















  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
    drop: drop,
    dropRight: dropRight,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fill: fill,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    pull: pull,
    reverse: reverse,
    sortedIndex: sortedIndex,
    union: union,
    uniq: uniq,
    unzip: unzip,
    without: without,
    xor: xor,
    zip: zip,
    shuffle: shuffle,
    property: property,
    get: get,
    toPath: toPath,
    matches: matches,
    matchesProperty: matchesProperty,
    iteratee: iteratee,
    map: map,
    filter: filter,
    forEach: forEach,
    isMatch: isMatch,
    sum: sum,
    sumBy: sumBy,
    isEqual: isEqual,
    uniqBy: uniqBy,
    split: split,
    parseJson: parseJson,
    identity: identity,
    uniqWith: uniqWith,
    includes: includes,
  }
}()