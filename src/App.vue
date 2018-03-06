
<template>
  <div class="container" id="App">
    <div class="row">
      <listOfItems></listOfItems>
      <shoppingCart></shoppingCart>
    </div>
  </div>
</template>

<script src="./data.js"></script>

<script>
  import shoppingCart from './components/shoppingCart.vue'
  import listOfItems from './components/listOfItems.vue'
  export default{
    name: 'App',
    data() {
      return {
        shopping_cart: []
      }
    },
    components: {
      'shoppingCart': shoppingCart,
      'listOfItems': listOfItems
   } 
}  
</script>

