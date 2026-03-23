import { createRouter, createWebHistory } from 'vue-router'
import CausesListView from '../views/CausesListView.vue'
import CauseDetailView from '../views/CauseDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CausesListView,
    },
    {
      path: '/cause/:id',
      name: 'detail',
      component: CauseDetailView,
    },
  ],
})

export default router
