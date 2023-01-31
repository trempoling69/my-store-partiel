<template>
<div class="box">
    <div class="columns">
        <div class="column">
            <figure class="image is-128x128">
                <img :src="product.thumbnail" alt="Placeholder image">
            </figure>
        </div>
        <div class="column">
            <p>NOM DU PRODUIT</p>
            <p>{{ product.title }}</p>
        </div>
        <div class="column">
            <p>QUANTITE :</p>
            <p>{{ quantite }}</p>
            <div class="in-line">
                <button class="button">+</button>
                <button class="button">-</button>
            </div>
        </div>
        <div class="column">
            <p>Prix unitaire : {{ product.price }}</p>
            <p>Prix total : {{ product.price * quantite }}</p>
        </div>
        <div class="column">
            <button class="button" @click="$emit('suppProduitCart')">SUPPRIMER</button>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:"CardCartProduct",
    emits:["suppProduitCart"],
    props:{
        product : {
            type: Object,
            default: ()=> {}
        }, 
        quantite : {
            type: Number,
            default: 0
        }
    }, 
    methods:{
        handleSuppression(itemtodelete){
            this.$store.commit("SUPP_FROM_CART", itemtodelete)
        }
    }
}
</script>