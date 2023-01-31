<template>
<div class="container">
    <NavBar/>
    <div class="columns">
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
</div>
</template>
<script>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';
export default {
name: "CartPage",
components:{
    NavBar,
    RouterLink
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