<template>
  <div class="home2">
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
export default {
  data() {
    return {
      name: 'Even',
      age: 29,
    }
  },
  computed:{
    year: {
      get(){
        return 2021 - this.age;
      },
      set(val) {
        return val;
      }
    }
  },
  methods: {
    changeAge(val) {
      this.age +=val;
    },
    // 无法对计算属性从新赋值；
    changeYear(val) {
      this.age +=val;
      this.year = 2021 + val;
    }
  }
}
</script>