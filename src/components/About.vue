<template>
    <h1>About Page</h1>
    
</template>

<script>
const axios = require('axios');

export default {
    name: 'About',
    async mounted() {
        const config = {
            "Content-Type": "application/json"           
        }
        var a = await axios.get("https://myerp.sjain.io/api/resource/User",{headers: config})
        console.log(a)
        document.write(a.data)
    }
}
</script>

<style lang="sass" scoped>

</style>