import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    products: [],
    product: {},
  },
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
    getProductById: (state) => {
        
        return state.product;
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product){
        state.product = product
    }
  },
});
