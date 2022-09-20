import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'component',
        component: () => import('pages/ComponentOnePage.vue'),
      },
      {
        path: 'component',
        component: () => import('pages/ComponentTwoPage.vue'),
      },
    ],
  },
  {
    path: '/newPath',
    component: () => import('layouts/CopiesLayout.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
