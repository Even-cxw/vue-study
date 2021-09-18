
import {vnode} from './vnode'
// 形态一 ``` h('div', {}, '文字')```
// 形态一 ``` h('div', {}, [])```
// 形态一 ``` h('div', {}, h())```
export function h(sel,data,c) {
  if(arguments.length < 2) {
    throw new Error('至少传输三个参数')
    // 检查参数c的形态
  } else if(typeof c == 'string' || typeof c == 'number') {
    return vnode(sel, data, c, undefined, undefined);
  } else if (Array.isArray(c)) {
    let children = []
    // 遍历c，收集children
    c.forEach((item) => [
      children.push(item)
    ])
    return vnode(sel, data, undefined, children, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    // 说明在调用h函数
    let children = [c]
    return  (sel, data, undefined, children, undefined)
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
// 形态1``` h('div', {}, '文字')```
let testh1 = h('div', {}, '我是文字')
console.log('testh1', testh1)
// 形态2 ``` h('div', {}, [])```
let testh2 = h('div', {}, [h('a',{},[h('p',{},2)]), h('span',{},2)])
console.log('testh2', testh2)
// 形态3 ``` h('div', {}, h())```
let testh3 = h('div', {},h('span',{},2))
console.log('testh3', testh3)
*/