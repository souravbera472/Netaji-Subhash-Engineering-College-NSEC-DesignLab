import Vue from 'vue'
import VueRouter from 'vue-router'
import TextEditor from '../components/TextEditor'
import Home from '../page/Home.vue'
import login from '../page/login.vue'
import Allblogs from '../page/Allblogs.vue'
Vue.use(VueRouter)
const routes = [
{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/texteditor',
    name: 'TextEditor',
    component: TextEditor
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/allblogs',
    name: 'Allblogs',
    component: Allblogs
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router