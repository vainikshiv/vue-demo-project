<template>
 <div>
   <!-- <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="text" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form> -->

  <b-container class="bv-example-row ">
  <b-row>
    <b-col cols="4" offset="4" >
        <b-card header-border-variant="info" border-variant="info" class="login-form" >
            <template v-slot:header class="body">
              <h4 class="mb-0 header">Login</h4>
            </template>
            
          <b-form class="login" @submit.prevent="login">
            
            <b-row class="my-1">
              <b-col >
                  <b-form-input class="margin:10px;" v-model="email" placeholder="Enter your username"></b-form-input>
              </b-col>
            </b-row> 
            <b-row class="my-3">
              <b-col >
                  <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
              </b-col>
            </b-row>            
            
            <b-button block variant="outline-primary" type="submit">Login</b-button>
          </b-form>
        </b-card>
    </b-col>
  </b-row>
</b-container>
   
 </div>
 
</template>

<script>
const axios = require('axios');
export default {
    name: 'Login',
    data(){
      return {
        email : "",
        password : ""
      }
    },
   methods: {
      login: async function () {
        let email = this.email 
        let password = this.password
        const config = {
            "Content-Type": "application/json"          
        }
        await axios.post("https://myerp.sjain.io/api/method/login",{usr:email, pwd:password},{headers: config})
        .then(response => {
            // this.info = response           
            console.log(response)
            this.$router.push('/')
            })
        .catch(errors => {
            // this.info = errors
            console.log(errors)
        }) 
        // this.$store.dispatch('login', { email, password })
      //  .then(() => this.$router.push('/'))
    //    .catch(err => console.log(err))
      }
    }
}
</script>

<style scoped>
    .login-form {
      box-shadow: 3px 3px 3px 1px;

    }
    .header {
       text-align: left;

    }
    body {
      background-color: antiquewhite;
    }
</style>