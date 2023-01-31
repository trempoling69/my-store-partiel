<template>
    <div>
        <div class="field has-addons has-addons-centered">
            <p class="control">
                <button class="button is-light is-danger" @click.prevent="handlebouton1">-</button>
            </p>
            <p class="control">
                <input class="input" type="number" placeholder="Quantité" min="0" :value="quantite" readonly>
            </p>
            <p class="control">
                <button class="button is-light is-info" @click.prevent="handleboutonadd">+</button>
            </p>
        </div>
        <button class="button is-light is-success">Ajouter au panier</button>
    </div>
</template>
<script>
export default {
data(){
    return{
        quantite : 0
    }
}, 
methods:{
    handlebouton1(){
        if(this.quantite > 0){
            this.quantite = this.quantite - 1
        }else{
            return;
        }
    }, 
    handleboutonadd(){
        this.quantite = this.quantite + 1
    }
}
}
</script>