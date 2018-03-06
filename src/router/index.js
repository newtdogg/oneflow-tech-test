import Vue from 'vue';
import Router from 'vue-router';
import listOfItems from '@/components/listOfItems';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listOfItems',
      component: listOfItems,
    }
  ],
});
