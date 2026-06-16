const phoneNumber = "917977576575";
const upiId = "rushikeshthul007-1@okaxis";
const payeeName = "Heritage Wallpaper and Carpet";
const cart = [];

const products = [
  {
    id: "fiore-garden",
    name: "Fiore Garden Wallpaper",
    finish: "Botanical",
    category: "wallpaper",
    rooms: ["living", "bedroom"],
    price: 1890,
    was: 2490,
    unit: "per roll",
    sample: 99,
    art: "pattern-botanical",
    description: "Leafy botanical print for warm living rooms and feature walls.",
    badge: "Offer"
  },
  {
    id: "cronno-stripe",
    name: "Cronno Stripe Wallpaper",
    finish: "Stripe",
    category: "wallpaper",
    rooms: ["living", "office"],
    price: 1450,
    unit: "per roll",
    sample: 99,
    art: "pattern-stripe",
    description: "Smart vertical stripes that make compact rooms feel taller.",
    badge: "Best seller"
  },
  {
    id: "labyrinth-geo",
    name: "Labyrinth Geometric Wallpaper",
    finish: "Geometric",
    category: "wallpaper",
    rooms: ["living", "office"],
    price: 2250,
    was: 2850,
    unit: "per roll",
    sample: 149,
    art: "pattern-geo",
    description: "Bold geometric pattern with deep blue and brass accents.",
    badge: "New"
  },
  {
    id: "wisteria-rose",
    name: "Wisteria Rose Wallpaper",
    finish: "Floral",
    category: "wallpaper",
    rooms: ["bedroom"],
    price: 1990,
    unit: "per roll",
    sample: 99,
    art: "pattern-floral",
    description: "Soft floral repeat for calm bedrooms and dressing areas.",
    badge: "Sample ready"
  },
  {
    id: "mini-modern-kids",
    name: "Mini Modern Kids Wallpaper",
    finish: "Kids",
    category: "wallpaper",
    rooms: ["kids"],
    price: 1690,
    unit: "per roll",
    sample: 99,
    art: "pattern-kids",
    description: "Playful dotted colour story for kids rooms and nurseries.",
    badge: "Kids"
  },
  {
    id: "linen-texture",
    name: "Linen Texture Vinyl Wallpaper",
    finish: "Textured",
    category: "wallpaper",
    rooms: ["living", "bedroom", "hotel"],
    price: 2350,
    unit: "per roll",
    sample: 149,
    art: "pattern-linen",
    description: "Washable textured vinyl with a quiet woven finish.",
    badge: "Washable"
  },
  {
    id: "heritage-carpet-tile",
    name: "Heritage Contract Carpet Tile",
    finish: "Commercial",
    category: "carpet",
    rooms: ["office", "hotel"],
    price: 115,
    unit: "per sq ft",
    sample: 120,
    art: "pattern-carpet",
    description: "Durable carpet tile for offices, hotels and corridors.",
    badge: "Contract"
  },
  {
    id: "balcony-grass",
    name: "Balcony Artificial Grass",
    finish: "Outdoor",
    category: "carpet",
    rooms: ["living"],
    price: 85,
    was: 120,
    unit: "per sq ft",
    sample: 99,
    art: "pattern-grass",
    description: "Low-maintenance turf for balconies, terraces and displays.",
    badge: "Offer"
  },
  {
    id: "oak-vinyl-floor",
    name: "Warm Oak Vinyl Flooring",
    finish: "Wood look",
    category: "flooring",
    rooms: ["living", "bedroom", "office"],
    price: 155,
    unit: "per sq ft",
    sample: 120,
    art: "pattern-floor",
    description: "Water-resistant wood look vinyl flooring for daily use.",
    badge: "Waterproof"
  },
  {
    id: "fluted-wall-panel",
    name: "Fluted Charcoal Wall Panel",
    finish: "Panel",
    category: "panel",
    rooms: ["living", "office", "hotel"],
    price: 240,
    unit: "per sq ft",
    sample: 150,
    art: "pattern-panel",
    description: "Modern fluted panel for TV walls, counters and offices.",
    badge: "Premium"
  },
  {
    id: "hotel-corridor-carpet",
    name: "Hotel Corridor Carpet",
    finish: "Commercial",
    category: "carpet",
    rooms: ["hotel"],
    price: 135,
    unit: "per sq ft",
    sample: 120,
    art: "pattern-carpet",
    description: "Dense pile carpet for lobbies, corridors and banquet spaces.",
    badge: "Hotel"
  },
  {
    id: "metallic-luxe",
    name: "Metallic Luxe Wallpaper",
    finish: "Luxury",
    category: "wallpaper",
    rooms: ["living", "hotel"],
    price: 3200,
    was: 3900,
    unit: "per roll",
    sample: 199,
    art: "pattern-geo",
    description: "Luxury metallic pattern for premium homes and showrooms.",
    badge: "Luxury"
  }
];

const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutSummary = document.getElementById("checkoutSummary");

let activeFilter = "all";
let activeRoom = "";
let searchTerm = "";

function formatMoney(value) {
  return `Rs ${value.toLocaleString("en-IN")}`;
}

function getVisibleProducts() {
  return products.filter((product) => {
    const filterMatch = activeFilter === "all"
      || product.category === activeFilter
      || (activeFilter === "sale" && product.was);
    const roomMatch = !activeRoom || product.rooms.includes(activeRoom);
    const searchMatch = !searchTerm
      || `${product.name} ${product.finish} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(searchTerm);
    return filterMatch && roomMatch && searchMatch;
  });
}

function renderProducts() {
  const visible = getVisibleProducts();
  resultCount.textContent = `${visible.length} product${visible.length === 1 ? "" : "s"} shown`;
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-art ${product.art}" aria-hidden="true"></div>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.finish}</span>
          <span>${product.badge}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row">
          <div>
            ${product.was ? `<span class="was">${formatMoney(product.was)}</span>` : ""}
            <span class="price">${formatMoney(product.price)}</span>
          </div>
          <span class="unit">${product.unit}</span>
        </div>
        <div class="product-actions">
          <button class="add-roll" type="button" data-add="${product.id}">Add to basket</button>
          <button class="add-sample" type="button" data-sample="${product.id}">Sample ${formatMoney(product.sample)}</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(productId, sample = false) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const key = `${productId}-${sample ? "sample" : "main"}`;
  const existing = cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id: product.id,
      name: sample ? `${product.name} Sample` : product.name,
      price: sample ? product.sample : product.price,
      unit: sample ? "sample" : product.unit,
      qty: 1
    });
  }
  renderCart();
  openCart();
}

function removeFromCart(key) {
  const index = cart.findIndex((item) => item.key === key);
  if (index >= 0) cart.splice(index, 1);
  renderCart();
}

function cartSum() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  cartTotal.textContent = formatMoney(cartSum());
  cartEmpty.style.display = cart.length ? "none" : "block";
  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <small>${item.qty} x ${formatMoney(item.price)} ${item.unit}</small>
      </div>
      <button type="button" aria-label="Remove ${item.name}" data-remove="${item.key}">x</button>
    </div>
  `).join("");
  checkoutSummary.innerHTML = cart.length
    ? cart.map((item) => `${item.qty} x ${item.name} - ${formatMoney(item.price * item.qty)}`).join("<br>") + `<br><strong>Total: ${formatMoney(cartSum())}</strong>`
    : "No products selected.";

  const upiPayBtn = document.getElementById("upiPayBtn");
  if (upiPayBtn) {
    if (cart.length > 0) {
      upiPayBtn.style.display = "block";
      const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${cartSum().toFixed(2)}&cu=INR`;
      
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        upiPayBtn.href = upiString;
        upiPayBtn.removeAttribute("target");
        upiPayBtn.textContent = `Pay ${formatMoney(cartSum())} via UPI (GPay, PhonePe, Paytm)`;
      } else {
        upiPayBtn.href = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
        upiPayBtn.target = "_blank";
        upiPayBtn.textContent = `Pay ${formatMoney(cartSum())} via UPI (Scan QR Code)`;
      }
    } else {
      upiPayBtn.style.display = "none";
    }
  }
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openCheckout() {
  if (!cart.length) return;
  closeCart();
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
}

function closeCheckout() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderProducts();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const sampleButton = event.target.closest("[data-sample]");
  const removeButton = event.target.closest("[data-remove]");
  const filterButton = event.target.closest("[data-filter]");
  const roomButton = event.target.closest("[data-room]");
  const quickFilter = event.target.closest("[data-quick-filter]");
  const navFilter = event.target.closest("[data-nav-filter]");

  if (addButton) addToCart(addButton.dataset.add);
  if (sampleButton) addToCart(sampleButton.dataset.sample, true);
  if (removeButton) removeFromCart(removeButton.dataset.remove);
  if (filterButton) setFilter(filterButton.dataset.filter);
  if (quickFilter) setFilter(quickFilter.dataset.quickFilter);
  if (navFilter) setFilter(navFilter.dataset.navFilter);
  if (roomButton) {
    activeRoom = activeRoom === roomButton.dataset.room ? "" : roomButton.dataset.room;
    document.querySelectorAll(".room-chip").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.room === activeRoom);
    });
    renderProducts();
  }
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.getElementById("basketBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("closeCheckout").addEventListener("click", closeCheckout);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) closeCheckout();
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  renderProducts();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".brand-rail button").forEach((button) => {
  button.addEventListener("click", () => {
    searchTerm = button.dataset.finish.toLowerCase();
    document.getElementById("searchInput").value = button.dataset.finish;
    activeFilter = "all";
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === "all");
    });
    renderProducts();
    document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const area = document.getElementById("customerArea").value.trim();
  const payment = document.getElementById("paymentMethod").value;
  const items = cart.map((item) => `- ${item.qty} x ${item.name} (${formatMoney(item.price * item.qty)})`).join("%0A");
  const message = [
    "*New Heritage Website Order*",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Area: ${area}`,
    `Payment: ${payment}`,
    "",
    "Items:",
    items,
    "",
    `Estimated total: ${formatMoney(cartSum())}`,
    "",
    "Please confirm stock and send the secure payment link."
  ].join("%0A");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener");
});

document.getElementById("upiPayBtn").addEventListener("click", (event) => {
  if (upiId === "yourbusiness@upi" || upiId.trim() === "") {
    event.preventDefault();
    alert("Payment Setup Required: Please open script.js and replace 'yourbusiness@upi' on line 2 with your actual bank UPI ID (e.g., 917977576575@paytm).");
  }
});

renderProducts();
renderCart();
