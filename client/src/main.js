import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'animate.css'
import './assets/tailwind.css'

import store from '../src/stores/index.js'

createApp(App)
  .use(router)
  .use(store)
  .use(Toast, {
    transition: 'Vue-Toastification__fade',
    maxToasts: 5,
    newestOnTop: true
  })
  .mount('#app')
