
<template>
  <div class="container" id="app">
    <div class="row">
      <listOfItems></listOfItems>
    </div>
  </div>
</template>

<script src="./shoppingCart.js"></script>

<script>
  // import searchBar from './components/searchBar.vue'
  import listOfItems from './components/listOfItems.vue'
  export default{
    
    components: {
      // 'searchBar' : searchBar,
      'listOfItems': listOfItems
    }
    
 }   
</script>