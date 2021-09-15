console.log(1111)
import {h} from '../snabbdom/h';
// 形态一 ``` h('div', {}, '文字')```
// 形态一 ``` h('div', {}, [])```
// 形态一 ``` h('div', {}, h())```
let testh = h('div', {}, [h('a',{},[h('p',{},2)]), h('span',{},2)])
console.log(testh)