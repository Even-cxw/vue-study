
import {vnode} from './vnode'
// 形态一 ``` h('div', {}, '文字')```
// 形态一 ``` h('div', {}, [])```
// 形态一 ``` h('div', {}, h())```
export function h(sel,data,c) {
  console.log(arguments.length)
  if(arguments.length < 2) {
    throw new Error('至少传输三个参数')
  } else if(typeof c == 'string' || typeof c == 'number') {
    return vnode(sel, data, c, undefined, undefined);
  } else if (Array.isArray(c)) {
    let childre = []
    c.forEach((item) => [
      childre.push(item)
    ])
    return vnode(sel, data, undefined, childre, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    // 说明在调用h函数
  } else {
    throw new Error('传入参数错误')
  }
}


/**
        let vnode = {
          sel: undifined, // 对应h函数第一个参数
          data: {},  // 对应h函数第二个参数，元素属性
          text: "我是一个盒子" // 对应h函数第三个参数
          childre: undifined, // 对应h函数第三个参数
          key:undifined,
          sel: "div",
        }
*/