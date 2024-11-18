import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../Pages/LandingPage.vue'; // Pastikan path ini benar
import TesGayaBelajar from '../Pages/TesGayaBelajar.vue'; // Pastikan path ini benar
import Dashboard from '../Pages/Dashboard.vue'; // Import Dashboard
import Gayabelajar from '../resources/js/Pages/gayabelajar.vue';

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
  {
    path: '/gayabelajar',
    name: 'gayabelajar',
    component: gayabelajar,
  },
  {
    path: '/Bantuan',
    name: 'Bantuan',
    component: Bantuan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
