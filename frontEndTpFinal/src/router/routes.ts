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
      { path: 'mp', component: () => import('pages/MercadoPago.vue'), meta: { auth: false } },
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
      { path: 'listaEmpleados', component: () => import('pages/ListaEmpleados.vue'), meta: { auth: true } },
      { path: 'nuevoEmpleado', component: () => import('pages/NuevoEmpleado.vue'), meta: { auth: true } },
      { path: 'configuraciones', component: () => import('pages/ConfiguracionesPage.vue'), meta: { auth: true } },
    ],
  },

  {
    path: '/mobile',
    component: () => import('layouts/MobileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexMobile.vue') },
      { path: 'loginMobile', component: () => import('pages/FormLoginMobile.vue'), meta: { auth: false } },
      { path: 'register', component: () => import('pages/FormRegisterMobile.vue'), meta: { auth: false } },
      { path: 'index', component: () => import('pages/IndexMobileLogin.vue'), meta: { auth: false } },
      { path: 'buscar', component: () => import('pages/BusquedaMobile.vue'), meta: { auth: false } },
      { path: 'reserva', component: () => import('pages/ReservaMobile.vue'), meta: { auth: false } },
      { path: 'cronometro', component: () => import('pages/CronometroMobile.vue'), meta: { auth: false } },
      { path: 'confirmacion', component: () => import('pages/CheckMobile.vue'), meta: { auth: false } },
      { path: 'tipo-reserva/:id', name: 'tipo-reserva', component: () => import('src/pages/TipoReservaMobile.vue'), meta: { auth: false }, props: true },
      { path: 'mis-patentes', component: () => import('pages/MisPatentesMobile.vue'), meta: { auth: false } },
      { path: 'mis-reservas', component: () => import('pages/MisReservasMobile.vue'), meta: { auth: false } },
      { path: 'mis-favoritos', component: () => import('src/pages/MisFavoritosMobile.vue'), meta: { auth: false } },
      { path: 'mi-historial', component: () => import('src/pages/MiHistorialMobile.vue'), meta: { auth: false } },
      { path: 'codigo-reserva', component: () => import('src/pages/CodigoReservaMobile.vue'), meta: { auth: false } },
      { path: 'forma-pago/:id', name: 'forma-pago', component: () => import('src/pages/FormaPagoMobile.vue'), meta: { auth: false }, props: true },
      { path: 'elegir-fecha/:id', name: 'elegir-fecha', component: () => import('src/pages/SelectDateMobile.vue'), meta: { auth: false }, props: true },
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
