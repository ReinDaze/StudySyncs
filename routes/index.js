import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../Pages/LandingPage.vue'; // Pastikan path ini benar
import TesGayaBelajar from '../Pages/TesGayaBelajar.vue'; // Pastikan path ini benar
import Dashboard from '../Pages/Dashboard.vue'; // Import Dashboard
import kontak from '../Pages/kontak.vue'; // Import kontak
import Soaluji from '../Pages/Soaluji.vue'; 

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/tesgayabelajar',
    name: 'TesGayaBelajar',
    component: TesGayaBelajar,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: Dashboard,
  },
  {
    path: '/Soaluji',
    name: 'Soaluji',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
