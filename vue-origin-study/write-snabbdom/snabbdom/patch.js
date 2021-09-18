import { createElement } from "./createElement";
import {vnode} from './vnode'
// oldVnode参数会出现的情况
// 1. oldVnode = element
// 2. oldVnode = vnode
export function patch(oldVnode, newVnode) {
  debugger;
  // 判断传入的第一个参数是dom节点，还是虚拟节点？
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 判断是否有子节点； - 转成vnode
    oldVnode = changeVnode(oldVnode);
    console.log('oldVnode', oldVnode);
    // 传入的第一个参数是dom节点，此时要包装成虚拟节点 - 将原来dom保存成elm
    // oldVnode = vnode(oldVnode.tagName.toLowerCase(),{key: 'div'},undefined,[],oldVnode)
  }
  // 判断oldVnode 和 newVnode 是不是同一个节点
  if(oldVnode.data.key == newVnode.data.key && oldVnode.sel == newVnode.sel) {
    // 新旧节点是同一个节点时
    // 老节点与新节点是同一个对象
    if(oldVnode == newVnode) return;
    // 新节点有text属性
    if(newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)){
      console.log('新节点有text属性')
      // 新的节点
      if (newVnode.text != oldVnode.text) {
        oldVnode.elm.innerHTML = newVnode.text;
      }
    } else {
      // 新节点没有text
      console.log('新节点没有text')
      if(!oldVnode.children.length && newVnode.children.length) {
        // 老节点无children, 新节点有children - 添加新节点dom
        let newVnodeEle = createElement(newVnode);
        oldVnode.elm.appendChild(newVnodeEle);
      }
    }



  } else {
    // 不是同一个节点
    let newVnodeEle = createElement(newVnode);
    // if(!oldVnode.elm.parentNode || ) return;
    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(newVnodeEle,oldVnode.elm);
    // 删除指定子节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}

function changeVnode(element) {
  let parentVnode = vnode(element.tagName.toLowerCase(),{key:'1'},undefined,[],element)
  if (element.children.length){
    console.log('element.children',element.children.length);
    for(var i = 0;  i<element.children.length; i++) {
      console.log(element.children[i])
      let item = element.children[i];
      console.log(item.innerHTML)
      let itemVnode = changeVnode(item);
      parentVnode.children.push(itemVnode);
    }
  }
  return parentVnode;
}