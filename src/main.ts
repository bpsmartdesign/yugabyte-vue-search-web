import { createApp } from "vue"
import router from "@/router"
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import App from "./App.vue"
import "@/assets/line-awesome-1.3.0/scss/line-awesome.scss"
import "element-plus/dist/index.css"
import "animate.css"
import "./main.css"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(ElementPlus).mount("#app")
