/* eslint-disable linebreak-style */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/FormLogin.vue') },
      { path: 'register', component: () => import('pages/FormRegister.vue') },
      { path: 'datos', component: () => import('pages/FormData.vue') },
    ],
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'plazas', component: () => import('pages/PlazasPage.vue') },
      { path: 'precios', component: () => import('pages/PreciosPage.vue') },
      { path: 'horarios', component: () => import('pages/HorariosPage.vue') },
      { path: 'configuraciones', component: () => import('pages/ConfiguracionesPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
