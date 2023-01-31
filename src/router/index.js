import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage"


Vue.use(Router);

// const fetchProductById = async function (id) {
//     const response = await axios.get(`https://dummyjson.com/products/${id}`);
//     return response.data;
// };
// const getProductById = async (route) => {
//     const product = await fetchProductById(route.params.productId);
//     return {product};
// };

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product/:productId",
      name: "product",
      component: ProductDetails,
      props: route => {return {productId : route.params.productId}}
    },
    {
      path: "/cart",
      name: 'cart',
      component: CartPage,
    }
  ],
});

export default router;
