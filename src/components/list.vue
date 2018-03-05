<template>
        <div class="col-sm-6">
        	<div class="row">
	            <div id="list" class="col-sm-12" v-for="item in filteredProducts">
	              <h3>{{ item.name | titlecase }}</h3>
	                <li v-for="option in item.options">
	                  <strong>{{ option.details | titlecase }}</strong> {{ option.price | tocurrency }}
	                  <button class="btn btn-default btn-xs" type="button" @click="addToCart( item, option )" title="Add to Cart">Add to <i class="fa fa-cart-plus"></i></button>
	                </li>
	              </ul>
	            </div>
          	</div>
        </div>

</template>