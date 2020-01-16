import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}



Vue.config.productionTip = false

const router = new VueRouter({
   routes:[
     {path: '/', component: Home},
     {path: '/About', component: About,  meta: { requiresAuth: true }},
     {path: '/login', component: Login},
     {path: '/Register', component: Register},
   ],
   mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
