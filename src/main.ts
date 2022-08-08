import { createApp } from "vue"
import router from "@/router"
import ElementPlus from 'element-plus'
import App from "./App.vue"
import 'element-plus/dist/index.css'
import "animate.css"
import "./main.css"

createApp(App).use(router).use(ElementPlus).mount("#app")
