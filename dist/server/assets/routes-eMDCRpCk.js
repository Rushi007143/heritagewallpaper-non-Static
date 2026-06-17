import { t as heritage_logo_png_asset_default } from "./heritage-logo.png.asset-D011j9LG.js";
import { useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
var phoneNumber = "917977576575";
var upiId = "rushikeshthul007-1@okaxis";
var payeeName = "Heritage Wallpaper and Carpet";
var products = [
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
		badge: "Samples Ready"
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
		rooms: [
			"living",
			"bedroom",
			"hotel"
		],
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
		rooms: [
			"living",
			"bedroom",
			"office"
		],
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
		rooms: [
			"living",
			"office",
			"hotel"
		],
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
var formatMoney = (v) => `Rs ${v.toLocaleString("en-IN")}`;
var galleryImgs = [
	"https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
];
function Index() {
	const [activeFilter, setActiveFilter] = useState("all");
	const [activeRoom, setActiveRoom] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [cart, setCart] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);
	const [checkoutOpen, setCheckoutOpen] = useState(false);
	const [customer, setCustomer] = useState({
		name: "",
		phone: "",
		area: "",
		payment: "Secure digital payment link"
	});
	const visible = useMemo(() => products.filter((p) => {
		const filterMatch = activeFilter === "all" || p.category === activeFilter || activeFilter === "sale" && p.was;
		const roomMatch = !activeRoom || p.rooms.includes(activeRoom);
		const text = `${p.name} ${p.finish} ${p.category} ${p.description}`.toLowerCase();
		const searchMatch = !searchTerm || text.includes(searchTerm);
		return filterMatch && roomMatch && searchMatch;
	}), [
		activeFilter,
		activeRoom,
		searchTerm
	]);
	const cartCount = cart.reduce((s, i) => s + i.qty, 0);
	const cartSum = cart.reduce((s, i) => s + i.price * i.qty, 0);
	const addToCart = (id, sample = false) => {
		const p = products.find((x) => x.id === id);
		if (!p) return;
		const key = `${id}-${sample ? "sample" : "main"}`;
		setCart((curr) => {
			if (curr.find((c) => c.key === key)) return curr.map((c) => c.key === key ? {
				...c,
				qty: c.qty + 1
			} : c);
			return [...curr, {
				key,
				id: p.id,
				name: sample ? `${p.name} Sample` : p.name,
				price: sample ? p.sample : p.price,
				unit: sample ? "sample unit" : p.unit,
				qty: 1
			}];
		});
		setCartOpen(true);
	};
	const removeFromCart = (key) => setCart((c) => c.filter((i) => i.key !== key));
	const scrollTo = (id) => {
		if (typeof document !== "undefined") document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const setFilterAndScroll = (f) => {
		setActiveFilter(f);
		scrollTo("shop");
	};
	const applyFinishSearch = (finish) => {
		setSearchTerm(finish.toLowerCase());
		setSearchInput(finish);
		setActiveFilter("all");
		scrollTo("shop");
	};
	const upiHref = useMemo(() => {
		if (!cart.length) return "#";
		const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${cartSum.toFixed(2)}&cu=INR`;
		if (typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return upiString;
		return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
	}, [cart, cartSum]);
	const isMobileUPI = typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	useEffect(() => {
		const handler = (e) => {
			if (e.key === "Escape") {
				setCartOpen(false);
				setCheckoutOpen(false);
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, []);
	const submitCheckout = (e) => {
		e.preventDefault();
		const items = cart.map((i) => `⚜️ ${i.qty} x ${i.name} (${formatMoney(i.price * i.qty)})`).join("%0A");
		const message = [
			"*NEW HERITAGE ATELIER PROCUREMENT REQUEST*",
			"",
			`Client Name: ${customer.name}`,
			`Secure Contact: ${customer.phone}`,
			`Target Deployment Zone: ${customer.area}`,
			`Selected Settlement Protocol: ${customer.payment}`,
			"",
			"Selected Materials Dossier:",
			items,
			"",
			`Estimated Value Sum: ${formatMoney(cartSum)}`,
			"",
			"Please verify physical inventory configurations and return verification invoice tokens."
		].join("%0A");
		window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "hw-root",
		children: [
			/* @__PURE__ */ jsx("style", { children: styles }),
			/* @__PURE__ */ jsxs("div", {
				className: "topbar",
				children: [
					/* @__PURE__ */ jsx("span", { children: "✨ Premium Wallpapers & Luxury Carpets" }),
					/* @__PURE__ */ jsx("span", { children: "Free Ulhasnagar Store Pickup" }),
					/* @__PURE__ */ jsx("span", { children: "Samples Available from Rs 99" })
				]
			}),
			/* @__PURE__ */ jsx("header", {
				className: "site-header",
				children: /* @__PURE__ */ jsxs("div", {
					className: "header-container-block",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "header-main",
						children: [/* @__PURE__ */ jsx("a", {
							href: "#home",
							className: "brand",
							"aria-label": "Heritage Wallpaper and Carpet home",
							children: /* @__PURE__ */ jsx("img", {
								src: heritage_logo_png_asset_default.url,
								alt: "Heritage Wallpaper & Carpet",
								className: "brand-logo-img"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "header-actions-wrapper",
							children: [/* @__PURE__ */ jsxs("form", {
								className: "search",
								onSubmit: (e) => {
									e.preventDefault();
									setSearchTerm(searchInput.trim().toLowerCase());
									scrollTo("shop");
								},
								children: [/* @__PURE__ */ jsx("input", {
									type: "search",
									value: searchInput,
									onChange: (e) => setSearchInput(e.target.value),
									placeholder: "Search wallpaper, carpets, colors..."
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									"aria-label": "Search",
									children: /* @__PURE__ */ jsx("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ jsx("path", { d: "M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6Zm0-2a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Zm5.3.4 4.1 4.1-1.5 1.4-4-4.1 1.4-1.4Z" })
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "header-buttons-group",
								children: [/* @__PURE__ */ jsx("a", {
									href: "tel:+917977576575",
									className: "header-link",
									children: "Call Shop"
								}), /* @__PURE__ */ jsxs("button", {
									className: "basket-btn",
									type: "button",
									onClick: () => setCartOpen(true),
									children: ["Cart ", /* @__PURE__ */ jsx("span", { children: cartCount })]
								})]
							})]
						})]
					}), /* @__PURE__ */ jsxs("nav", {
						className: "main-nav",
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								onClick: (e) => {
									e.preventDefault();
									setFilterAndScroll("wallpaper");
								},
								children: "Wallpapers"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								onClick: (e) => {
									e.preventDefault();
									setFilterAndScroll("carpet");
								},
								children: "Carpets"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								onClick: (e) => {
									e.preventDefault();
									setFilterAndScroll("flooring");
								},
								children: "Wooden Flooring"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#brands",
								children: "Collections"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#samples",
								children: "Order Samples"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#gallery",
								children: "Our Work Gallery"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#checkoutGuide",
								children: "How to Pay"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								children: "Contact Us"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("main", {
				id: "home",
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: "hero",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "hero-copy",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "crest-divider",
									children: /* @__PURE__ */ jsx("span", { children: "⚜️" })
								}),
								/* @__PURE__ */ jsx("h1", { children: "Transform your home with premium wallpapers & luxury carpets." }),
								/* @__PURE__ */ jsx("p", { children: "Explore beautiful interior collections made for Indian homes. Browse active designs, order physical lookbook samples, and easily upgrade your rooms with a perfect finish." }),
								/* @__PURE__ */ jsxs("div", {
									className: "hero-actions",
									children: [/* @__PURE__ */ jsx("a", {
										href: "#shop",
										className: "btn primary",
										children: "View Collection"
									}), /* @__PURE__ */ jsx("a", {
										href: "#samples",
										className: "btn secondary",
										children: "Get Samples"
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "hero-studio",
							"aria-label": "Wallpaper product preview",
							children: [
								/* @__PURE__ */ jsx("div", { className: "roll roll-a" }),
								/* @__PURE__ */ jsx("div", { className: "roll roll-b" }),
								/* @__PURE__ */ jsx("div", { className: "roll roll-c" }),
								/* @__PURE__ */ jsxs("div", {
									className: "studio-card",
									children: [/* @__PURE__ */ jsx("strong", { children: "New Arrivals" }), /* @__PURE__ */ jsx("span", { children: "Exquisite Metallics, Textured Wallpapers, & Premium Flooring Options" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "promo-band",
						"aria-label": "Promotions",
						children: [
							/* @__PURE__ */ jsxs("article", { children: [
								/* @__PURE__ */ jsx("span", { children: "Special Offer" }),
								/* @__PURE__ */ jsx("strong", { children: "Get up to 35% off on selected wallpaper rolls" }),
								/* @__PURE__ */ jsx("a", {
									href: "#shop",
									onClick: (e) => {
										e.preventDefault();
										setFilterAndScroll("sale");
									},
									children: "View Deals"
								})
							] }),
							/* @__PURE__ */ jsxs("article", { children: [
								/* @__PURE__ */ jsx("span", { children: "Try Before Buying" }),
								/* @__PURE__ */ jsx("strong", { children: "Check the texture and color match in your room's lighting" }),
								/* @__PURE__ */ jsx("a", {
									href: "#samples",
									children: "Order Samples"
								})
							] }),
							/* @__PURE__ */ jsxs("article", { children: [
								/* @__PURE__ */ jsx("span", { children: "Expert Service" }),
								/* @__PURE__ */ jsx("strong", { children: "Accurate room measurement and flawless installation across MMR" }),
								/* @__PURE__ */ jsx("a", {
									href: "#contact",
									children: "Book Measurement Visit"
								})
							] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "catalog-shell",
						id: "shop",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "filters",
							"aria-label": "Product filters",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Categories" }), [
									["all", "All Products"],
									["wallpaper", "Wallpapers"],
									["carpet", "Luxury Carpets"],
									["flooring", "Wooden Flooring"],
									["panel", "Wall Panels"],
									["sale", "Discount Offers"]
								].map(([k, label]) => /* @__PURE__ */ jsx("button", {
									className: `filter-btn ${activeFilter === k ? "active" : ""}`,
									onClick: () => setActiveFilter(k),
									children: label
								}, k))] }),
								/* @__PURE__ */ jsxs("div", {
									className: "filter-box",
									children: [/* @__PURE__ */ jsx("h3", { children: "Browse by Room" }), [
										["living", "Living Room"],
										["bedroom", "Master Bedroom"],
										["kids", "Kids Room"],
										["office", "Office Space"],
										["hotel", "Hotels & Lounges"]
									].map(([k, label]) => /* @__PURE__ */ jsx("button", {
										className: `room-chip ${activeRoom === k ? "active" : ""}`,
										onClick: () => setActiveRoom(activeRoom === k ? "" : k),
										children: label
									}, k))]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "delivery-note",
									children: [/* @__PURE__ */ jsx("strong", { children: "Need Help with Sizing?" }), /* @__PURE__ */ jsx("p", { children: "Send your wall measurements or layout photos on WhatsApp. Our assistants will calculate the exact number of rolls needed." })]
								})
							]
						}), /* @__PURE__ */ jsxs("section", {
							className: "catalog",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "section-head compact",
								children: [/* @__PURE__ */ jsxs("span", { children: [
									visible.length,
									" Choice Variant",
									visible.length === 1 ? "" : "s",
									" Displayed"
								] }), /* @__PURE__ */ jsx("h2", { children: "Premium catalog selections with clear pricing" })]
							}), /* @__PURE__ */ jsx("div", {
								className: "product-grid",
								children: visible.map((p) => /* @__PURE__ */ jsxs("article", {
									className: "product-card",
									children: [/* @__PURE__ */ jsx("div", {
										className: `product-art ${p.art}`,
										"aria-hidden": "true"
									}), /* @__PURE__ */ jsxs("div", {
										className: "product-body",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "product-meta",
												children: [/* @__PURE__ */ jsxs("span", { children: [p.finish, " Line"] }), /* @__PURE__ */ jsx("span", { children: p.badge })]
											}),
											/* @__PURE__ */ jsx("h3", { children: p.name }),
											/* @__PURE__ */ jsx("p", { children: p.description }),
											/* @__PURE__ */ jsxs("div", {
												className: "price-row",
												children: [/* @__PURE__ */ jsxs("div", { children: [p.was && /* @__PURE__ */ jsx("span", {
													className: "was",
													children: formatMoney(p.was)
												}), /* @__PURE__ */ jsx("span", {
													className: "price",
													children: formatMoney(p.price)
												})] }), /* @__PURE__ */ jsx("span", {
													className: "unit",
													children: p.unit
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "product-actions",
												children: [/* @__PURE__ */ jsx("button", {
													className: "add-roll",
													type: "button",
													onClick: () => addToCart(p.id),
													children: "Add to Basket"
												}), /* @__PURE__ */ jsxs("button", {
													className: "add-sample",
													type: "button",
													onClick: () => addToCart(p.id, true),
													children: ["Sample ", formatMoney(p.sample)]
												})]
											})
										]
									})]
								}, p.id))
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "brands",
						id: "brands",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "section-head",
							children: [/* @__PURE__ */ jsx("span", { children: "Filter by Style Finish" }), /* @__PURE__ */ jsx("h2", { children: "Browse choices sorted like a design library." })]
						}), /* @__PURE__ */ jsx("div", {
							className: "brand-rail",
							children: [
								"Botanical",
								"Geometric",
								"Textured",
								"Luxury",
								"Kids",
								"Commercial"
							].map((f) => /* @__PURE__ */ jsx("button", {
								onClick: () => applyFinishSearch(f),
								children: f === "Kids" ? "Kids & Nursery" : f === "Commercial" ? "Commercial Grade" : f === "Luxury" ? "Luxury Metallics" : f === "Textured" ? "Textured Vinyl" : f === "Geometric" ? "Modern Geometrics" : "Botanical Prints"
							}, f))
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "samples",
						id: "samples",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "sample-visual",
							children: [
								/* @__PURE__ */ jsx("div", { className: "sample sample-one" }),
								/* @__PURE__ */ jsx("div", { className: "sample sample-two" }),
								/* @__PURE__ */ jsx("div", { className: "sample sample-three" })
							]
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "section-head left",
								children: [/* @__PURE__ */ jsx("span", { children: "Samples Available" }), /* @__PURE__ */ jsx("h2", { children: "Check quality, scale, and textures directly on your walls." })]
							}),
							/* @__PURE__ */ jsx("p", { children: "Every design variation has a sample order option. Samples start at just Rs 99 and can be picked up directly at the showroom or sent straight to your doorstep via courier." }),
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								className: "btn primary",
								children: "Choose Your Samples"
							})
						] })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "rooms",
						id: "rooms",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "section-head",
							children: [/* @__PURE__ */ jsx("span", { children: "Room Ideas" }), /* @__PURE__ */ jsx("h2", { children: "Great design baselines for your next interior project." })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "room-grid",
							children: [
								/* @__PURE__ */ jsxs("article", {
									className: "room-card living",
									children: [/* @__PURE__ */ jsx("strong", { children: "Living Room Feature Walls" }), /* @__PURE__ */ jsx("span", { children: "Elegant wide patterns, dynamic textures, and warm tones" })]
								}),
								/* @__PURE__ */ jsxs("article", {
									className: "room-card bedroom",
									children: [/* @__PURE__ */ jsx("strong", { children: "Calming Bedroom Suites" }), /* @__PURE__ */ jsx("span", { children: "Soft natural silks, fine line stripes, and muted floral lookovers" })]
								}),
								/* @__PURE__ */ jsxs("article", {
									className: "room-card office",
									children: [/* @__PURE__ */ jsx("strong", { children: "Corporate Workspaces" }), /* @__PURE__ */ jsx("span", { children: "Acoustic paneling designs and long-life contract carpet setups" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "gallery",
						id: "gallery",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "section-head",
								children: [/* @__PURE__ */ jsx("span", { children: "Our Projects" }), /* @__PURE__ */ jsx("h2", { children: "Showroom & Real Installation Gallery" })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "gallery-grid",
								children: galleryImgs.map((src, i) => /* @__PURE__ */ jsx("div", {
									className: "gallery-item",
									children: /* @__PURE__ */ jsx("img", {
										src,
										alt: `Heritage installation ${i + 1}`,
										loading: "lazy"
									})
								}, i))
							}),
							/* @__PURE__ */ jsxs("p", {
								style: {
									marginTop: "2rem",
									textAlign: "center",
									display: "flex",
									gap: "1rem",
									justifyContent: "center",
									flexWrap: "wrap"
								},
								children: [/* @__PURE__ */ jsx("a", {
									href: "https://www.google.com/maps/place/Heritage+Wallpaper+and+Carpet/@19.2294997,73.1626562,17z",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn primary",
									children: "View Full Showroom Photos"
								}), /* @__PURE__ */ jsx("a", {
									href: "https://www.instagram.com/heritage_wallpaper_and_carpet",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn secondary",
									children: "Follow Us on Instagram"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "checkout-guide",
						id: "checkoutGuide",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "section-head left",
							children: [/* @__PURE__ */ jsx("span", { children: "Easy Order Process" }), /* @__PURE__ */ jsx("h2", { children: "How to finalize your selection and purchase safely." })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "steps",
							children: [
								/* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("strong", { children: "1" }), /* @__PURE__ */ jsx("span", { children: "Add wallpaper rolls, carpets, or panel boards to your shopping cart." })] }),
								/* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("strong", { children: "2" }), /* @__PURE__ */ jsx("span", { children: "Fill in your name, contact phone number, and delivery location area details." })] }),
								/* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("strong", { children: "3" }), /* @__PURE__ */ jsx("span", { children: "Send your request to the shop via WhatsApp for stock validation and payment links." })] })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "contact",
						id: "contact",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "section-head left",
								children: [/* @__PURE__ */ jsx("span", { children: "Visit Our Showroom" }), /* @__PURE__ */ jsx("h2", { children: "Heritage Wallpaper & Carpet, Ulhasnagar." })]
							}),
							/* @__PURE__ */ jsx("p", { children: "Opposite Navjeevan Bank, Near Mayur Hotel, Camp No. 3, Ulhasnagar, Maharashtra 421002" }),
							/* @__PURE__ */ jsx("div", {
								style: {
									marginTop: "1.5rem",
									borderRadius: "12px",
									overflow: "hidden",
									height: "300px",
									maxWidth: "100%",
									boxShadow: "var(--hw-shadow)"
								},
								children: /* @__PURE__ */ jsx("iframe", {
									src: "https://maps.google.com/maps?q=Opposite%20Navjeevan%20Bank,%20Near%20Mayur%20Hotel,%20Camp%20No.%203,%20Ulhasnagar&t=&z=15&ie=UTF8&iwloc=&output=embed",
									width: "100%",
									height: "100%",
									style: { border: 0 },
									loading: "lazy",
									title: "Heritage Wallpaper & Carpet showroom map"
								})
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "contact-actions",
							children: [
								/* @__PURE__ */ jsx("a", {
									className: "btn primary",
									href: `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20am%20inquiring%20about%20your%20premium%20wallpaper%20and%20flooring%20portfolio.`,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Chat with Us on WhatsApp"
								}),
								/* @__PURE__ */ jsx("a", {
									className: "btn secondary",
									href: "tel:+917977576575",
									children: "Call Store Hotline"
								}),
								/* @__PURE__ */ jsx("a", {
									className: "btn secondary",
									href: "https://maps.app.goo.gl/Xsj4nnHRGGW5r8hw9",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Get Driving Directions"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("aside", {
				className: `cart-drawer ${cartOpen ? "open" : ""}`,
				"aria-hidden": !cartOpen,
				onClick: (e) => {
					if (e.target === e.currentTarget) setCartOpen(false);
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: "cart-panel",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "cart-head",
							children: [/* @__PURE__ */ jsx("h2", { children: "Your Selected Items" }), /* @__PURE__ */ jsx("button", {
								className: "icon-btn",
								type: "button",
								"aria-label": "Close basket",
								onClick: () => setCartOpen(false),
								children: "×"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cart-items",
							children: cart.map((item) => /* @__PURE__ */ jsxs("div", {
								className: "cart-item",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item.name }), /* @__PURE__ */ jsxs("small", { children: [
									item.qty,
									" × ",
									formatMoney(item.price),
									" [",
									item.unit,
									"]"
								] })] }), /* @__PURE__ */ jsx("button", {
									type: "button",
									"aria-label": `Remove ${item.name}`,
									onClick: () => removeFromCart(item.key),
									children: "×"
								})]
							}, item.key))
						}),
						!cart.length && /* @__PURE__ */ jsx("div", {
							className: "cart-empty",
							children: "Your shopping cart is currently empty."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "cart-total",
							children: [/* @__PURE__ */ jsx("span", { children: "Estimated Total" }), /* @__PURE__ */ jsx("strong", { children: formatMoney(cartSum) })]
						}),
						/* @__PURE__ */ jsx("button", {
							className: "btn primary full",
							type: "button",
							disabled: !cart.length,
							onClick: () => {
								setCartOpen(false);
								setCheckoutOpen(true);
							},
							children: "Proceed to Checkout"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: `modal ${checkoutOpen ? "open" : ""}`,
				"aria-hidden": !checkoutOpen,
				onClick: (e) => {
					if (e.target === e.currentTarget) setCheckoutOpen(false);
				},
				children: /* @__PURE__ */ jsxs("form", {
					className: "checkout",
					onSubmit: submitCheckout,
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "cart-head",
							children: [/* @__PURE__ */ jsx("h2", { children: "Order Information" }), /* @__PURE__ */ jsx("button", {
								className: "icon-btn",
								type: "button",
								"aria-label": "Close checkout",
								onClick: () => setCheckoutOpen(false),
								children: "×"
							})]
						}),
						/* @__PURE__ */ jsxs("label", { children: ["Your Full Name", /* @__PURE__ */ jsx("input", {
							type: "text",
							required: true,
							value: customer.name,
							onChange: (e) => setCustomer({
								...customer,
								name: e.target.value
							})
						})] }),
						/* @__PURE__ */ jsxs("label", { children: ["Active Phone Number", /* @__PURE__ */ jsx("input", {
							type: "tel",
							required: true,
							value: customer.phone,
							onChange: (e) => setCustomer({
								...customer,
								phone: e.target.value
							})
						})] }),
						/* @__PURE__ */ jsxs("label", { children: ["Delivery / Site Location Area", /* @__PURE__ */ jsx("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Ulhasnagar, Kalyan, Thane, Mumbai...",
							value: customer.area,
							onChange: (e) => setCustomer({
								...customer,
								area: e.target.value
							})
						})] }),
						/* @__PURE__ */ jsxs("label", { children: ["Preferred Payment Protocol", /* @__PURE__ */ jsxs("select", {
							value: customer.payment,
							onChange: (e) => setCustomer({
								...customer,
								payment: e.target.value
							}),
							children: [
								/* @__PURE__ */ jsx("option", { children: "Secure digital payment link" }),
								/* @__PURE__ */ jsx("option", { children: "Instant UPI mobile transfer" }),
								/* @__PURE__ */ jsx("option", { children: "Pay inside the retail store showroom" }),
								/* @__PURE__ */ jsx("option", { children: "Pay following the home site measurement" })
							]
						})] }),
						/* @__PURE__ */ jsx("div", {
							className: "checkout-summary",
							children: cart.length ? /* @__PURE__ */ jsxs(Fragment, { children: [cart.map((i) => /* @__PURE__ */ jsxs("div", { children: [
								"⚜️ ",
								i.qty,
								" × ",
								i.name,
								" - ",
								formatMoney(i.price * i.qty)
							] }, i.key)), /* @__PURE__ */ jsx("div", {
								style: { marginTop: 10 },
								children: /* @__PURE__ */ jsxs("strong", { children: ["Estimated Vault Total: ", formatMoney(cartSum)] })
							})] }) : "No premium materials selected."
						}),
						cart.length > 0 && /* @__PURE__ */ jsx("a", {
							className: "btn secondary full",
							style: {
								marginBottom: "1rem",
								textDecoration: "none"
							},
							href: upiHref,
							target: isMobileUPI ? void 0 : "_blank",
							rel: "noopener noreferrer",
							children: isMobileUPI ? `Authorize ${formatMoney(cartSum)} via Local UPI App` : "Generate Secure Vault QR Payment"
						}),
						/* @__PURE__ */ jsx("button", {
							className: "btn primary full",
							type: "submit",
							children: "Send Order Details over WhatsApp"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "footer",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "footer-grid",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("img", {
							src: heritage_logo_png_asset_default.url,
							alt: "Heritage Wallpaper & Carpet",
							className: "footer-logo-img"
						}), /* @__PURE__ */ jsx("p", {
							style: { marginTop: "1.5rem" },
							children: "Bespoke textures, luxury wall systems, broadloom carpets, wooden flooring, and flawless installations across Mumbai and MMR."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", { children: "Products" }),
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								children: "Designer Wallpapers"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								children: "Luxury Carpets"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#shop",
								children: "Wooden Flooring"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#gallery",
								children: "Installation Lookbook"
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", { children: "Client Support" }),
							/* @__PURE__ */ jsx("a", {
								href: "#samples",
								children: "Order Samples"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#checkoutGuide",
								children: "Payment Steps"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								children: "Our Showroom"
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", { children: "Store Directory" }),
							/* @__PURE__ */ jsx("a", {
								href: "tel:+917977576575",
								children: "Direct Desk: +91 79775 76575"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "mailto:heritagewallpaper01@gmail.com",
								children: "heritagewallpaper01@gmail.com"
							}),
							/* @__PURE__ */ jsx("a", {
								href: `https://wa.me/${phoneNumber}`,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "WhatsApp Store Link"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://www.instagram.com/heritage_wallpaper_and_carpet",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Official Instagram"
							})
						] })
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "copyright",
					children: "© 2026 Heritage Wallpaper & Carpet. All rights reserved."
				})]
			})
		]
	});
}
var styles = `
.hw-root {
  --hw-cream:#fdfbf7; --hw-maroon:#3c0c14; --hw-copper:#c47b41; --hw-orange:#d95d2b;
  --hw-paper:#fcfbfa; --hw-white:#fff; --hw-ink:#1f1416; --hw-muted:#736466; --hw-line:#e3dadb;
  --hw-shadow:0 24px 60px rgba(60,12,20,.08); --hw-radius:12px;
  --hw-serif:"Cinzel",Georgia,serif; --hw-sans:"Inter",Arial,sans-serif;
  font-family:var(--hw-sans); color:var(--hw-ink); background:var(--hw-paper); line-height:1.6;
}
.hw-root * { box-sizing:border-box; }
.hw-root a { color:inherit; text-decoration:none; transition:all .3s ease; }
.hw-root button, .hw-root input, .hw-root select { font:inherit; }
.hw-root button { cursor:pointer; transition:all .3s ease; }
.hw-root svg { width:18px; height:18px; fill:currentColor; }

.topbar { min-height:40px; display:flex; align-items:center; justify-content:center; gap:40px; padding:8px 16px; color:var(--hw-cream); background:var(--hw-maroon); font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:.15em; border-bottom:2px solid var(--hw-copper); flex-wrap:wrap; }

.site-header { position:sticky; top:0; z-index:20; background:rgba(252,251,250,.98); border-bottom:1px solid var(--hw-line); backdrop-filter:blur(20px); }
.header-container-block { max-width:1400px; margin:0 auto; display:flex; flex-direction:column; }
.header-main { padding:16px 24px 8px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:24px; }
.brand { grid-column:2; display:flex; justify-content:center; align-items:center; }
.brand-logo-img { height:84px; width:auto; display:block; }

.header-actions-wrapper { grid-column:3; display:flex; align-items:center; justify-content:flex-end; gap:20px; }
.search { display:grid; grid-template-columns:1fr auto; align-items:center; overflow:hidden; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:8px; width:260px; }
.search input { min-width:0; padding:10px 14px; background:transparent; border:0; outline:0; font-size:13px; }
.search button { height:38px; width:44px; display:grid; place-items:center; color:var(--hw-white); background:var(--hw-maroon); border:0; }
.search button:hover { background:var(--hw-orange); }
.header-buttons-group { display:flex; align-items:center; gap:14px; }
.header-link { color:var(--hw-maroon); font-weight:700; font-size:13px; text-transform:uppercase; letter-spacing:.08em; }
.basket-btn { display:inline-flex; align-items:center; gap:10px; padding:10px 16px; color:var(--hw-white); background:var(--hw-ink); border:0; border-radius:6px; font-weight:700; font-size:12px; text-transform:uppercase; }
.basket-btn span { min-width:22px; min-height:22px; display:grid; place-items:center; color:var(--hw-white); background:var(--hw-copper); border-radius:50%; font-size:11px; }
.icon-btn { width:44px; height:44px; display:inline-grid; place-items:center; color:var(--hw-ink); background:var(--hw-white); border:1px solid var(--hw-line); border-radius:50%; font-size:20px; }

.main-nav { padding:12px 24px 16px; display:flex; justify-content:center; gap:36px; color:var(--hw-muted); font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.1em; border-top:1px solid rgba(0,0,0,.03); margin-top:8px; flex-wrap:wrap; }
.main-nav a:hover { color:var(--hw-orange); }

.hero { max-width:1400px; min-height:680px; margin:0 auto; padding:60px 24px; display:grid; grid-template-columns:minmax(0,1fr) minmax(460px,1.1fr); gap:60px; align-items:center; }
.hero-copy h1 { font-size:clamp(2.3rem,4.5vw,3.8rem); color:var(--hw-maroon); letter-spacing:-.01em; margin:0 0 1rem; font-family:var(--hw-serif); line-height:1.2; }
.crest-divider { font-size:24px; margin-bottom:16px; color:var(--hw-copper); }
.hero p { max-width:580px; margin:0 0 36px; color:var(--hw-muted); font-size:18px; }
.hero-actions, .contact-actions { display:flex; gap:16px; flex-wrap:wrap; }
.btn { min-height:50px; display:inline-flex; align-items:center; justify-content:center; padding:12px 28px; border-radius:6px; border:1px solid var(--hw-maroon); font-weight:700; font-size:14px; text-transform:uppercase; letter-spacing:.08em; }
.btn.primary { color:var(--hw-white); background:var(--hw-maroon); }
.btn.primary:hover { background:var(--hw-orange); border-color:var(--hw-orange); }
.btn.secondary { color:var(--hw-maroon); background:transparent; }
.btn.secondary:hover { background:rgba(60,12,20,.04); }
.btn.full { width:100%; }
.btn:disabled { opacity:.5; cursor:not-allowed; }

.hero-studio { min-height:560px; position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:20px; align-items:end; padding:32px; background:linear-gradient(135deg,#f7f1e6 0%,#eadaa6 100%); border-radius:var(--hw-radius); box-shadow:var(--hw-shadow); overflow:hidden; border:1px solid var(--hw-line); }
.roll { min-height:440px; border-radius:999px 999px 8px 8px; box-shadow:-20px 30px 50px rgba(31,20,22,.22); }
.roll-a { background:linear-gradient(145deg,var(--hw-maroon),#7a2230,var(--hw-copper)); }
.roll-b { min-height:500px; background:repeating-linear-gradient(90deg,rgba(255,255,255,.1) 0 3px,transparent 3px 20px),linear-gradient(160deg,#1f2c33,#3a5d6b,#d9be83); }
.roll-c { background:radial-gradient(circle at 50% 30%,rgba(243,190,131,.3) 0 30px,transparent 32px),linear-gradient(140deg,#8c4c36,#cf8369); }
.studio-card { position:absolute; left:32px; bottom:32px; right:32px; padding:20px; background:rgba(255,255,255,.95); border-left:4px solid var(--hw-orange); border-radius:4px; box-shadow:0 10px 30px rgba(0,0,0,.05); }
.studio-card strong { display:block; font-family:var(--hw-serif); font-size:16px; margin-bottom:6px; color:var(--hw-maroon); }
.studio-card span { color:var(--hw-muted); font-size:13px; }

.promo-band { max-width:1400px; margin:0 auto 60px; padding:0 24px; display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.promo-band article { padding:30px; min-height:180px; display:flex; flex-direction:column; align-items:flex-start; justify-content:space-between; color:var(--hw-white); background:var(--hw-maroon); border-radius:var(--hw-radius); box-shadow:0 10px 30px rgba(60,12,20,.05); }
.promo-band article:nth-child(2) { background:#5c4433; }
.promo-band article:nth-child(3) { background:#4a545c; }
.promo-band span { font-size:11px; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:var(--hw-cream); opacity:.9; }
.promo-band strong { margin:14px 0 24px; font-family:var(--hw-serif); font-size:22px; line-height:1.3; }
.promo-band a { padding-bottom:3px; border-bottom:1px solid rgba(255,255,255,.4); font-weight:700; font-size:13px; }
.promo-band a:hover { border-bottom-color:var(--hw-white); }

.catalog-shell { max-width:1400px; margin:0 auto; padding:60px 24px; display:grid; grid-template-columns:280px 1fr; gap:40px; }
.filters { position:sticky; top:200px; align-self:start; display:flex; flex-direction:column; gap:28px; }
.filters h2, .filters h3 { margin:0 0 16px; font-family:var(--hw-serif); font-size:18px; color:var(--hw-maroon); }
.filter-btn, .room-chip, .brand-rail button { width:100%; margin-bottom:10px; padding:13px 18px; color:var(--hw-ink); background:var(--hw-white); border:1px solid var(--hw-line); border-radius:6px; text-align:left; font-weight:600; font-size:14px; }
.filter-btn.active, .room-chip.active, .brand-rail button:hover { color:var(--hw-white); background:var(--hw-maroon); border-color:var(--hw-maroon); }
.filter-box, .delivery-note { padding:24px; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:var(--hw-radius); }
.delivery-note p { margin:10px 0 0; color:var(--hw-muted); font-size:14px; }

.section-head { max-width:800px; margin:0 auto 44px; text-align:center; }
.section-head.left { margin-left:0; text-align:left; }
.section-head.compact { max-width:none; margin:0 0 32px; text-align:left; }
.section-head span { display:block; margin-bottom:10px; color:var(--hw-copper); font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; }
.section-head h2 { margin:0; font-family:var(--hw-serif); font-size:clamp(26px,3.5vw,38px); line-height:1.25; color:var(--hw-maroon); }

.product-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; }
.product-card { display:flex; flex-direction:column; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:var(--hw-radius); overflow:hidden; transition:transform .3s ease,box-shadow .3s ease; }
.product-card:hover { transform:translateY(-5px); box-shadow:var(--hw-shadow); }
.product-art { min-height:240px; position:relative; overflow:hidden; }
.product-art::after { content:""; position:absolute; inset:16px; border:1px solid rgba(255,255,255,.25); border-radius:4px; }
.pattern-botanical { background:radial-gradient(circle at 30% 30%,#4a6a3a 20%,transparent 22%),radial-gradient(circle at 70% 60%,#3c0c14 18%,transparent 20%),linear-gradient(135deg,#7a8c5a,#3c0c14); }
.pattern-stripe { background:repeating-linear-gradient(90deg,#3c0c14 0 18px,#c47b41 18px 22px,#fdfbf7 22px 40px); }
.pattern-geo { background:repeating-linear-gradient(45deg,#1f2c33 0 20px,#c47b41 20px 24px,#3c0c14 24px 44px); }
.pattern-floral { background:radial-gradient(circle at 25% 25%,#d95d2b 12%,transparent 14%),radial-gradient(circle at 75% 75%,#7a2230 12%,transparent 14%),linear-gradient(135deg,#f3d6c5,#c47b41); }
.pattern-kids { background:radial-gradient(circle at 50% 50%,#fdfbf7 8%,transparent 10%),linear-gradient(135deg,#d95d2b,#c47b41,#7a2230); background-size:40px 40px,100% 100%; }
.pattern-linen { background:repeating-linear-gradient(0deg,rgba(0,0,0,.08) 0 1px,transparent 1px 3px),repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 1px,transparent 1px 3px),linear-gradient(135deg,#d9c8a8,#a88a5e); }
.pattern-carpet { background:repeating-linear-gradient(45deg,#3c0c14 0 8px,#5c1a22 8px 16px); }
.pattern-grass { background:repeating-linear-gradient(180deg,#2f5a30 0 4px,#3e7a3e 4px 8px); }
.pattern-floor { background:repeating-linear-gradient(90deg,#8c5a36 0 80px,#a06a3e 80px 84px); }
.pattern-panel { background:repeating-linear-gradient(180deg,#2a2a2a 0 20px,#3a3a3a 20px 24px); }

.product-body { padding:24px; display:flex; flex:1; flex-direction:column; }
.product-meta { display:flex; justify-content:space-between; gap:12px; color:var(--hw-copper); font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; }
.product-card h3 { margin:12px 0 8px; font-family:var(--hw-serif); font-size:20px; line-height:1.3; color:var(--hw-maroon); }
.product-card p { min-height:48px; margin:0 0 20px; color:var(--hw-muted); font-size:14px; }
.price-row { margin-top:auto; display:flex; align-items:baseline; justify-content:space-between; gap:12px; }
.price { font-size:22px; font-weight:700; color:var(--hw-ink); }
.was { margin-right:6px; color:#a8999b; font-size:14px; text-decoration:line-through; }
.unit { color:var(--hw-muted); font-size:13px; font-weight:600; }
.product-actions { margin-top:20px; display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.product-actions button { min-height:44px; border-radius:4px; border:1px solid var(--hw-maroon); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; }
.add-roll { color:var(--hw-white); background:var(--hw-maroon); }
.add-roll:hover { background:var(--hw-orange); border-color:var(--hw-orange); }
.add-sample { color:var(--hw-maroon); background:var(--hw-white); }
.add-sample:hover { background:rgba(60,12,20,.04); }

.brands, .rooms, .checkout-guide, .contact, .samples { max-width:1400px; margin:0 auto; padding:80px 24px; }
.brand-rail { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; }
.brand-rail button { min-height:100px; margin:0; padding:20px; border-radius:var(--hw-radius); text-align:center; font-family:var(--hw-serif); }

.samples { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
.sample-visual { min-height:400px; position:relative; }
.sample { position:absolute; width:55%; height:68%; border-radius:var(--hw-radius); border:12px solid var(--hw-white); box-shadow:var(--hw-shadow); }
.sample-one { left:0; bottom:0; background:#8a4855; }
.sample-two { left:22%; top:4%; background:#324f5e; }
.sample-three { right:0; bottom:12%; background:#455247; }
.samples p { max-width:580px; margin:0 0 32px; color:var(--hw-muted); }

.room-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.room-card { min-height:320px; padding:32px; display:flex; flex-direction:column; justify-content:flex-end; color:var(--hw-white); border-radius:var(--hw-radius); overflow:hidden; position:relative; }
.room-card strong { font-family:var(--hw-serif); font-size:24px; line-height:1.3; z-index:2; }
.room-card span { margin-top:10px; color:rgba(255,255,255,.85); z-index:2; font-size:14px; }
.room-card::before { content:""; position:absolute; inset:0; background:linear-gradient(180deg,rgba(31,20,22,0) 30%,rgba(31,20,22,.85) 100%); z-index:1; }
.room-card.living { background-color:#3b4d40; }
.room-card.bedroom { background-color:#7d4d56; }
.room-card.office { background-color:#21333d; }

.gallery { padding:4rem 2rem; max-width:1400px; margin:0 auto; }
.gallery-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem; margin-top:2rem; }
.gallery-item { border-radius:var(--hw-radius); overflow:hidden; aspect-ratio:1/1; box-shadow:var(--hw-shadow); border:1px solid var(--hw-line); }
.gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform .6s cubic-bezier(.16,1,.3,1); }
.gallery-item:hover img { transform:scale(1.06); }

.checkout-guide { display:grid; grid-template-columns:.8fr 1.2fr; gap:48px; align-items:center; border-top:1px solid var(--hw-line); border-bottom:1px solid var(--hw-line); }
.steps { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.steps article { min-height:160px; padding:24px; display:flex; flex-direction:column; justify-content:space-between; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:var(--hw-radius); }
.steps strong { width:36px; height:36px; display:grid; place-items:center; color:var(--hw-white); background:var(--hw-maroon); border-radius:50%; font-family:var(--hw-serif); }

.contact { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
.contact p { max-width:620px; margin:16px 0 0; color:var(--hw-muted); }

.cart-drawer, .modal { position:fixed; inset:0; z-index:50; display:none; background:rgba(31,20,22,.5); backdrop-filter:blur(8px); }
.cart-drawer.open { display:block; }
.modal.open { display:grid; place-items:center; padding:24px; }
.cart-panel { width:min(460px,100%); height:100%; margin-left:auto; padding:32px; display:flex; flex-direction:column; background:var(--hw-paper); box-shadow:-10px 0 50px rgba(0,0,0,.15); }
.cart-head { display:flex; justify-content:space-between; align-items:center; }
.cart-head h2 { margin:0; font-family:var(--hw-serif); color:var(--hw-maroon); }
.cart-items { margin:24px 0; display:flex; flex-direction:column; gap:16px; overflow:auto; flex:1; }
.cart-item { display:grid; grid-template-columns:1fr auto; gap:16px; padding:16px; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:var(--hw-radius); }
.cart-item strong { display:block; color:var(--hw-maroon); }
.cart-item button { width:32px; height:32px; color:var(--hw-ink); background:transparent; border:1px solid var(--hw-line); border-radius:50%; }
.cart-empty { margin:auto; color:var(--hw-muted); text-align:center; font-style:italic; }
.cart-total { margin-top:auto; padding:24px 0; display:flex; justify-content:space-between; border-top:1px solid var(--hw-line); font-weight:700; font-size:18px; }

.checkout { width:min(560px,100%); max-height:90vh; overflow:auto; padding:32px; background:var(--hw-paper); border-radius:var(--hw-radius); box-shadow:var(--hw-shadow); }
.checkout label { display:block; margin-top:20px; color:var(--hw-maroon); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; }
.checkout input, .checkout select { width:100%; margin-top:8px; padding:14px; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:6px; }
.checkout-summary { margin:18px 0; padding:16px; background:var(--hw-white); border:1px solid var(--hw-line); border-radius:var(--hw-radius); color:var(--hw-muted); font-size:14px; }

.footer { padding:80px 24px 40px; color:rgba(253,251,247,.75); background:#1c060a; border-top:4px solid var(--hw-copper); }
.footer-grid { max-width:1400px; margin:0 auto; display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr; gap:40px; }
.footer-logo-img { height:90px; width:auto; background:var(--hw-cream); padding:10px 16px; border-radius:8px; }
.footer p { max-width:340px; color:rgba(253,251,247,.55); font-size:14px; }
.footer h3 { margin:0 0 20px; color:var(--hw-white); font-family:var(--hw-serif); font-size:16px; }
.footer a { display:block; margin:10px 0; color:rgba(253,251,247,.6); }
.footer a:hover { color:var(--hw-copper); }
.copyright { max-width:1400px; margin:50px auto 0; padding-top:24px; border-top:1px solid rgba(255,255,255,.08); text-align:center; font-size:13px; }

@media (max-width:960px) {
  .header-main { grid-template-columns:1fr; }
  .brand, .header-actions-wrapper { grid-column:1; justify-content:center; }
  .search { width:100%; max-width:320px; }
  .main-nav { gap:18px; font-size:11px; }
  .hero { grid-template-columns:1fr; min-height:auto; gap:32px; padding:40px 20px; }
  .promo-band, .product-grid, .brand-rail, .samples, .room-grid, .steps, .contact, .checkout-guide, .footer-grid { grid-template-columns:1fr !important; }
  .catalog-shell { grid-template-columns:1fr; }
  .filters { position:static; }
  .topbar { gap:14px; font-size:10px; }
}
@media (min-width:961px) and (max-width:1200px) {
  .product-grid, .brand-rail { grid-template-columns:repeat(2,1fr); }
}
`;
//#endregion
export { Index as component };
