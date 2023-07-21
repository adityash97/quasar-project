export default [
  {
    path: '',
    redirect: { name: 'account/LoginPage' },
  },

  {
    path: '',
    name: 'account/LoginPage',
    component: () => import('pages/account/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'account/RegisterPage',
    component: () => import('pages/account/RegisterPage.vue'),
  },
];
