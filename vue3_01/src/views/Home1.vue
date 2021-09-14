<template>
  <div class="home1">
    <p>{{name}}</p>
    <p>
      <button @click="changeAge(-1)">-</button>
      {{age}}
      <button @click="changeAge(1)">+</button>
    </p>
    <p>
      <button @click="changeYear(-1)">-</button>
      出生年份{{year}}
      <button @click="changeYear(1)">+</button>
    </p>
  </div>
</template>

<script>
import {ref, computed} from 'vue';
export default {
  name: 'Home',
  setup() {
    // 返回一个响应式引用
    const name = ref('Even')
    const age = ref(29)
    function changeAge(val) {
      age.value += val
    }
    function changeYear(val) {
      year.value += val;
    }
    const year = computed({
      get() {
        return 2021 - age.value;
      },
      set(val) {
        age.value = 2021 - val;
      }
    });
    // 返回对象中的属性可在模板中使用
    return {name, age, changeAge, year, changeYear}
  }
}
</script>
