import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import Keranjang from '../views/KeranjangView.vue'
import OrderSukses from '../views/OrderSuccessView.vue'
import FoodDetail from '../views/FoodDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foods',
      name: 'foods',
      component: FoodView
    },
    {
      path: '/foods/:id',
      name: 'FoodDetail',
      component: FoodDetail
    },
    {
      path: '/keranjang',
      name: 'Keranjang',
      component: Keranjang
    },
    {
      path: '/pesanan-sukses',
      name: 'OrderSukses',
      component: OrderSukses
    },
  ]
})

export default router
