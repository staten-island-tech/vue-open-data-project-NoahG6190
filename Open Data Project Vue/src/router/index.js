import { createRouter, createWebHistory } from 'vue-router'
import causelist from '@/components/causelist.vue'
import causedetail from '@/components/causedetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: causelist,
    },
    {
      path: '/cause/:id',
      name: 'detail',
      component: causedetail,
    },
  ],
})

export default router
