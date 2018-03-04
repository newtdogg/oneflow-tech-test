import Vue from 'vue';
import Router from 'vue-router';
import searchBar from '@/components/searchBar';
import list from '@/components/list';
import shoppingCart from '@/components/shoppingCart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchBar',
      component: searchBar,
    },
    {
      path: '/',
      name: 'list',
      component: list,
    },
    {
      path: '/',
      name: 'shoppingCart',
      component: shoppingCart,
    },
  ],
});
