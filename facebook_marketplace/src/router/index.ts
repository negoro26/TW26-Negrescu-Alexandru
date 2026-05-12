import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produse from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/produse', component: Produse }
  ],
})

export default router
