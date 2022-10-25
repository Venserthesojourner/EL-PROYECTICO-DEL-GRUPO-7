import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/FormLogin.vue'), meta: { auth: false } },
      { path: 'register', component: () => import('pages/FormRegister.vue'), meta: { auth: false } },
      { path: 'datos', component: () => import('pages/FormData.vue'), meta: { auth: true } },
    ],
  },

  {
    path: '/dashboard',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { auth: true },
    children: [
      { path: 'plazas', component: () => import('pages/PlazasPage.vue'), meta: { auth: true } },
      { path: 'precios', component: () => import('pages/PreciosPage.vue'), meta: { auth: true } },
      { path: 'promociones', component: () => import('pages/PromocionesPage.vue'), meta: { auth: true } },
      { path: 'planes', component: () => import('pages/PlanesPage.vue'), meta: { auth: true } },
      { path: 'horarios', component: () => import('pages/HorariosPage.vue'), meta: { auth: true } },
      { path: 'nuevoEmpleado', component: () => import('pages/nuevoEmpleado.vue'), meta: { auth: true } },
      { path: 'configuraciones', component: () => import('pages/ConfiguracionesPage.vue'), meta: { auth: true } },
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
