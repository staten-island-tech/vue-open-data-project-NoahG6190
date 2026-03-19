import { createRouter, createWebHistory } from 'vue-router'
import apidata from '@/components/apidata.vue'
import independentdata from '@/components/independentdata.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apidata',
      component: apidata,
    },
    {
      path: '/independentdata',
      name: 'independentdata',
      component: independentdata,
    },
  ],
})

export default router
