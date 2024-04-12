import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './main.css'

import { Quasar } from "quasar";
import { createRouter, createWebHistory } from 'vue-router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
// import 'quasar/src/css/index.sass'

import Home from './components/Home.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/main', component: Home}
    ]
  })

// app.use(Quasar, {
//     plugins: {}, // import Quasar plugins and add here
//   });

app.use(router);

app.mount('#app')
