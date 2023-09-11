<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <NavbarDemo />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import NavbarDemo from '@/views/NavbarDemo.vue'

export default {
  components: {
    NavbarDemo
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  border: 0;
  padding: 0;
}

nav {
  //padding: 30px;
  margin: 50px,0,0,0;
  a {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #4f74a3;
    }
  }
}
</style>
