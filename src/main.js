import Vue from 'vue';
import App from './App.vue'
import store from './store';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;

const fetchProducts = function () {
  return new Promise((resolve, reject) => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => resolve(res.data.products))
      .catch((err) => reject(err));
  });
};

new Vue({
  store,
  router,
  render: (h) => h(App),
  created() {
    fetchProducts()
      .then(products => store.commit("SET_PRODUCTS", products))
      .catch(err => console.log(err));
  },
}).$mount("#app");
