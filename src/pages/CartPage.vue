<template>
<div class="container">
    <NavBar/>
    <div class="columns" v-if="this.$store.state.cart.length == 0">
        <div class="column is-half">
            <img src="../assets/exterpleurs.png" alt="">
        </div>
        <div class="column there2">
            <p class="title">Rien dans le panier</p>
            <p class="subtitle is-spaced">Il faut résoudre ça !</p>
            <p class="title is-4">Ajouter des produits sur notre page produits</p>
            <RouterLink :to="{
                name:'home'
            }">
            <p class=" subtitle button is-warning is-light">HOME PAGE</p>
        </RouterLink>
        </div>
    </div>
    <div class="section" v-else-if="this.productInCart.length > 0">
        <div class="produit" v-for="produit in this.$store.state.cart" v-bind:key="produit.idProduit">
        <CardCartProduct :product="productInCart[getgoodIdProduct(produit.idProduit)]" :quantite="produit.quantite" @suppProduitCart="handleSuppression(produit)"/>
        </div>
        <div class="box in-line">
            <p>PRIX TOTAL</p>
            <p>{{ getTotalPrice }}</p>
        </div>
    </div>
</div>
</template>
<script>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import axios from 'axios';
import CardCartProduct from '../components/CardCartProduct.vue';
export default {
name: "CartPage",
components:{
    NavBar,
    RouterLink, 
    CardCartProduct
}, 
data(){
    return{
        productInCart : []
    }
},
methods:{
    getgoodIdProduct(idCible){
        for (let index = 0; index < this.productInCart.length; index++) {
            if(this.productInCart[index].id == idCible){
                return index
            }
        }
       return 0
    },   
    handleSuppression(itemtodelete){
            this.$store.commit("SUPP_FROM_CART", itemtodelete)
    }, 
},
computed:{
    getTotalPrice(){
        let total = 0;
        for (let index = 0; index < this.productInCart.length; index++) {
            if(this.$store.state.cart[index].id == this.productInCart[index].idProduit){
                total = total + (this.$store.state.cart[index].quantite * this.productInCart[index].price)
            }  
        }
        return total
    }, 
},
watch: {
    '$store.state.cart': {
      handler (newVal) {
        this.productInCart = []
        for (let index = 0; index < newVal.length; index++) {
          axios.get(`https://dummyjson.com/products/${newVal[index].idProduit}`)
            .then(res => this.productInCart.push(res.data))
        }
      },
      deep: true
    }
},
mounted(){
    if(this.$store.state.cart.length > 0){
        for (let index = 0; index < this.$store.state.cart.length; index++) {
            axios.get(`https://dummyjson.com/products/${this.$store.state.cart[index].idProduit}`)
            .then(res => this.productInCart.push(res.data))
        }       
    } 
}
}
</script>
<style>
.there2{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>