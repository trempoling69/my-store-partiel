<template>
    <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <img src="../assets/exterflora.png" width="112" height="20">
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <RouterLink :to ="{
              name: 'home'
              }"> 
              Nos produits
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <RouterLink :to="{
              name: 'cart'
              }">
              <p class="button is-primary">
                <span class="icon">
                  <i class="mdi mdi-cart-outline"></i>
                </span>
                <span>Panier</span>
              </p>
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>