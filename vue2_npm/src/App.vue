<template>
  <div id="app">
    <vue-rate-component></vue-rate-component>
    <router-view/>  
  </div>
</template>

<style lang="less">
  .hello {
    width: 750px;
    background: red;
  } 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
