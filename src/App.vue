
<template>
  <div class="container" id="app">
    <div class="row">
      <listOfItems></listOfItems>
    </div>
  </div>
</template>

<script src="./data.js"></script>

<script>

  Vue.filter( "subvalue", function( val ) {
        return _.multiply( val.price, val.quantity );
      });
      Vue.filter( "tocurrency", function( num ) {
        return accounting.formatMoney( num );
      });
      Vue.filter( "zeropad", function( num ) {
        if ( num !== 0 ) {
          return _.padStart( num, 2, '0' );
        } else {
          return 0;
        }
      });
      Vue.filter( "titlecase", function( str ) {
        return _.startCase( str );
      });
      Vue.filter( "textcapitalized", function( str ) {
        return _.capitalize( str );
      });
  // import searchBar from './components/searchBar.vue'
  import listOfItems from './components/listOfItems.vue'
  export default{
    
    components: {
      // 'searchBar' : searchBar,
      'listOfItems': listOfItems
    }
    
 }   
</script>