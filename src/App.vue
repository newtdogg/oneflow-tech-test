
<template>
  <div class="container" id="app">
    <div class="row">
      <searchBar></searchBar>
      <list></list>
      <shoppingCart></shoppingCart>
    </div>
  </div>
</template>

<script>
  import searchBar from './components/searchBar.vue'
  import list from './components/list.vue'
  import shoppingCart from './components/shoppingCart.vue'
  export default{
    
    components: {
      'list': list,
      'searchBar' : searchBar,
      'shoppingCart': shoppingCart
    }
    
 }   
</script>