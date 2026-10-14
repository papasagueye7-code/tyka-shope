// Numéro WhatsApp auquel envoyer les commandes (sans le "+")
const PHONE_NUMBER = "221772071365";

// --- Catalogue complet avec icônes intégrées (10 articles par catégorie) ---
const products = [
    // ================= VÊTEMENTS (10) =================
    { id: 1, name: "Robe Wax Élégante", category: "vetements", price: 15000, icon: "👗", featured: true },
    { id: 2, name: "Ensemble Adire 2 Pièces", category: "vetements", price: 20000, icon: "👘", featured: false },
    { id: 3, name: "Chemise Traditionnelle", category: "vetements", price: 12000, icon: "👔", featured: false },
    { id: 4, name: "Robe de Soirée Silk", category: "vetements", price: 25000, icon: "✨", featured: false },
    { id: 5, name: "Veste Blazer Moderne", category: "vetements", price: 22000, icon: "🧥", featured: false },
    { id: 6, name: "Combinaison Chic", category: "vetements", price: 18000, icon: "👚", featured: false },
    { id: 7, name: "Boubou Brodé Luxe", category: "vetements", price: 35000, icon: "👑", featured: true },
    { id: 8, name: "T-Shirt Basic Coton", category: "vetements", price: 5000, icon: "👕", featured: false },
    { id: 9, name: "Pantalon Évasé Fashion", category: "vetements", price: 14000, icon: "👖", featured: false },
    { id: 10, name: "Jupe Stylée imprimée", category: "vetements", price: 10000, icon: "👗", featured: false },

    // ================= CHAUSSURES (10) =================
    { id: 11, name: "Sandales en Cuir", category: "chaussures", price: 8000, icon: "👡", featured: true },
    { id: 12, name: "Mocassins Élégants", category: "chaussures", price: 18000, icon: "👞", featured: false },
    { id: 13, name: "Escarpins À Talons", category: "chaussures", price: 16000, icon: "👠", featured: false },
    { id: 14, name: "Sneakers Streetwear", category: "chaussures", price: 22000, icon: "👟", featured: false },
    { id: 15, name: "Baskets Sport Blanc", category: "chaussures", price: 15000, icon: "👟", featured: false },
    { id: 16, name: "Sandales Compensées", category: "chaussures", price: 12000, icon: "👡", featured: false },
    { id: 17, name: "Chaussures de Ville", category: "chaussures", price: 25000, icon: "👞", featured: true },
    { id: 18, name: "Claquettes Design", category: "chaussures", price: 6000, icon: "🩴", featured: false },
    { id: 19, name: "Bottines en Daim", category: "chaussures", price: 28000, icon: "🥾", featured: false },
    { id: 20, name: "Babouches Artisanales", category: "chaussures", price: 9000, icon: "🥿", featured: false },

    // ================= SACS (10) =================
    { id: 21, name: "Sac à Main Luxe Cuir", category: "sacs", price: 12500, icon: "👜", featured: true },
    { id: 22, name: "Sac Cabas Grand Format", category: "sacs", price: 15000, icon: "🛍️", featured: false },
    { id: 23, name: "Pochette de Soirée", category: "sacs", price: 9000, icon: "👛", featured: false },
    { id: 24, name: "Sac Bandoulière Chic", category: "sacs", price: 11000, icon: "👜", featured: false },
    { id: 25, name: "Sac à Dos Cuir Homme", category: "sacs", price: 20000, icon: "🎒", featured: false },
    { id: 26, name: "Sac Seau Tressé", category: "sacs", price: 13500, icon: "🛍️", featured: false },
    { id: 27, name: "Mini Sac Tendance", category: "sacs", price: 8500, icon: "👛", featured: false },
    { id: 28, name: "Sac de Voyage Week-end", category: "sacs", price: 25000, icon: "🧳", featured: false },
    { id: 29, name: "Pochette Porte-documents", category: "sacs", price: 14000, icon: "📁", featured: false },
    { id: 30, name: "Sac Wax Artisanal", category: "sacs", price: 10000, icon: "👜", featured: false },

    // ================= PARFUMS (10) =================
    { id: 31, name: "Parfum Tyka Gold", category: "parfums", price: 18000, icon: "✨", featured: true },
    { id: 32, name: "Eau de Parfum Oud Noir", category: "parfums", price: 25000, icon: "🍾", featured: false },
    { id: 33, name: "Parfum Florale Rose", category: "parfums", price: 15000, icon: "🌹", featured: false },
    { id: 34, name: "Parfum Vanille Intense", category: "parfums", price: 16000, icon: "🧪", featured: false },
    { id: 35, name: "Eau de Toilette Fraîche", category: "parfums", price: 12000, icon: "💧", featured: false },
    { id: 36, name: "Parfum Musk Amber", category: "parfums", price: 22000, icon: "🌟", featured: false },
    { id: 37, name: "Coffret Parfum Premium", category: "parfums", price: 35000, icon: "🎁", featured: true },
    { id: 38, name: "Parfum Bois de Santal", category: "parfums", price: 20000, icon: "🪵", featured: false },
    { id: 39, name: "Brume Parfumée Corps", category: "parfums", price: 8000, icon: "🌸", featured: false },
    { id: 40, name: "Parfum Royal Edition", category: "parfums", price: 30000, icon: "👑", featured: false },

    // ================= MONTRES (10) =================
    { id: 41, name: "Montre Homme Chrono", category: "montres", price: 25000, icon: "⌚", featured: true },
    { id: 42, name: "Montre Femme Dorée", category: "montres", price: 22000, icon: "💛", featured: false },
    { id: 43, name: "Montre Automatique Cuir", category: "montres", price: 35000, icon: "⏱️", featured: false },
    { id: 44, name: "Montre Connectée Smart", category: "montres", price: 28000, icon: "📱", featured: false },
    { id: 45, name: "Montre Minimaliste Noir", category: "montres", price: 18000, icon: "🖤", featured: false },
    { id: 46, name: "Montre Sport Étanche", category: "montres", price: 15000, icon: "⏱️", featured: false },
    { id: 47, name: "Montre Argentée Diamant", category: "montres", price: 30000, icon: "💎", featured: false },
    { id: 48, name: "Montre Classic Vintage", category: "montres", price: 20000, icon: "🕰️", featured: false },
    { id: 49, name: "Montre Luxe Squelette", category: "montres", price: 45000, icon: "⚙️", featured: false },
    { id: 50, name: "Montre Bracelet Acier", category: "montres", price: 26000, icon: "⌚", featured: false }
];

let cart = [];

// --- Afficher la Page d'Accueil ---
function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    
    // Sélection d'articles en vedette
    const featuredProducts = products.filter(p => p.featured);

    mainContent.innerHTML = `
        <div style="padding: 20px; max-width: 1100px; margin: 0 auto;">
            <!-- Message de bienvenue -->
            <div style="background: #161e18; border: 1px solid #233126; padding: 25px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
                <h3 style="color: #2ecc71; font-size: 1.5rem; margin-bottom: 10px;">Votre destination mode & élégance 🛍️</h3>
                <p style="color: #ccc; line-height: 1.6; max-width: 700px; margin: 0 auto;">
                    Découvrez nos collections soigneusement sélectionnées : vêtements traditionnels et modernes, chaussures élégantes, sacs haut de gamme, parfums envoûtants et montres de prestige.
                </p>
            </div>

            <!-- Titre Sélection -->
            <h3 style="color: #ffffff; margin-bottom: 15px; border-left: 4px solid #2ecc71; padding-left: 10px;">⭐ Coups de cœur & Meilleures Ventes</h3>

            <!-- Grille des coups de cœur -->
            <div class="products-grid" id="featured-container">
                ${featuredProducts.map(product => `
                    <div class="product-card">
                        <div style="height:150px; display:flex; align-items:center; justify-content:center; font-size:4rem; background:#111913;">
                            ${product.icon}
                        </div>
                        <div class="product-info">
                            <p class="product-title">${product.name}</p>
                            <p class="product-price">${product.price.toLocaleString('fr-FR')} FCFA</p>
                            <button class="add-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// --- Afficher une catégorie spécifique ---
function renderCategoryPage(category) {
    const mainContent = document.getElementById('main-content');
    const filteredProducts = products.filter(p => p.category === category);

    mainContent.innerHTML = `
        <div style="padding: 20px;">
            <div class="products-grid">
                ${filteredProducts.map(product => `
                    <div class="product-card">
                        <div style="height:150px; display:flex; align-items:center; justify-content:center; font-size:4rem; background:#111913;">
                            ${product.icon}
                        </div>
                        <div class="product-info">
                            <p class="product-title">${product.name}</p>
                            <p class="product-price">${product.price.toLocaleString('fr-FR')} FCFA</p>
                            <button class="add-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// --- Style actif sur le bouton sélectionné ---
function updateActiveButton(clickedButton) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}

// --- Navigation entre Accueil et Catégories ---
function handleNavigation(categoryId, button) {
    updateActiveButton(button);

    if (categoryId === 'home') {
        renderHomePage();
    } else {
        renderCategoryPage(categoryId);
    }
}

// --- Gestion du Panier ---
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

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = totalPrice.toLocaleString('fr-FR');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center; padding: 15px; color:#aaa;">Votre panier est vide.</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid #2a3a2d;">
            <div style="font-size:1.8rem; margin-right:10px; background:#111913; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:6px;">${item.icon}</div>
            <div style="flex-grow:1;">
                <div style="font-weight:600; font-size:0.9rem;">${item.name}</div>
                <div style="font-size:0.8rem; color:#2ecc71;">${item.price.toLocaleString('fr-FR')} FCFA</div>
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

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

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
        message += `• ${item.icon} *${item.name}*\n  Quantité : ${item.quantity}\n  Prix unitaire : ${item.price.toLocaleString('fr-FR')} FCFA\n  Sous-total : ${subtotal.toLocaleString('fr-FR')} FCFA\n\n`;
    });

    message += `*TOTAL DE LA COMMANDE : ${total.toLocaleString('fr-FR')} FCFA*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
}

// --- Initialisation au chargement ---
document.addEventListener('DOMContentLoaded', () => {
    // Charge la page d'accueil par défaut
    renderHomePage();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleNavigation(button.id, button);
        });
    });
});
