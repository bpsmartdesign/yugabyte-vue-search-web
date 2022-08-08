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
    component: () => import("@/views/edit.vue"),
  },
]
//#endregion

const web: RouteRecordRaw = {
  path: "/",
  name: "search--home",
  redirect: { name: "ss--home_page" },
  children: [...mainWeb, ...errorWeb],

  component: () => import("@/views/layout/_pages.vue"),
}

const routes: RouteRecordRaw[] = [web]
export default routes
