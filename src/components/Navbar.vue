<template>
    <!-- Navbar -->
    <div>
        <b-navbar toggleable="lg" type="light">
            <b-navbar-brand href="#"  >
                <div class="img">               
                    <img class="inherit" src="../assets/sjain.png" alt="Sjain"/>                
                </div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
               
                <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item href="#" ><router-link to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span></b-nav-item>
                <b-nav-item href="#"><router-link to="/login">Login</router-link></b-nav-item>
            </b-navbar-nav>
            <b-dropdown id="dropdown-right" right :text="{status}" @change="onChange($event)" variant="light" class="m-2">
                <b-dropdown-item value="available" >Available</b-dropdown-item>
                <b-dropdown-item value="On break" >On break</b-dropdown-item>
                <b-dropdown-item value="Offline" >Offline</b-dropdown-item>
            </b-dropdown>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                

                
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#" @click="logout()">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    name: 'Navbar',
    data() {
        return {
            status: ""
        }
    },
    methods: {
        onChange(event){
            this.status = event
            console.log(event)
        },
        logout() {
        const config = {
            'Accept': 'application/json',
            "Content-Type": "application/json",        
        }
        axios.get("https://myerp.sjain.io/api/method/logout",{headers: config})
        .then(response => {
            console.log(response)
            this.$router.push('/login')
            this.$cookies.remove('sid')
        })
        .catch(errors => {
            console.log(errors)
        })
        }
    }

}
</script>

<style >
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
  border-bottom: 1px solid blue;
  box-shadow: 5px 0px 10px;
}
</style>