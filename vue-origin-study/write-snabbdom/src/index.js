import {h} from '../snabbdom/h';
import {patch} from '../snabbdom/patch'

// let oldVnode = h('ul', {}, [
//   h('ol', {key: 'A'}, 1),
//   h('ol', {key: 'B'}, 2),
//   h('ol', {key: 'C'}, 3)
// ])




let newVnode = h('div', {key:''}, [
  h('ol', {key: 'd'}, [
    h('div', {},'nihao'),
    h('div', {}, [h('h1',{},'我是标题')]),
  ]),
  h('ol', {key: 'B'}, '2'),
  h('ol', {key: 'C'}, '3')
])
// let oldVnode = h('div', {key:'2'},  'wobuhao')
let oldVnode = document.querySelector('#container');

patch(oldVnode, newVnode)