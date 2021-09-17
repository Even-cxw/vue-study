import { createElement } from "./createElement";
import {vnode} from './vnode'
// oldVnode参数会出现的情况
// 1. oldVnode = element
// 2. oldVnode = vnode
export function patch(oldVnode, newVnode) {
  // 判断传入的第一个参数是dom节点，还是虚拟节点？
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 传入的第一个参数是dom节点，此时要包装成虚拟节点 - 将原来dom保存成elm
    oldVnode = vnode(oldVnode.tagName.toLowerCase(),{key: 'div'},undefined,[],oldVnode)
  }
  // 判断oldVnode 和 newVnode 是不是同一个节点
  if(oldVnode.data.key == newVnode.data.key && oldVnode.sel == newVnode.sel) {
    // 新旧节点是同一个节点时
    if (oldVnode.children.length && !newVnode.children.length ) {
      // 1.老节点有children, 新节点无children - 移除老节点dom

    } else if (!oldVnode.children.length && newVnode.children.length) {
      // 2.老节点无children, 新节点有children - 添加新节点dom
      let newVnodeEle = createElement(newVnode);
      oldVnode.elm.appendChild(newVnodeEle);
    } else if(!oldVnode.children.length && !newVnode.children.length) {
      // 3.老节点无children, 新节点无children - 不发生电话

    }
  } else {
    // 不是同一个节点
    let newVnodeEle = createElement(newVnode);
    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(newVnodeEle,oldVnode.elm);
    // 删除指定子节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}