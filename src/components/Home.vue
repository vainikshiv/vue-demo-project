<template>
    <div>Home Page</div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'Home',
    data(){
        return {
           info: null
        }      
    },
    mounted() {
        const config = {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            
        }
     
         console.log(this.$cookies.get('sid'))
         axios.get("https://myerp.sjain.io/api/resource/User",{headers: config})
         .then(response => {
            console.log(response)
         })
      
       console.log('Redirect to homepage')
    }
}
</script>

<style scoped>
  
  
</style>