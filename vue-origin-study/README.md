
## 虚拟DOM和diff算法

  ### snabbdom介绍
  - snabbdom是著名的虚拟dom库，是diff算法的鼻祖，vue源码借鉴了snabbdom;
  > [官方git-ts版本](https://github.com/snabbdom/snabbdom)
  > [snabbdom-study尝试使用](https://github.com/Even8/vue-study/tree/main/vue-origin-study/snabbodm-study)
  ```javascript
    npm i -D snabbdom
  ``` 

  ### 手写Vue源码
  - [手写h函数代码](https://github.com/Even8/vue-study/blob/main/vue-origin-study/write-snabbdom/snabbdom/h.js)
    ```javascript
      // 可以尝试写三种形态分别输出以下虚拟节点
        1. 形态一 ``` h('div', {}, '文字')```
        2. 形态一 ``` h('div', {}, [h('a','我是a连接'),h('span')])```
        3. 形态一 ``` h('div', {}, h())```
      // 输出对应虚拟节点形态
        let vnode = {
          sel: "div",, // 对应h函数第一个参数
          data: {},  // 对应h函数第二个参数，元素属性
          childre: [
            {
              sel: 'a',
              data:{},
              text: '1',
              key: undifined,
              elm: undifined,
            }
          ], // 对应h函数第三个参数
          text: "我是一个盒子" // 对应h函数第三个参数
          key:undifined,
          elm: undifined,
        }
      ```
  - 手写diff算法
    ```javascript
    // key是节点唯一标识，告诉diff算法是否同一个dom节点 ```###如果父节点不是同一个节点，无论key变没变，都会暴力拆除所有子元素```
    > 1.[封装patch函数](https://github.com/Even8/vue-study/blob/main/vue-origin-study/write-snabbdom/snabbdom/patch.js)
    /**
     * @desc 实现diff算法比较，并将新的dom挂载dom树上；
     * @params {oldVnode:(object|Elemnt),newVnode:object}
     * @oldVnode : 老虚节点或element
     * @newVnode ：新的虚拟节点
    */
      
    > 2.[封装createElement函数](https://github.com/Even8/vue-study/blob/main/vue-origin-study/write-snabbdom/snabbdom/patch.js)
    /**
     * @desc 创建节点
     * @params {vnode:{object}}
     * @vnode ： 虚拟节点
     * @return : Element ： 虚拟节点所有dom树；
    */
    ```



  - 什么是虚拟dom
  > 用javascript对象描述dom的层次结构，
  - diff算法比较发生在谁和谁的比较
  > 新的虚拟dom与老的虚拟dom相互比较



  - [node环境和浏览器的区别](https://www.cnblogs.com/webARM/p/5004595.html)
    - node对浏览器V8引擎进行封装优化，可在费浏览器中运行并对二进制数据进行处理，(javascript不能处理二进制数据)
  
  ### snabbdom的h函数如何工作
  ### diff算法原理
  ### 手写diff算
  - diff算法可以进行精细化对比，最小化更新