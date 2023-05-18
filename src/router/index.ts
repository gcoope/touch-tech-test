import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Client from "../views/Client.vue";
import Asset from "../views/Asset.vue";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/client/:id",
    name: "Client",
    component: Client,
  },
  {
    path: "/asset/:id",
    name: "Asset",
    component: Asset,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
