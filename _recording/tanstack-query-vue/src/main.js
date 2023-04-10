import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App).mount('#app')
app.use(VueQueryPlugin)
