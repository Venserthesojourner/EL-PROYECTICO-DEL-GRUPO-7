/* eslint-disable linebreak-style */
import { route } from 'quasar/wrappers';
import { useSessionStatus } from 'src/stores/session-store';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(() => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const store = useSessionStatus();
    console.log(to);
    if (!to.meta.auth && (store.login === 'logout')) {
      console.log('entre');
      next('/login');
    }
  });

  return Router;
});

// seguir este video: https://www.youtube.com/watch?v=P3PW-PbG-ns&list=PL_euSNU_eLbeHw1Ov7HdVGELQ_ztuAjx8&index=13
// info https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
// https://github.com/vuejs/pinia/discussions/723
// https://router.vuejs.org/api/interfaces/router.html#beforeeach
