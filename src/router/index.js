import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup1 from '../views/Signup1.vue'
import Signup2 from '../views/Signup2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup1',
    name: 'signup1',
    component: Signup1
  },
  {
    path: '/signup2',
    name: 'signup2',
    component: Signup2
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
