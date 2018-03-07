<template>
  <div id="shoppingCart" class="col-sm-5 col-sm-offset-1 well">
    <div class="row">
      <div class="col-sm-7">
        <h2><i class="fa fa-shopping-cart"></i> Shopping Cart</h2>
      </div>
      <div class="col-sm-5">
        <p class="text-discount text-right">
          <em v-if="total > 100"><strong>10% Off<br>You saved {{ discount | tocurrency }}</strong></em>
          <em v-else>Spend over $100 and automatically get 10% off</em>
        </p>
      </div>
    </div>
    <hr>
    <ul class="list-unstyled">
      <li class="row" v-for="item in $parent.shopping_cart">
        <div class="col-xs-9">
          <button class="btn btn-xs btn-default" @click="removeOne( item )" type="button" title="Remove One"><i class="fa fa-minus"></i></button>
          <small>{{ item.quantity | zeropad }}</small>
          <button class="btn btn-xs btn-default" @click="addOne( item )" type="button" title="Add One"><i class="fa fa-plus"></i></button>
          <small>{{ item.listitem }} ({{ item.price | tocurrency }})</small>
        </div>
        <div class="col-xs-3 text-right">
          <small>{{ item | subvalue | tocurrency }}</small>
          <button class="btn btn-xs btn-danger btn-delete" @click="removeFromCart( item )" type="button" title="Remove From Cart"><i class="fa fa-times"></i></button>
        </div>
      </li>
      <li class="row total">
        <div class="col-xs-6 total-count"><strong>{{ count | zeropad }} Item<span v-if="count !== 1">s</span></strong></div>
        <div class="col-xs-6 text-right total-cost"><strong :class="{ 'text-success' :discount }">{{ ( total - discount ) | tocurrency }}</strong></div>
      </li>
      <li class="row" v-if="total > 0">
        <hr>
        <div class="col-xs-6 text-right">
          <small>Would you like to add a donation?</small>
        </div>
        <div class="col-xs-6">
          <div class="input-group input-group-sm">
            <span class="input-group-addon"><i class="fa fa-plus"></i></span>
            <select class="form-control input-sm" v-model="donation">
              <option value="0">$0.00</option>
              <option value="1">$1.00</option>
              <option value="5">$5.00</option>
              <option value="10">$10.00</option>
              <option value="15">$15.00</option>
              <option value="20">$20.00</option>
              <option value="25">$25.00</option>
              <option value="50">$50.00</option>
              <option value="100">$100.00</option>
            </select>
          </div>
        </div>
        <p class="text-center"><small><em>100% of your donation goes to the local SPCA</em></small></p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'shoppingCart',
    data() {
      return {
        donation: 0,
        subtotal: 0,
      }
    },
    methods: {
       addOne: function( product ) {
        product.quantity++;
      },
      removeOne: function( product ) {
        product.quantity--;
        if ( product.quantity <= 0 ) {
            this.$parent.shopping_cart.$remove( product );
        }
      },
      removeFromCart: function( product ) {
        this.$parent.shopping_cart.$remove( product );
      }
    },
    filters: {
      subvalue: function (val) {
        return _.multiply( val.price, val.quantity );
      },
      tocurrency: function (num) {
        return accounting.formatMoney( num );
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
      count: function() {
        var itemCount = 0;
        for ( var idx in this.$parent.shopping_cart ) {
          var currentItem = this.$parent.shopping_cart[idx];
          itemCount += parseInt( currentItem.quantity );
        }
        return itemCount
      },
      total: function() {
        var totalCost = 0;
        for ( var idx in this.$parent.shopping_cart ) {
          var currentItem = this.$parent.shopping_cart[idx];
          totalCost += parseInt( currentItem.quantity ) * currentItem.price;
          totalCost += parseInt( this.donation );
        }
        return totalCost
      },
      discount: function() {
        if ( this.total > 100 ) {
          return ( this.total - this.donation ) * 0.1;
        }
        return 0;
      }
    }
  }

</script>