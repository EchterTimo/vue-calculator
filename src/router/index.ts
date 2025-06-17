import { createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalcBasic from '@/components/calculators/calc-basic.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/calculator',
      redirect: '/calculator/basic',
    },
    {
      path: '/calculator/basic',
      name: 'calculator-basic',
      component: CalcBasic,
    }
  ],
})

export default router
