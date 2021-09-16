import { createElement } from "./createElement";
import {vnode} from './vnode'
export function patch(oldVnode, newVnode) {
  // 判断传入的第一个参数是dom节点，还是虚拟节点？
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 传入的第一个参数是dom节点，此时要包装成虚拟节点 - 将原来dom保存成elm
    oldVnode = vnode(oldVnode.tagName.toLowerCase,{},[],undefined,oldVnode)
  }

  // 判断oldVnode 和 newVnode 是不是同一个节点
  if(oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
   // 新久节点是同一个节点时
  } else {
    // 不是同一个节点
    let newVnodeEle = createElement(newVnode);
    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(newVnodeEle,oldVnode.elm);
  }
}