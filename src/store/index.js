import Vue from "vue";
import Vuex from "vuex";
import createPersistencePlugin from "./plugins/persistancePlugin";

Vue.use(Vuex);
const persistencePlugin = createPersistencePlugin();
export default new Vuex.Store({
  state: {
    products: [],
    cart : [], 
    existe : false,
  },
  plugins: [persistencePlugin],
  getters: {
    filteredProducts: (state) => (filter, maxPrice, minPrice) => {
      return state.products
        .filter(
          (p) =>
            p.title.toLowerCase().includes(filter.toLowerCase()) ||
            p.description.toLowerCase().includes(filter.toLowerCase())
        )
        .filter((q) => q.price < maxPrice)
        .filter((r) => r.price > minPrice)
    },
    itemInCart : (state) => {
      if(state.cart.length > 0){
        return state.products.filter(c => {
          for (let i = 0; i < state.cart.length; i++) {
            if (c.id === state.cart[i].idProduit) {
              return c;
            }
          }
        });
      } else {
        return [];
      }
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }, 
    ADD_TO_CART(state, itemToAdd){
      this.existe = false;
      if(state.cart.length == 0){
        state.cart.push(itemToAdd)
      }else{
        for(let index = 0; index < state.cart.length; index++){
          if(itemToAdd.idProduit === state.cart[index].idProduit){
            this.existe = true; 
            state.cart[index].quantite += itemToAdd.quantite
          }
        }
        if(!this.existe){
          state.cart.push(itemToAdd)
        }
      }
    }, 
    INCREASE_QUANTITE(state, product){
      const index = state.cart.indexOf(product)
      state.cart[index].quantite += 1
    },
    DECREASE_QUANTITE(state, product){
      const index = state.cart.indexOf(product)
      if(state.cart[index].quantite == 1){
        state.cart.splice(index, 1)
      }else{
        state.cart[index].quantite -= 1
      }
      
    },
    SUPP_FROM_CART(state, itemToRemove){
      const index = state.cart.indexOf(itemToRemove)
      state.cart.splice(index, 1)
    }, 
    GET_CART(){
    },
    SET_CART(state, cart) {
      state.cart = cart;
  }
  },
});
