import { RouteRecordRaw } from "vue-router"
import { checkAppAccess, removeHash, removeQueryParams } from "../utils/route"
import { Role } from "@/store/data/types.d"

//#region web routes
const blogWeb: RouteRecordRaw = {
  path: "/blog",
  name: "cva--blog",
  beforeEnter: [removeQueryParams, removeHash], //! Don't miss this
  redirect: { name: "cva--home" }, // TODO Update this when the blog is available
  children: [], // TODO Don't miss to update children routes
}
const authWeb: RouteRecordRaw = {
  path: "/auth",
  name: "cva--auth",
  redirect: { name: "cva--auth_login" },
  component: () => import("@/views/layouts/_auth.vue"),
  children: [
    {
      path: "/auth/login",
      name: "cva--auth_login",
      component: () => import("@/views/pages/public/auth/Login.vue"),
    },
    {
      path: "/auth/register",
      name: "cva--auth_register",
      component: () => import("@/views/pages/public/auth/Register.vue"),
    },
    {
      path: "/auth/forgot",
      name: "cva--auth_forgot",
      component: () => import("@/views/pages/public/auth/Forgot.vue"),
    },
    {
      path: "/auth/delete",
      name: "cva--auth_deleted_account",
      component: () => import("@/views/pages/public/auth/Deleted.vue"),
    },
  ],
}
const errorWeb: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "cva--unknown",
    redirect: { name: "cva--404" },
  },
  {
    path: "/401",
    name: "cva--401",
    component: () => import("@/views/pages/public/error/401.vue"),
  },
  {
    path: "/403",
    name: "cva--403",
    component: () => import("@/views/pages/public/error/403.vue"),
  },
  {
    path: "/404",
    name: "cva--404",
    component: () => import("@/views/pages/public/error/404.vue"),
  },
  {
    path: "/500",
    name: "cva--500",
    component: () => import("@/views/pages/public/error/500.vue"),
  },
  {
    path: "/502",
    name: "cva--502",
    component: () => import("@/views/pages/public/error/502.vue"),
  },
  {
    path: "/503",
    name: "cva--503",
    component: () => import("@/views/pages/public/error/503.vue"),
  },
  {
    path: "/504",
    name: "cva--504",
    component: () => import("@/views/pages/public/error/504.vue"),
  },
]
const mainWeb: RouteRecordRaw[] = [
  {
    path: "/",
    name: "cva--home_page",
    component: () => import("@/views/pages/public/Home.vue"),
  },
  {
    path: "/contact",
    name: "cva--contact",
    component: () => import("@/views/pages/public/Contact.vue"),
  },
  {
    path: "/cookies-policy",
    name: "cva--cookies",
    component: () => import("@/views/pages/public/Cookies.vue"),
  },
  {
    path: "/FAQ",
    name: "cva--FAQ",
    component: () => import("@/views/pages/public/FAQ.vue"),
  },
  {
    path: "/pricing",
    name: "cva--pricing",
    component: () => import("@/views/pages/public/Pricing.vue"),
  },
  {
    path: "/privacy-policy",
    name: "cva--privacy",
    component: () => import("@/views/pages/public/Privacy.vue"),
  },
  {
    path: "/resume-list",
    name: "cva--resumes",
    component: () => import("@/views/pages/public/Resumes.vue"),
  },
  {
    path: "/terms",
    name: "cva--terms",
    component: () => import("@/views/pages/public/Terms.vue"),
  },
  {
    path: "/home",
    name: "cva--home",
    component: () => import("@/views/pages/public/Home.vue"),
  },
]
//#endregion

const web: RouteRecordRaw = {
  path: "/",
  name: "search--home",
  redirect: { name: "cva--home_page" },
  children: [...mainWeb, ...errorWeb, authWeb, blogWeb],

  component: () => import("@/views/layouts/_pages.vue"),
}

const routes: RouteRecordRaw[] = [web, app]
export default routes
