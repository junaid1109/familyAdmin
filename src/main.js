import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

//** AXIOS */
import {request} from '@/mixins/request'
const app = createApp(App)
app.mixin(request)
// app.use(VueCookie)
// app.provide('cookies', app.config.globalProperties.$cookies)
//app.config.globalProperties.$authentication = 'https://authentication.notension.pk/api/'
app.config.globalProperties.$assets = 'http://localhost:5173/'
app.config.globalProperties.$main = 'http://server.activefamilyhq.com/api/v1/admin/'
app.config.globalProperties.$web = 'http://server.activefamilyhq.com/'
app.config.globalProperties.$auth = 'http://server.activefamilyhq.com/api/v1/auth/'
app.use(router).mount('#app');
