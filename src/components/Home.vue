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
    async mounted() {
        // const config = {
        //     "Content-Type": "application/json"
           
        // }
        // await axios.post("https://myerp.sjain.io/api/method/login",{usr:"administrator", pwd:"Sjain@123"},{headers: config})
        // .then(response => {
        //     // this.info = response            
        //     console.log(response)
        //     })
        // .catch(errors => {
        //     this.info = errors
        //     console.log(errors)
        // }) 


    //     var d = await axios.post("https://myerp.sjain.io/api/method/login",{usr:"administrator", pwd:"Sjain@123"},{headers: config})
    //   console.log(d)
         var b = await axios.get("https://myerp.sjain.io/api/resource/Employee")
      console.log(b)
    }
}
</script>

<style scoped>
 

</style>