const retrieveCart = () => {
    return (localStorage.getItem("cart") || "").split(",");
}

const storeCart = (cart) => {
    localStorage.setItem("cart", cart);
}

export default function createPersistencePlugin() {
    return (store) => {
        store.subscribe((mutation, state) => {
            if (mutation.type === "GET_CART") {
                const cart = retrieveCart();
                store.commit("SET_CART", JSON.parse(cart));
            } else if (mutation.type === "ADD_TO_CART" || mutation.type === "SUPP_FROM_CART" || mutation.type === "INCREASE_QUANTITE" || mutation.type === "DECREASE_QUANTITE") {
                storeCart(JSON.stringify(state.cart));
            }
        });
    }
}