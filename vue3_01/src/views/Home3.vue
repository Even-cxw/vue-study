<template>
  <div class="home3">
    <p>{{ name }}</p>
    <p>
      <button @click="changeAge(-1)">-</button>
      {{ age }}
      <button @click="changeAge(1)">+</button>
    </p>
    <p>
      <button @click="changeYear(-1)">-</button>
      出生年份{{ year }}
      <button @click="changeYear(1)">+</button>
    </p>
  </div>
</template>

<script>
import {computed, reactive, toRefs } from "vue";
export default {
  name: "Home3",
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
};
</script>
