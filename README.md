# my-store-partiel

## Projet V1

### Home page
```
- Filtre textuel nom et description
- Filtre prix 
- Card pour chaque produit
- Pagination
```

### Product page
```
- Carousel pour images 
- Details produit
``` 

### Cart page 
```
- Existe 
- Static pas de produit
``` 
### Component ajout quantite et panier
```
- Changement de quantité (+ et -)
- Bouton ajout panier
``` 

### Router
```
- 3 routes
``` 

## Projet V2

### Cart page
```
- Afficher les produits ajouter au panier
- Possibilité de supprimer un produit du panier
- Calcul du cout total du panier
- Recap des produits avec leur quantité, le cout unitaire et le cout total pour ce produit en particulier 
``` 

### Persistance
```
- Le cart est stocké dans le local storage 
- Il suit l'ajout et la suppression de produits
- Il remet les produits dans le panier en cas de refresh avec leur quantité
```

## Projet V3

### Cart page 
```
- Changement de la méthode de récupération des produits dans le panier 
  (j'utilisais une requete axios pour recup les produits mais maintenant je filtre les produits du store)
- Possibilité d'ajouter ou d'enlever la quantité d'un produit directement de la page cart
- Si quantité tombe à 0 alors le produit est supprimé 
``` 

### Component ajout au panier
```
- Remise à 0 de l'input une fois le bouton "ajouter au panier" cliqué 
- Alerte que le produit à bien été ajouté
- Gestion des doublons dans le cart (Si le produit que l'on souhaite ajouté est déjà dans le panier
  alors la quantité est ajouté)
``` 

### Persistance
```
- Persistance mise à jour pour prendre en compte l'augmentation et diminution de la quantité
```

### Home page
```
- Ajout d'un filtre prix minimum
- Ajout d'une div d'info quand les filtres donne rien
```