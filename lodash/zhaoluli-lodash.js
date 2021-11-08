
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


    function get(object, path, defaultVal) {
      path = toPath(path)

      for (let i = 0; i < path.length; i++) {
        if (object == undefined) {
          return defaultVal
        } else {
          object = object[path[i]]
        }
      }
      return object
    }

    function toPath(val) {
      if (Array.isArray(val)) {
        return val
      } else {
        return val.split('][')
          .reduce((result, item) => {
          return result.concat(item.split('['))
      },[]).reduce((result, item) => {
          return result.concat(item.split('].'))
      },[]).reduce((result, item) => {
          return result.concat(item.split('.'))
      },[])
      }
    }

    
    function property(path) {
      return function (object) {
        return get(object, path)
      }
    }

    function matches(src) {
      // return bind(isMatch, null, window, src)
      return function(obj) {
        return isMatch(obj, src)
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

    function matchesProperty(path, val) {
      return function(obj) {
        return isEqual(get(obj, path), val)
      }
    }


    function iteratee(predicate) {
      if (typeof predicate == 'function') {
        return predicate
      }
      if (typeof predicate == 'string') {
        return property(predicate)
      }
      if (Array.isArray(predicate)) {
        return matchesProperty(...predicate)
      }
      if (typeof predicate == 'object') {
        return matches(predicate)
      }
    }

    function map(collection, mapper) {
      mapper = iteratee(mapper)

      let result = []
      for (let key in collection) {
        result.push(mapper(collection[key], +key, collection))
      }
      return result
    }

    function filter(collection, predicate) {

      predicate = iteratee(predicate)

      let result = []
      for (let key in collection) {
        if (predicate(collection[key], +key, collection) === true) {
          result.push(collection[key])
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

    function sumBy(array) {
      let predicate = iteratee(predicate)
      for (let i = 0; i < array.length; i++) {
        s += predicate(array[i])
      }
      return s
    }

    function unionBy(...array) {
      let predicate = array.pop()
      predicate = iteratee(predicate)
      let result = []
      let seen = new Set()
      for (let i = 0; i < array.length; i++) {
        let computed = predicate(array[i], i, array) 
          if (!seen.has(computed)) {
            result.push(array[i])
            seen.add(array[i])
          }
        }
        return result
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
    unionBy: unionBy,
    split: split,
  }
}()