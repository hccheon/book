import { createRouter, createWebHistory } from 'vue-router'
import BookHome from '../views/BookHome.vue'
import About from '../views/About.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '../views/BookDetail.vue'
import BookModify from '../views/BookModify.vue'
import BookAdd from '../views/BookAdd.vue'
import BookSearch from '../views/BookSearch.vue'
import BookLendList from '../views/BookLendList.vue'
import BookLend from '../views/BookLend.vue'
import BookReturn from '../views/BookReturn.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
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
    path: '/modify',
    name: 'ModifylBook',
    component: BookModify
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: BookAdd
  },
  {
    path: '/search',
    name: 'SearchBook',
    component: BookSearch
  },
  {
    path: '/lendlist',
    name: 'LendList',
    component: BookLendList
  },
  {
    path: '/lend',
    name: 'LendBook',
    component: BookLend
  },
  {
    path: '/return',
    name: 'ReturnBook',
    component: BookReturn
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
