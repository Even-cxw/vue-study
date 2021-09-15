
## 虚拟DOM和diff算法

  ### snabbdom介绍
  - snabbdom是著名的虚拟dom库，是diff算法的鼻祖，vue源码借鉴了snabbdom;
  > [官方git-ts版本](https://github.com/snabbdom/snabbdom)
  #### ``snabbdom-study目录（库的引用和使用方法）``
  ```javascript
    npm i -D snabbdom
  ``` 

  ### 手写snabbdom
   #### ``write-snabbdom目录``
  - h函数
    1. h函数重载
    ```javascript
      // 不同的参数代表不同意思，h函数支持多种传参格式
      h('div','文字');
      h('div',[]);
      h('div',h());
      h('div',{}, []); - *
      h('div',{},'文子'); - *
      h('div',{},h()); - *
    ```
    2. 手写h函数 - 写低配版h函数
      - 大家可以尝试写三种形态分别输出以上虚拟节点
        1. 形态一 ``` h('div', {}, '文字')```
        2. 形态一 ``` h('div', {}, [h('a','我是a连接'),h('span')])```
        3. 形态一 ``` h('div', {}, h())```
      - 输出对应虚拟节点形态
      > 难点深层嵌套h函数实现递归嵌套
      ```javascript
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