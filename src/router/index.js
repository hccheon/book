import { createRouter, createWebHistory } from 'vue-router'
import BookHome from '../views/BookHome.vue'
import About from '../views/About.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '../views/BookDetail.vue'
import BookAdd from '../views/BookAdd.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BookHome
  },
  {
    path: '/home',
    name: 'Home',
    component: BookHome
  },
  {
    path: '/list',
    name: 'List',
    component: BookList
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* component: () => import(/* webpackChunkName: "about" '../views/About.vue') */
  },
  {
    path: '/detail',
    name: 'DetailBook',
    component: BookDetail
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: BookAdd
  },
  
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
