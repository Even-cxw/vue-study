import {h} from '../snabbdom/h';
import {patch} from '../snabbdom/patch'

// let oldVnode = h('ul', {}, [
//   h('ol', {key: 'A'}, 1),
//   h('ol', {key: 'B'}, 2),
//   h('ol', {key: 'C'}, 3)
// ])

let newVnode = h('ul', {}, [
  h('ol', {key: 'd'}, [
    h('div', {},'nihao'),
    h('div', {}, 'tatat')
  ]),
  h('ol', {key: 'B'}, '2'),
  h('ol', {key: 'C'}, '3')
])



// let newVnode = h('ul', {key:'2'},  'wobuhao')

let container = document.querySelector('#container');
patch(container, newVnode)