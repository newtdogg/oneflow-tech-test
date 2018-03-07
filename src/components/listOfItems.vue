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
		<div class="row">
			<div id="itemList" class="col-sm-12" v-for="item in filteredProducts">
				<h3>{{ item.name | titlecase }}</h3>
				<li v-for="option in item.options">
				<strong>{{ option.details | titlecase }}</strong> {{ option.price | tocurrency }}
				<button :id="option.details" class="btn btn-default btn-xs" type="button" @click="addToCart( item, option )" title="Add to Cart">Add to <i class="fa fa-cart-plus"></i></button>
				</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'listOfItems',
	  data() {
	  	return{
	  		search: "",
	  		sortByParam: "",
	  		orderDir: "desc",
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
	    sortProducts: function( sortBy ) {
            this.sortByParam = sortBy;
            this.orderDir = this.orderDir === "asc" ? "desc" : "asc";
            this.products = _.orderBy( this.products, this.sortByParam, this.orderDir );
          },
          addToCart: function( product, option ) {
            var itemName = product.name + " " + option.details;
            var itemPrice = option.price;
            var itemQuantity = 1;
            for ( var index in this.$parent.shopping_cart ) {
              var cartItem = this.$parent.shopping_cart[index];
              if ( option.id === cartItem.id ) {
                itemQuantity = parseInt( cartItem.quantity ) + 1;
                itemInCart = this.$parent.shopping_cart.indexOf( cartItem );
                this.$parent.shopping_cart.splice( itemInCart, 1 );
              }
            }
            var itemToAdd = {
              price: itemPrice,
              listitem: itemName,
              quantity: itemQuantity,
              id: option.id
            }
            this.$parent.shopping_cart.push( itemToAdd );
          }
	  },
	  filters: {
	      tocurrency: function (num) {
	        return accounting.formatMoney( num );
	      },
	      titlecase: function (str) {
	      	 return _.startCase( str );
	      },
	      zeropad: function (num) {
	      	if ( num !== 0 ) {
	          return _.padStart( num, 2, '0' );
	        } else {
	          return 0;
	        }
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