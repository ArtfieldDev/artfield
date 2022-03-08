const routes = [
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/Index.vue") },
      { path: "chart", component: () => import("pages/chart.vue") },
      { path: "wallet", component: () => import("pages/wallet.vue") },
      { path: "profile", component: () => import("pages/profile.vue") },
    ],
  },
  {
    path: "/selectHome", component: () => import("pages/settings/selectHomeScreen.vue")
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
