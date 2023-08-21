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

6. 优化setup函数返回对象形式： reactive函数， toRefs函数
- home4.vue
```javascript
 setup() {
    // 返回一个响应式引用
    const data = reactive({
      name: "Even",
      age: 29,
      year: computed({
        get() {
          return 2021 - data.age;
        },
        set(val) {
          data.age = 2021 - val;
        },
      }),
    });
    function changeAge(val) {
      data.age += val;
    }
    function changeYear(val) {
      data.year += val;
    }
    // 返回对象中的属性可在模板中使用
    return { ...toRefs(data), changeAge, changeYear };
  },

```
----

7. 如何使用this
```javascript
import {getCurrentInstance} from 'vue'
setup() {
  const {ctx,proxy} = getCurrentInstance()
  // ctx 代表 this
}

```

8. vue3中表单失效
- form表单中ref指向 不能与data中一样
### script setup使用
```Html
<script setup lang="ts">
<script>
```
1. 如何使用生`命周期函数` \ `ref获取dom`;

```vue
<template>
  <div>
    <div ref="myRef">nihao</div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script setup lang="ts">
  import {ref,onMounted} from 'vue';
  import HelloWorld from './components/HelloWorld.vue';
  let myRef = ref(null);
  onMounted(() => {
    console.log(myRef.value)
  })

</script>
```
