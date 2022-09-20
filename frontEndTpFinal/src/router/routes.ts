/* eslint-disable linebreak-style */
import { RouteRecordRaw } from 'vue-router';
import Main from 'layouts/MainLayout.vue';
import Register from 'pages/FormRegister.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Main,
    children: [
      { path: 'register', component: Register },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/register',
    component: Register,
  },
];

export default routes;
