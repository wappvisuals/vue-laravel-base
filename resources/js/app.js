require('./bootstrap');

import { createApp } from 'vue';
import router from './vue/router'

import App from './vue/views/App.vue';

createApp(App).use(router).mount('#app')