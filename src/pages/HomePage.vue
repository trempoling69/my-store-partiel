<template>
  <div class="container">
  <Navbar/>
  <br>
  <br>
  <section class="section is-max-desktop has-background-primary-light">
    <div class="columns">
      <div class="column has-text-centered">Rechercher : <input type="text" v-model="filterText" /></div>
      <div class="column has-text-centered">Prix max : <input type="number" v-model="maxPrice" /></div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <h3 class="title has-text-centered is-size-4">Tous les produits</h3>
      <div class="columns is-multiline mt-5 is-8 is-variable is-centered">
        <div v-for="product in currentPage" v-bind:key="product.id" class="column is-4-tablet is-4-desktop">
          <RouterLink :to="{
            name : 'product',
            params: {productId : product.id}
          }">
          <Card_product :product="product"></Card_product>
        </RouterLink>
        </div>
      </div>
      <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous" @click="pageIndex--" v-if="pageIndex > 0"
        >Previous</a
      >
      <a
        class="pagination-next"
        @click="pageIndex++"
        v-if="pageIndex < numberOfPages - 1"
        >Next page</a
      >
      <ul class="pagination-list">
        <li v-for="pageNumber in numberOfPages" :key="pageNumber">
          <a
            class="pagination-link"
            :class="{ 'is-current': pageNumber === pageIndex + 1 }"
            :aria-label="`Page ${pageNumber}`"
            aria-current="page"
            @click="pageIndex = pageNumber - 1"
            >{{ pageNumber }}</a
          >
        </li>
      </ul>
    </nav>
    </div>
  </section>
</div>
</template>

<script>
import { RouterLink } from "vue-router"
import Card_product from "../components/CardProductHome.vue"
import Navbar from "../components/NavBar.vue"

export default {
  name: "Home_page",
  components: {
    Card_product,
    Navbar,
    RouterLink
}, 
  data(){
    return{
      itemsByPage : 9,
      pageIndex : 0,
      filterText: "",
      maxPrice : 9999,
    }
  },
  computed: {
    allProducts: function() {
      return this.$store.getters.filteredProducts(this.filterText, this.maxPrice)
    },
    itemsOffset: function(){
      return this.pageIndex * this.itemsByPage;
    },
    currentPage: function () {
      if(!!this.allProducts && this.allProducts.length > 0){
        return this.allProducts.slice(
          this.itemsOffset,
          this.itemsOffset + this.itemsByPage
        )
      }
      return []
    },
    numberOfPages : function(){
      if(!!this.allProducts && this.allProducts.length > 0){
        return Math.ceil(this.allProducts.length / this.itemsByPage)
      }
      return 0;
    }
  }
}
</script>