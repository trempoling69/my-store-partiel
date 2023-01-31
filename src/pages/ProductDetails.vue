<template>
    <div v-if="product">
    <div class="container">
        <NavBar/>
        <br>
        <br>
        <br>
        <div class="columns has-text-centered is-centered">
            <div class="column is-half is-vcentered there">
                <button class="button" @click="handleboutonphprec"> &lt; </button>
                <img :src="product.images[photoNumber]" alt="">
                <button class="button" @click="handleboutonphsuiv"> > </button>
            </div>
            <div class="column">
                <p class="title">{{ product.title }}</p>
                <p class="subtitle is-spaced">{{ product.brand }}</p>
                <p class="title is-4">Description</p>
                <p class="subtitle is-5 is-spaced">{{ product.description }}</p>
                <p class="title is-4">Prix</p>
                <p class="subtitle is-5 is-spaced">{{ product.price }}</p>
                <p class="title is-4">Notation de nos clients</p>
                <p class="subtitle is-5 is-spaced">{{ product.rating }}</p>
                <p class="title is-4">Nombre de produits restant</p>
                <p class="subtitle is-5 is-spaced">{{ product.stock }}</p>
                <br>
                <p class="title is-3">Ajouter le au panier !</p>
                <AddToCart :idProduit="this.productId"/>
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import AddToCart from "../components/AddToCart.vue";
export default {
    name: "ProductDetail",
    components:{
        NavBar,
        AddToCart
    },
    props: {
        productId: {
            type: [Number, String],
            required: true
        }  
    }, 
    data(){
        return {
            product: null,
            photoNumber : 0,
        }
    }, 
    computed:{
       
    },
    methods: {
        handleboutonphsuiv(){
            if(this.photoNumber === this.product.images.length - 1){
                this.photoNumber = 0
            }else{
                this.photoNumber = this.photoNumber + 1
            }
        }, 
        handleboutonphprec(){
            if(this.photoNumber > 0){
                this.photoNumber = this.photoNumber - 1
            }else{
                this.photoNumber = this.product.images.length - 1
            }  
        }
    },
    mounted(){
        axios.get(`https://dummyjson.com/products/${this.productId}`)
        .then(res => this.product = res.data)
    }  
}
</script>
<style>
.there{
    display: flex;
    align-items: center;
}
</style>