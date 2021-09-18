import {h} from '../snabbdom/h';
import {patch} from '../snabbdom/patch'

// let oldVnode = h('ul', {}, [
//   h('ol', {key: 'A'}, 1),
//   h('ol', {key: 'B'}, 2),
//   h('ol', {key: 'C'}, 3)
// ])




let myVnode1 = h('div', {key:'1'}, '111');
let myVnode2 = h('div', {key:'1'},  'wobuhao')
let container = document.querySelector('#container');
patch(container, myVnode1);
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  patch(myVnode1, myVnode2);
})