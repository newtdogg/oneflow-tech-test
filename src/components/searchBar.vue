<template>
        <div class="col-sm-6">
			<div class="row">
				<div id="searchBar" class="input-group product-search">
				  <input class="form-control" placeholder="Search products..." type="text" v-model="search">
				  <div class="input-group-btn">
				    <button class="btn btn-default" type="button" @click="sortProducts( 'name' )"><i class="fa fa-unsorted"></i> Sort By Name</button>
				  </div>
				</div>
			</div>
		</div>
</template>	

<<<<<<< HEAD
<<<<<<< HEAD
<script>
	export default {
    name: 'searchBar',
 	methods: {
          sortProducts: function( sortBy ) {
            this.sortByParam = sortBy;
            this.orderDir = this.orderDir === "asc" ? "desc" : "asc";
            this.products = _.orderBy( this.products, this.sortByParam, this.orderDir );
          }
      }
  }
</script>
=======
>>>>>>> parent of dc158a0... Ammended some of the vue code, still having trouble rendering the inventory
=======
>>>>>>> parent of dc158a0... Ammended some of the vue code, still having trouble rendering the inventory
