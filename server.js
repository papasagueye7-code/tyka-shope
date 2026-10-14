// Numéro WhatsApp auquel envoyer les commandes (sans le "+")
const PHONE_NUMBER = "221772071365";

// --- Catalogue complet avec images locales (10 articles par catégorie) ---
const products = [
    // ================= VÊTEMENTS (10) =================
    { id: 1, name: "Robe Wax Élégante", category: "vetements", price: 15000, image: "images/vetement1.jpg" },
    { id: 2, name: "Ensemble Adire 2 Pièces", category: "vetements", price: 20000, image: "images/vetement2.jpg" },
    { id: 3, name: "Chemise Traditionnelle", category: "vetements", price: 12000, image: "images/vetement3.jpg" },
    { id: 4, name: "Robe de Soirée Silk", category: "vetements", price: 25000, image: "images/vetement4.jpg" },
    { id: 5, name: "Veste Blazer Moderne", category: "vetements", price: 22000, image: "images/vetement5.jpg" },
    { id: 6, name: "Combinaison Chic", category: "vetements", price: 18000, image: "images/vetement6.jpg" },
    { id: 7, name: "Boubou Brodé Luxe", category: "vetements", price: 35000, image: "images/vetement7.jpg" },
    { id: 8, name: "T-Shirt Basic Coton", category: "vetements", price: 5000, image: "images/vetement8.jpg" },
    { id: 9, name: "Pantalon Évasé Fashion", category: "vetements", price: 14000, image: "images/vetement9.jpg" },
    { id: 10, name: "Jupe Stylée imprimée", category: "vetements", price: 10000, image: "images/vetement10.jpg" },

    // ================= CHAUSSURES (10) =================
    { id: 11, name: "Sandales en Cuir", category: "chaussures", price: 8000, image: "images/chaussure1.jpg" },
    { id: 12, name: "Mocassins Élégants", category: "chaussures", price: 18000, image: "images/chaussure2.jpg" },
    { id: 13, name: "Escarpins À Talons", category: "chaussures", price: 16000, image: "images/chaussure3.jpg" },
    { id: 14, name: "Sneakers Streetwear", category: "chaussures", price: 22000, image: "images/chaussure4.jpg" },
    { id: 15, name: "Baskets Sport Blanc", category: "chaussures", price: 15000, image: "images/chaussure5.jpg" },
    { id: 16, name: "Sandales Compensées", category: "chaussures", price: 12000, image: "images/chaussure6.jpg" },
    { id: 17, name: "Chaussures de Ville", category: "chaussures", price: 25000, image: "images/chaussure7.jpg" },
    { id: 18, name: "Claquettes Design", category: "chaussures", price: 6000, image: "images/chaussure8.jpg" },
    { id: 19, name: "Bottines en Daim", category: "chaussures", price: 28000, image: "images/chaussure9.jpg" },
    { id: 20, name: "Babouches Artisanales", category: "chaussures", price: 9000, image: "images/chaussure10.jpg" },

    // ================= SACS (10) =================
    { id: 21, name: "Sac à Main Luxe Cuir", category: "sacs", price: 12500, image: "images/sac1.jpg" },
    { id: 22, name: "Sac Cabas Grand Format", category: "sacs", price: 15000, image: "images/sac2.jpg" },
    { id: 23, name: "Pochette de Soirée", category: "sacs", price: 9000, image: "images/sac3.jpg" },
    { id: 24, name: "Sac Bandoulière Chic", category: "sacs", price: 11000, image: "images/sac4.jpg" },
    { id: 25, name: "Sac à Dos Cuir Homme", category: "sacs", price: 20000, image: "images/sac5.jpg" },
    { id: 26, name: "Sac Seau Tressé", category: "sacs", price: 13500, image: "images/sac6.jpg" },
    { id: 27, name: "Mini Sac Tendance", category: "sacs", price: 8500, image: "images/sac7.jpg" },
    { id: 28, name: "Sac de Voyage Week-end", category: "sacs", price: 25000, image: "images/sac8.jpg" },
    { id: 29, name: "Pochette Porte-documents", category: "sacs", price: 14000, image: "images/sac9.jpg" },
    { id: 30, name: "Sac Wax Artisanal", category: "sacs", price: 10000, image: "images/sac10.jpg" },

    // ================= PARFUMS (10) =================
    { id: 31, name: "Parfum Tyka Gold", category: "parfums", price: 18000, image: "images/parfum1.jpg" },
    { id: 32, name: "Eau de Parfum Oud Noir", category: "parfums", price: 25000, image: "images/parfum2.jpg" },
    { id: 33, name: "Parfum Florale Rose", category: "parfums", price: 15000, image: "images/parfum3.jpg" },
    { id: 34, name: "Parfum Vanille Intense", category: "parfums", price: 16000, image: "images/parfum4.jpg" },
    { id: 35, name: "Eau de Toilette Fraîche", category: "parfums", price: 12000, image: "images/parfum5.jpg" },
    { id: 36, name: "Parfum Musk Amber", category: "parfums", price: 22000, image: "images/parfum6.jpg" },
    { id: 37, name: "Coffret Parfum Premium", category: "parfums", price: 35000, image: "images/parfum7.jpg" },
    { id: 38, name: "Parfum Bois de Santal", category: "parfums", price: 20000, image: "images/parfum8.jpg" },
    { id: 39, name: "Brume Parfumée Corps", category: "parfums", price: 8000, image: "images/parfum9.jpg" },
    { id: 40, name: "Parfum Royal Edition", category: "parfums", price: 30000, image: "images/parfum10.jpg" },

    // ================= MONTRES (10) =================
    { id: 41, name: "Montre Homme Chrono", category: "montres", price: 25000, image: "images/montre1.jpg" },
    { id: 42, name: "Montre Femme Dorée", category: "montres", price: 22000, image: "images/montre2.jpg" },
    { id: 43, name: "Montre Automatique Cuir", category: "montres", price: 35000, image: "images/montre3.jpg" },
    { id: 44, name: "Montre Connectée Smart", category: "montres", price: 28000, image: "images/montre4.jpg" },
    { id: 45, name: "Montre Minimaliste Noir", category: "montres", price: 18000, image: "images/montre5.jpg" },
    { id: 46, name: "Montre Sport Étanche", category: "montres", price: 15000, image: "images/montre6.jpg" },
    { id: 47, name: "Montre Argentée Diamant", category: "montres", price: 30000, image: "images/montre7.jpg" },
    { id: 48, name: "Montre Classic Vintage", category: "montres", price: 20000, image: "images/montre8.jpg" },
    { id: 49, name: "Montre Luxe Squelette", category: "montres", price: 45000, image: "images/montre9.jpg" },
    { id: 50, name: "Montre Bracelet Acier", category: "montres", price: 26000, image: "images/montre10.jpg" }
];

let cart = [];

// --- Affichage des produits dans le catalogue ---
function displayProducts(items) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <p class="product-title">${product.name}</p>
                <p class="product-price">${product.price.toLocaleString('fr-FR')} FCFA</p>
                <button class="add-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Filtrage des produits par catégorie ---
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// --- Style actif sur le bouton sélectionné ---
function updateActiveButton(clickedButton) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}

// --- Ajouter un article au panier ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

// --- Modifier la quantité d'un article (+1 ou -1) ---
function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    updateCartUI();
}

// --- Supprimer un article du panier ---
function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

// --- Mise à jour détaillée de l'affichage du panier ---
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Nombre d'articles au total
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;

    // Calcul du prix total global
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = totalPrice.toLocaleString('fr-FR');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center; padding: 15px; color:#aaa;">Votre panier est vide.</p>';
        return;
    }

    // Affichage détaillé de chaque article dans le panier
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item-row" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid #2a3a2d;">
            <img src="${item.image}" alt="${item.name}" style="width:45px; height:45px; object-fit:cover; border-radius:6px; margin-right:10px;">
            <div style="flex-grow:1;">
                <div style="font-weight:600; font-size:0.9rem;">${item.name}</div>
                <div style="font-size:0.8rem; color:#2ecc71;">${item.price.toLocaleString('fr-FR')} FCFA / unité</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px; margin: 0 10px;">
                <button onclick="changeQuantity(${item.id}, -1)" style="background:#2a3a2d; color:#fff; border:none; width:24px; height:24px; border-radius:4px; cursor:pointer;">-</button>
                <span style="font-weight:bold; font-size:0.9rem;">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" style="background:#2ecc71; color:#000; border:none; width:24px; height:24px; border-radius:4px; cursor:pointer; font-weight:bold;">+</button>
            </div>
            <div style="font-weight:bold; font-size:0.9rem; min-width:80px; text-align:right;">
                ${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:transparent; color:#e74c3c; border:none; margin-left:8px; cursor:pointer; font-size:1rem;">&times;</button>
        </div>
    `).join('');
}

// --- Ouvrir / Fermer le panier ---
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

// --- Envoi du récapitulatif par WhatsApp ---
function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let message = "Bonjour Tyka Shop ! Je souhaite passer la commande suivante :\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `• *${item.name}*\n  Quantité : ${item.quantity}\n  Prix unitaire : ${item.price.toLocaleString('fr-FR')} FCFA\n  Sous-total : ${subtotal.toLocaleString('fr-FR')} FCFA\n\n`;
    });

    message += `*TOTAL DE LA COMMANDE : ${total.toLocaleString('fr-FR')} FCFA*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
}

// --- Lancement de l'application ---
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            updateActiveButton(button);
            filterProducts(button.id);
        });
    });
});