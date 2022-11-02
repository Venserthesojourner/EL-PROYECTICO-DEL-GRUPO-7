/* eslint-disable linebreak-style */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/FormLogin.vue'), meta: { auth: false } },
      { path: 'register', component: () => import('pages/FormRegister.vue'), meta: { auth: false } },
      { path: 'datos-persona', component: () => import('src/pages/FormDataPersona.vue'), meta: { auth: true } },
      { path: 'datos-estacionamiento', component: () => import('src/pages/FormDataEstacionamiento.vue'), meta: { auth: true } },
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
      { path: 'nuevoEmpleado', component: () => import('pages/NuevoEmpleado.vue'), meta: { auth: true } },
      { path: 'configuraciones', component: () => import('pages/ConfiguracionesPage.vue'), meta: { auth: true } },
    ],
  },

  {
    path: '/mobile',
    component: () => import('layouts/MobileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexMobile.vue') },
      { path: 'login', component: () => import('pages/FormLogin.vue'), meta: { auth: false } },
      { path: 'register', component: () => import('pages/RegisterMobile.vue'), meta: { auth: false } },
      { path: 'index', component: () => import('pages/IndexMobileLogin.vue'), meta: { auth: false } },
      { path: 'buscar', component: () => import('pages/BusquedaMobile.vue'), meta: { auth: false } },
      { path: 'reserva', component: () => import('pages/ReservaMobile.vue'), meta: { auth: false } },
      { path: 'cronometro', component: () => import('pages/CronometroMobile.vue'), meta: { auth: false } },
      { path: 'tipo-reserva', component: () => import('pages/TipoReservaMobile.vue'), meta: { auth: false } },
      { path: 'confirmacion', component: () => import('pages/ConfirmacionMobile.vue'), meta: { auth: false } },
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
