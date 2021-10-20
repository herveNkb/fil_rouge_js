/* *** 1. Créer un livre avec des variables (cours 2) *** */
/* ------------------------ */
let book;
let title = 'Les misérables';
let author = 'Victor Hugo';
let price = 14.95;
let category = 'Drame';
let releaseDate = new Date('1997-05-23');
let nbSales = 345;

/* ------------------------ */
/* *** 2. Créer un livre avec des objets et tableaux (cours 3) *** */
/* ------------------------ */
// Nous avons créé, dans le fichier books.js, un tableau d'objets avec les livres
console.log('BOOK LIST');
console.log(books);
// Importer un fichier .json dans un fichier JS (sans framework) nécessite une opération asynchrone > solution = créer l'objet dans un js différent.

// Tableau d'objet pour le panier
let cart = [
  { id: '0', qtt: 1},
  { id: '1', qtt: 1},   
];
console.log('Panier :');
console.log(cart);
let totalPrices; // prix total du panier à stocker dans cette variable

/* ------------------------ */
/* 3. Conditions (cours 4) */
/* ------------------------ */

// Gestion du stock
if (books[0].nbStock === 0) {
	console.log('rupture de stock');
} else {
	console.log('Il reste ' + books[0].nbStock + ' exemplaires de: ' + books[0].title);
}

// Sorties récentes
if (books[0].releaseDate > books[1].releaseDate) {
	console.log(books[0].title + ' est le plus récent des deux livres');
} else {
	console.log(books[1].title + ' est le plus récent des deux livres');
}

// Meilleures ventes
if (books[0].nbSales > books[1].nbSales) {
	console.log(books[0].title + ' a été le plus vendu')
} else {
	console.log(books[1].title + ' a été le plus vendu')
}

// Panier : augmenter la quantité d'un article
if (cart[1]) { //équivaut à cart[1] === true
	console.log('Quantité avant ajout : ' + cart[1].qtt);
	cart[1].qtt++; // on incrémente cart[1].qtt de 1
	// est égal à : cart[1].qtt = cart[1].qtt + 1; 
	console.log('Quantité après ajout : ' + cart[1].qtt);
}

/* ------------------------ */
/* 4. Boucles (cours 5) */
/* ------------------------ */

// Classement meilleures ventes
let bestSales = [];
let tmp = 0;

for (let i = 0; i < books.length; i++) {
	if (book.nbSales > tmp) {
		console.log(book.nbSales)
		bestSales[0] = book;
	}

}
tmp = book.nbSales;
// Classement sortie récente


// Rechercher un titre de livre


// Affichage des prix (croissant / Décroissants) > ajouter des filtres