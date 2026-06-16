const phoneNumber = "917977576575";
const upiId = "rushikeshthul007-1@okaxis";
const payeeName = "Heritage Wallpaper and Carpet";
const cart = [];

const products = [
  {
    id: "fiore-garden",
    name: "Fiore Premium Garden Roll",
    finish: "Botanical",
    category: "wallpaper",
    rooms: ["living", "bedroom"],
    price: 1890,
    was: 2490,
    unit: "per roll",
    sample: 99,
    art: "pattern-botanical",
    description: "Deep luxury leafy botanical print ideal for majestic living rooms and feature statement partitions.",
    badge: "Exclusive Design"
  },
  {
    id: "cronno-stripe",
    name: "Cronno Architectural Stripe",
    finish: "Stripe",
    category: "wallpaper",
    rooms: ["living", "office"],
    price: 1450,
    unit: "per roll",
    sample: 99,
    art: "pattern-stripe",
    description: "Symmetric vertical linear distributions that elegantly heighten compact structural ceilings.",
    badge: "Atelier Curated"
  },
  {
    id: "labyrinth-geo",
    name: "Labyrinth Luxury Geometric",
    finish: "Geometric",
    category: "wallpaper",
    rooms: ["living", "office"],
    price: 2250,
    was: 2850,
    unit: "per roll",
    sample: 149,
    art: "pattern-geo",
    description: "Bold complex structural vector patterns accented with deep navy blues and brass metallic foils.",
    badge: "Premium Series"
  },
  {
    id: "wisteria-rose",
    name: "Wisteria Silk Floral Relief",
    finish: "Floral",
    category: "wallpaper",
    rooms: ["bedroom"],
    price: 1990,
    unit: "per roll",
    sample: 99,
    art: "pattern-floral",
    description: "Soft textural blossom patterns optimized for master bedrooms and intimate private styling lounges.",
    badge: "Swatches Ready"
  },
  {
    id: "mini-modern-kids",
    name: "Mini Modernist Junior Wallpaper",
    finish: "Kids",
    category: "wallpaper",
    rooms: ["kids"],
    price: 1690,
    unit: "per roll",
    sample: 99,
    art: "pattern-kids",
    description: "Sophisticated play colors for designer nurseries and premium activity child hubs.",
    badge: "Designer Play"
  },
  {
    id: "linen-texture",
    name: "Heavy Linen Grain Vinyl Core",
    finish: "Textured",
    category: "wallpaper",
    rooms: ["living", "bedroom", "hotel"],
    price: 2350,
    unit: "per roll",
    sample: 149,
    art: "pattern-linen",
    description: "Thick fully-washable structural texturized wall material mimicking elite looms.",
    badge: "High Durability"
  },
  {
    id: "heritage-carpet-tile",
    name: "Heritage Structural Contract Tile",
    finish: "Commercial",
    category: "carpet",
    rooms: ["office", "hotel"],
    price: 115,
    unit: "per sq ft",
    sample: 120,
    art: "pattern-carpet",
    description: "Ultra heavy-duty acoustic carpet squares for corporate executive office layouts and suites.",
    badge: "Heavy Traffic"
  },
  {
    id: "balcony-grass",
    name: "Bespoke Premium Artificial Turf",
    finish: "Outdoor",
    category: "carpet",
    rooms: ["living"],
    price: 85,
    was: 120,
    unit: "per sq ft",
    sample: 99,
    art: "pattern-grass",
    description: "Dense, low-maintenance premium structural outdoor grass carpets for elevated balconies and open terraces.",
    badge: "Premium Grade"
  },
  {
    id: "oak-vinyl-floor",
    name: "Engineered Warm Oak Rigid Plank",
    finish: "Wood look",
    category: "flooring",
    rooms: ["living", "bedroom", "office"],
    price: 155,
    unit: "per sq ft",
    sample: 120,
    art: "pattern-floor",
    description: "Completely moisture-isolated luxury vinyl plank wear-surface with rich variable wood knots.",
    badge: "Impervious Core"
  },
  {
    id: "fluted-wall-panel",
    name: "Fluted Charcoal Architectural Slats",
    finish: "Panel",
    category: "panel",
    rooms: ["living", "office", "hotel"],
    price: 240,
    unit: "per sq ft",
    sample: 150,
    art: "pattern-panel",
    description: "Deep relief horizontal and vertical fluted profiles for TV framing backdrops and primary counters.",
    badge: "Elite Accent"
  },
  {
    id: "hotel-corridor-carpet",
    name: "Luxury Hospitality Broadloom Carpet",
    finish: "Commercial",
    category: "carpet",
    rooms: ["hotel"],
    price: 135,
    unit: "per sq ft",
    sample: 120,
    art: "pattern-carpet",
    description: "High pile plush structural running carpet sets engineered for hotel lobbies and elegant wedding spaces.",
    badge: "Hospitality Elite"
  },
  {
    id: "metallic-luxe",
    name: "Bespoke Foil Metallic Luxury Roll",
    finish: "Luxury",
    category: "wallpaper",
    rooms: ["living", "hotel"],
    price: 3200,
    was: 3900,
    unit: "per roll",
    sample: 199,
    art: "pattern-geo",
    description: "High-reflection genuine foil patterns reserved for ultra high-end homes and flagship storefront showcases.",
    badge: "Atelier Limited"
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
  resultCount.textContent = `${visible.length} Choice Variant${visible.length === 1 ? "" : "s"} Displayed`;
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-art ${product.art}" aria-hidden="true"></div>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.finish} Line</span>
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
          <button class="add-roll" type="button" data-add="${product.id}">Select Lot</button>
          <button class="add-sample" type="button" data-sample="${product.id}">Swatch ${formatMoney(product.sample)}</button>
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
      name: sample ? `${product.name} Sample Swatch` : product.name,
      price: sample ? product.sample : product.price,
      unit: sample ? "sample unit" : product.unit,
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
        <small>${item.qty} × ${formatMoney(item.price)} [${item.unit}]</small>
      </div>
      <button type="button" aria-label="Remove ${item.name}" data-remove="${item.key}">×</button>
    </div>
  `).join("");
  
  checkoutSummary.innerHTML = cart.length
    ? cart.map((item) => `⚜️ ${item.qty} × ${item.name} - ${formatMoney(item.price * item.qty)}`).join("<br>") + `<br><br><strong>Estimated Vault Total: ${formatMoney(cartSum())}</strong>`
    : "No premium materials selected.";

  const upiPayBtn = document.getElementById("upiPayBtn");
  if (upiPayBtn) {
    if (cart.length > 0) {
      upiPayBtn.style.display = "block";
      const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${cartSum().toFixed(2)}&cu=INR`;
      
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        upiPayBtn.href = upiString;
        upiPayBtn.removeAttribute("target");
        upiPayBtn.textContent = `Authorize ${formatMoney(cartSum())} via Local UPI App`;
      } else {
        upiPayBtn.href = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
        upiPayBtn.target = "_blank";
        upiPayBtn.textContent = `Generate Secure Vault QR Payment`;
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
  const items = cart.map((item) => `⚜️ ${item.qty} x ${item.name} (${formatMoney(item.price * item.qty)})`).join("%0A");
  const message = [
    "*NEW HERITAGE ATELIER PROCUREMENT REQUEST*",
    "",
    `Client Name: ${name}`,
    `Secure Contact: ${phone}`,
    `Target Deployment Zone: ${area}`,
    `Selected Settlement Protocol: ${payment}`,
    "",
    "Selected Materials Dossier:",
    items,
    "",
    `Estimated Value Sum: ${formatMoney(cartSum())}`,
    "",
    "Please verify physical inventory configurations and return verification invoice tokens."
  ].join("%0A");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener");
});

renderProducts();
renderCart();