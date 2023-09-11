import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AboutDemo from '../views/AboutDemo.vue'
import CheckDemo from '../views/CheckDemo.vue'
import DailyDemo from '../views/DailyDemo.vue'
import HomeDemo from '../views/HomeDemo.vue'
import JoinDemo from '../views/JoinDemo.vue'
// import NavbarDemo from '../components/NavbarDemo.vue'
import StudyDemo from '../views/StudyDemo.vue'
import LoginDemo from '../views/LoginDemo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeDemo
  },
  {
    path: '/about',
    component: AboutDemo
  },
  {
    path: '/check',
    component: CheckDemo
  },
  {
    path: '/daily',
    component: DailyDemo
  },
  {
    path: '/study',
    component: StudyDemo
  },
  {
    path: '/join',
    component: JoinDemo
  },
  {
    path: '/login',
    component: LoginDemo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
