
import { RouterLink } from 'vue-router';


import { RouterLink } from 'vue-router';

<template>
    <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <img src="../assets/exterflora.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="20">
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink :to ="{
        name: 'home'
      }">
      <p class="navbar-item">
        Nos produits
      </p>
    </RouterLink>
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