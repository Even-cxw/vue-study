import {Observer} from './Observer';
/**
 * @desc 将一个正常的object转换成每个层级属性都是响应式
 */
 var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 4,
}

function observe(value) {
  if (typeof value != 'object') return;
  var ob;
  if (typeof value.__obj__ != 'undefined') {
    // __obj__ 存在；抛出。
    ob = value.__obj__
  } else {
    // __obj__ 不存在，创造；抛出。
    ob= new Observer(value)
  }
  return ob;
}