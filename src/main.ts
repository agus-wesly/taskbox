import { createApp } from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './index.css'
import * as bootstrap from 'bootstrap'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
  .use(bootstrap as any)
  .use(pinia)
  .mount('#app')
