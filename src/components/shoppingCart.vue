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
          <li class="row" v-for="item in shopping_cart">
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
    </div>
</template> 
