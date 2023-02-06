<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img :src="product.thumbnail" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="mdi mdi-star-check"></i>
                        </span>
                        <span>{{ product.rating }}</span>
                    </span>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ product.title }}</p>
                    <p class="subtitle is-6">{{ product.brand }}</p>
                    <p class="title is-4">{{ product.price }}$</p>
                </div>
            </div>
            <div class="content">
                <addToCart :idProduit="this.product.id"></addToCart>  
            </div>
        </div>
    </div>
</template>
<script>
import AddToCart from "../components/AddToCart.vue"

export default {
    name: "CardProduct",
    components:{
        AddToCart,
    },
    props: {
        product : {
            type : Object,
            default: ()=>{}
        }
    }
}
</script>