<template>
	<div class="row">
		<div class="col-sm-12" v-for="item in products">
			<h3>{{ item.name | titlecase }}</h3>
			<li v-for="option in item.options">
			<strong>{{ option.details | titlecase }}</strong> {{ option.price | tocurrency }}
			<button class="btn btn-default btn-xs" type="button" @click="addToCart( item, option )" title="Add to Cart">Add to <i class="fa fa-cart-plus"></i></button>
			</li>
			</ul>
		</div>
	</div>
</template>

<script>
import inventory from '../data.js'
	export default {
	name: 'listOfItems',
	  data() {
	  	return{
          products: [{
    'name': 'USB Stick',

    'options': [{
        'id': 1,
        'details': '16GB',
        'price': 6.95
    }, {
        'id': 2,
        'details': '32GB',
        'price': 12.95
    }, {
        'id': 3,
        'details': '64GB',
        'price': 25.95
    }]
  }, {
    'name': 'USB Plug',

    'options': [{
        'id': 4,
        'price': 4.35,
        'details': '3ft cable'
    }, {
        'id': 13,
        'price': 9,
        'details': '6ft cable'
    }]
  }, {
    'name': 'Small Phone',

    'options': [{
        'id': 5,
        'price': 199,
        'details': 'Nokia Phone'
    }]
  }, {
    'name': 'Camera',

    'options': [{
        'id': 6,
        'price': 76.50,
        'details': 'Blue Camera'
    }, {
        'id': 7,
        'price': 86.50,
        'details': 'Red Camera'
    }, {
        'id': 8,
        'price': 55.50,
        'details': 'Yellow Camera'
    }, {
        'id': 9,
        'price': 45.50,
        'details': 'Purple Camera'
    }]
  }]
        }
   	 },
	  	methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    }
	  },
	  computed: {
          filteredProducts: function() {
            if ( this.search ) {
              var searchQuery = this.search;
              return this.products.filter( function( product ) {
                if ( _.upperCase( product.name).indexOf( _.upperCase( searchQuery )) !== -1 ) {
                  return product;
                }
              });
            } else {
              return this.products;
            }
          }
      	}
	}
</script>