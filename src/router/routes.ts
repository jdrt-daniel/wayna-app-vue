import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('pages/DashboardPage.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('pages/UsersPage.vue'),
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('pages/EventsPage.vue'),
      },
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
