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
import CSRF from './components/CSRF.vue';
import ClickJacking from './components/ClickJacking.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/main', component: Home},
        {path: '/csrf', component: CSRF},
        {path: '/cj', component: ClickJacking},
        {path: '', redirect: '/csrf'},
    ]
  })

// app.use(Quasar, {
//     plugins: {}, // import Quasar plugins and add here
//   });

app.use(router);

app.mount('#app')
