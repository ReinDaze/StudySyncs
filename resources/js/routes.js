import { createRouter, createWebHistory } from 'vue-router'
import Beranda from './views/Beranda.vue'
import TesGayaBelajar from './views/TesGayaBelajar.vue'
import Dashboard from './views/Dashboard.vue'
import Kontak from './views/Kontak.vue'
import Login from './views/Login.vue'
import Soaluji from './views/Soaluji.vue'
import gayabelajar from './Pages/gayabelajar.vue'

const routes = [
  { path: '/LandingPage', component: Beranda },
  { path: '/tesgayabelajar', component: TesGayaBelajar },
  { path: '/dashboard', component: Dashboard },
  { path: '/kontak', component: Kontak },
  { path: '/login', component: Login },
  { path: '/Soaluji', component: Soaluji },
  { path: '/gayabelajar', component: gayabelajar },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
