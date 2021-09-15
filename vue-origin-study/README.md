
## 虚拟DOM和diff算法

  ### snabbdom介绍
  - snabbdom是著名的虚拟dom库，是diff算法的鼻祖，vue源码借鉴了snabbdom;
  > [官方git-ts版本](https://github.com/snabbdom/snabbdom)
  ```javascript
    npm i -D snabbdom
  ```
  - [node环境和浏览器的区别](https://www.cnblogs.com/webARM/p/5004595.html)
    - node对浏览器V8引擎进行封装优化，可在费浏览器中运行并对二进制数据进行处理，(javascript不能处理二进制数据)
  
  ### snabbdom的h函数如何工作
  ### diff算法原理
  ### 手写diff算
  - diff算法可以进行精细化对比，最小化更新