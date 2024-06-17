import { createWebHistory, createRouter } from 'vue-router';

import Homepage from './views/Homepage.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/:pathMatch(.*)*', component:  NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})