import Vue from "vue";
import Vuex from "vuex";
import createPersistencePlugin from "./plugins/persistancePlugin";

Vue.use(Vuex);
const persistencePlugin = createPersistencePlugin();
export default new Vuex.Store({
  state: {
    products: [],
    cart : [], 
  },
  plugins: [persistencePlugin],
  getters: {
    filteredProducts: (state) => (filter, maxPrice) => {
      return state.products
        .filter(
          (p) =>
            p.title.toLowerCase().includes(filter.toLowerCase()) ||
            p.description.toLowerCase().includes(filter.toLowerCase())
        )
        .filter((d) => d.price < maxPrice);
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
      state.cart.push(itemToAdd)
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
