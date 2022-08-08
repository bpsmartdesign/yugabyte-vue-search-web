import { RouteRecordRaw } from "vue-router"

//#region web routes
const errorWeb: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "ss--unknown",
    redirect: { name: "ss--404" },
  },
  {
    path: "/404",
    name: "ss--404",
    component: () => import("@/views/404.vue"),
  },
]
const mainWeb: RouteRecordRaw[] = [
  {
    path: "/",
    name: "ss--home_page",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/edit",
    name: "ss--edit",
    component: () => import("@/views/Edit.vue"),
  },
]
//#endregion

const routes: RouteRecordRaw[] = [...mainWeb, ...errorWeb]
export default routes
