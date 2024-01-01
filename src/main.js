import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
//** AXIOS */
import {request} from '@/mixins/request'
const app = createApp(App)
app.mixin(request)
// app.use(VueCookie)
// app.provide('cookies', app.config.globalProperties.$cookies)
app.config.globalProperties.$web = 'http://server.activefamilyhq.com'
app.config.globalProperties.$main = 'http://server.activefamilyhq.com'
app.config.globalProperties.$assets = 'http://admin-stag.activefamilyhq.com/'
// app.config.globalProperties.$assets = 'http://localhost:5173/'
app.use(router).mount('#app');
