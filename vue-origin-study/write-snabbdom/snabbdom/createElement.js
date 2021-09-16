/**
 * @desc 创建节点 createElement
 * @params {vnode:{object}}
 * @vnode ： 虚拟节点
*/
export function createElement(vnode) {
  // 创建一个dom节点，这个节点还是孤儿节点
  let domNode = document.createElement(vnode.sel);
  // 有文本没有子节点
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    // 内容赋值
    domNode.innerText = vnode.text;
    vnode.elm = domNode;
    // 递归创建子节点
  }
  if(vnode.children && vnode.children.length != 0){
    // 内部是子节点需要递归创建节点
    vnode.children.forEach(item => {
      // 只要调用createElement,就会生成dom
      item.elm = createElement(item);
      // 将创建的dom挂载到父节点上
      domNode.appendChild(item.elm);
    })
  }
  vnode.elm = domNode;
  return vnode.elm;
}