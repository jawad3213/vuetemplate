import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import BookcirculationPage from '../views/BookcirculationPage.vue'
import BookshelfPage from '../views/BookshelfPage.vue'
import SigninPage from '../views/SigninPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/AboutPage',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/BookcirculationPage',
    name: 'Book Circulation',
    component: BookcirculationPage
  },
  {
    path: '/BookshelfPage',
    name: 'Bookshelf',
    component: BookshelfPage
  },
  {
    path: '/SigninPage',
    name: 'Sign In ',
    component: SigninPage
  },
  {
    path: '/SignupPage',
    name: 'Sign up',
    component: SignupPage
  },
  {
    path: '/ContactPage',
    name: 'Contact ',
    component: ContactPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
