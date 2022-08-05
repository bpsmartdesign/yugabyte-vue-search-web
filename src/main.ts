import { createApp } from "vue"
import { createHead } from "@vueuse/head"

import { globalCookiesConfig } from "vue3-cookies"
import { store } from "@/store"
import router from "@/router"
import i18n from "@/locales"
import App from "./App.vue"
import "animate.css"
import "./main.css"

const head = createHead()

globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
})

console.log("NODE_ENV:", process.env.NODE_ENV)
console.log("Green:", import.meta.env.CVA_GREEN)
console.log("Green:", import.meta.env.CVA_DB_PASSWORD)
console.log("Yellow:", import.meta.env.CVA_YELLOW)
console.log("CVA_SOME_KEY:", import.meta.env.CVA_SOME_KEY)

createApp(App).use(head).use(i18n).use(router).use(store).mount("#app")
