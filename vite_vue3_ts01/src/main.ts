import { createApp } from 'vue'
import App from './App.vue'
import {useService} from './core/index.ts';
createApp(App).mount('#app')


useService();
