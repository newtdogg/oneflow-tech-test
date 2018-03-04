import Vue from 'vue';
import Router from 'vue-router';
import searchBar from '@/components/searchBar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchBar',
      component: searchBar,
    },
  ],
});
