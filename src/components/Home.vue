<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" ><div >
                <b-navbar variant="faded" type="light">
                    <b-navbar-brand href="#">
                    <img src="../assets/sjain.png" alt="Sjain"/>
                    </b-navbar-brand>
                </b-navbar>
                </div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
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