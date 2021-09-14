### vue3 学习笔记

- vue2与vue3 的不同
1. vue2使用option Api, vue3使用composition Api.

- vue3
1. setup函数
    - 不能使用this
    - 使用Composition Api的入口
    - 在beforeCreate 之前调用
    - 返回对象中的属性可在模板中使用

2. ref函数
    - 返回一个响应式引用（返回相应对象）

3. reactive函数
    - 返回新的响应式引用对象

4. setup参数 props context

5. 如何脱离项目独立运行.vue文件
```javascript
npm install  @vue/cli-service-global -g 
// 然后切换到项目执行
vue serve Home1.vue
```

```javascript
import {ref} form 'vue';
export default {
    setup() {
        let name = ref('我是Even')
        return {name}
    }
}
```

- home1: vue3计算属性写法
- home2: vue2计算属性写法
- home3: vue3 data升级