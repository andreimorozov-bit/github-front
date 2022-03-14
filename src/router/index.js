import { createRouter, createWebHistory } from 'vue-router';
import RepoListView from '../views/RepoListView.vue';
import RepoDetailView from '../views/RepoDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Repos',
      component: RepoListView,
    },
    {
      path: '/repos/:id',
      name: 'RepoDetail',
      component: RepoDetailView,
      props: true,
    },
  ],
});

export default router;
