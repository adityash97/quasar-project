import { RouteRecordRaw } from 'vue-router';
import testroutes from './testRoutes'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TestLayout.vue'),
    children: testroutes
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
