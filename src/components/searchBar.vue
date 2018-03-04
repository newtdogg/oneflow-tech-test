<template>
	<div class="row">
        <div class="col-sm-6">
			<div class="row">
				<div class="input-group product-search">
				  <input class="form-control" placeholder="Search products..." type="text" v-model="search">
				  <div class="input-group-btn">
				    <button class="btn btn-default" type="button" @click="sortProducts( 'name' )"><i class="fa fa-unsorted"></i> Sort By Name</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>	

