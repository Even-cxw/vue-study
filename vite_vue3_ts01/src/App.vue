

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
