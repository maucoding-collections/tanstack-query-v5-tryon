import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import HomePage from './pages/index/index.vue'

import './assets/main.css'

const routes = [{ path: '/', component: HomePage }]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
