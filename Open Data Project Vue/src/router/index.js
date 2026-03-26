import { createRouter, createWebHistory } from 'vue-router'
import CauseDetail from '@/components/causedetail.vue'
import CauseList from '@/components/causelist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CauseList,
    },
    {
      path: '/cause/:id',
      name: 'detail',
      component: CauseDetail,
      props: true,
    },
  ],
})

export default router
