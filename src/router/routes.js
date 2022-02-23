const routes = [
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "login", component: () => import("pages/login.vue") }
    ],
  },
  {
    path: "/login", component: () => import("pages/login.vue")
  },
  {
    path: "/", component: () => import("pages/loginOption.vue")
  },
  {
    path: "/wallet", component: () => import("pages/wallet.vue")
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
