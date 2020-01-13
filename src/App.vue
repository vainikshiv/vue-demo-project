<template>
  <div id="app">
<navbar />
  <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
     Navbar,
  },
  methods: {
   
  },
 
}
</script>

<style>

.img {
    width:100px;
    height:50px;
}
.inherit {
    width:inherit;
    height:inherit;
    object-fit: contain;
}
.navbar {
  border-bottom: 1px solid black;
  box-shadow: 5px 0px 10px;
}
</style>
