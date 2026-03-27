import { createRouter, createWebHistory } from 'vue-router'
import CausesList from '../views/causelist.vue'
import CauseDetail from '../views/causedetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CausesList,
    },
    {
      path: '/cause/:id',
      name: 'detail',
      component: CauseDetail,
    },
  ],
})

export default router
