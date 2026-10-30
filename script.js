/**
 * ==============================================================================
 * VYRO - PORTFOLIO CONFIGURATION & CLIENT ENGINE
 * ==============================================================================
 * All editable portfolio content is centralized here.
 * You can easily update your name, contact channels, and add or remove video ads.
 */

const CONFIG = {
  // Founder & Director details
  founderName: "Muhammad Abdul Rehman", // Used in About copy and branding
  agencyName: "Vyro",
  title: "AI Video Director & Commercial Creative Lead",
  tagline: "AI Video Ads That Make People Stop Scrolling.",

  // Contact Channels (UAE / Global WhatsApp & Email)
  contact: {
    whatsappNumber: "+92 3246414775", // Formatted display number
    whatsappRaw: "923246414775",       // Raw number for wa.me links without '+' or spaces
    email: "skhalil310@gmail.com",
    defaultQuoteMessage: "Hi Muhammad Abdul Rehman, I saw your portfolio and want to discuss a commercial video project or creative role."
  },

  // Portfolio Works List - UAE & Luxury Market Focus
  // 'file' points to the web-optimized compressed video (max 720p H.264 for instant streaming)
  // 'poster' is the crisp highlight thumbnail
  // 'aspect' can be '9:16' (vertical reel) or '16:9' (cinematic wide)
  // 'stack' showcases the AI engines and post-production software used
  works: [
    {
      id: "pizza-pro-launch",
      title: "Pizza Pro Commercial Launch",
      category: "Luxury F&B",
      stack: "Runway Gen-3 • 3D CGI • After Effects",
      file: "assets/web/pizza_final_web.mp4",
      poster: "assets/thumbnails/poster_pizza.jpg",
      aspect: "9:16",
      featured: true,
      description: "High-energy CGI commercial featuring hyper-realistic melted cheese simulation, 3D storefront takeover, and dynamic sound design."
    },
    {
      id: "time-interiors-villa",
      title: "Time Interiors Luxury Villa Tour",
      category: "Real Estate & Interiors",
      stack: "Kling AI • 3D Motion • DaVinci Studio",
      file: "assets/web/1027_web.mp4",
      poster: "assets/thumbnails/poster_1027.jpg",
      aspect: "9:16",
      featured: true,
      description: "Ultra-luxury architectural interior walkthrough for high-end properties, showcasing modern lighting and sweeping camera motions."
    },
    {
      id: "luxury-fashion-boutique",
      title: "Luxury Boutique Fashion Reel",
      category: "Retail & Fashion",
      stack: "Luma Dream Machine • Color Grade",
      file: "assets/web/1004_web.mp4",
      poster: "assets/thumbnails/poster_1004.jpg",
      aspect: "9:16",
      featured: false,
      description: "Elegantly paced vertical lookbook reel for an upscale boutique, engineered for high engagement on Instagram & TikTok."
    },
    {
      id: "pizza-pro-cinema",
      title: "Pizza Pro Fast Food Commercial",
      category: "Luxury F&B",
      stack: "Runway • Motion Graphics • Sound VFX",
      file: "assets/web/0719_web.mp4",
      poster: "assets/thumbnails/poster_0719.jpg",
      aspect: "16:9",
      featured: false,
      description: "Appetising fast-food promotional spot with kinetic motion graphics, sizzling textures, and bold branded CTA."
    },
    {
      id: "retail-grocery-brand",
      title: "Retail Grocery Brand Commercial",
      category: "Retail & Fashion",
      stack: "Kling AI • After Effects • Sound Foley",
      file: "assets/web/1026_web.mp4",
      poster: "assets/thumbnails/poster_1026.jpg",
      aspect: "9:16",
      featured: false,
      description: "Expressive commercial spot featuring a photorealistic host inside a vibrant retail environment."
    },
    {
      id: "gift-college-campus",
      title: "The GIFT College AI Promo",
      category: "AI Spokespersons & Promos",
      stack: "Digital Human • ElevenLabs • DaVinci",
      file: "assets/web/03_web.mp4",
      poster: "assets/thumbnails/poster_03.jpg",
      aspect: "9:16",
      featured: false,
      description: "Collegiate campaign combining photorealistic AI digital human animation and brand storytelling."
    },
    {
      id: "campus-ambassador",
      title: "Campus Ambassador AI Promo",
      category: "AI Spokespersons & Promos",
      stack: "AI Spokesperson • Premiere Pro",
      file: "assets/web/0818_web.mp4",
      poster: "assets/thumbnails/poster_0818.jpg",
      aspect: "9:16",
      featured: false,
      description: "Photorealistic AI spokesperson presenting educational benefits with natural micro-expressions and perfect audio synchronization."
    }
  ],

  // Services marquee items
  marqueeItems: [
    "Luxury Real Estate Visuals",
    "High-End F&B Commercials",
    "Retail Fashion Reels",
    "AI Brand Ambassadors",
    "Runway Gen-3 & Kling AI",
    "DaVinci Color Grading",
    "3D Motion Graphics & VFX"
  ]
};

/* ==============================================================================
   CORE APPLICATION LOGIC
   ============================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  applyConfig();
  renderMarquee();
  renderPortfolio();
  initNavigation();
  initLightbox();
  initQuoteForm();
  initScrollAnimations();
}

/**
 * 1. Apply Dynamic Configuration to the Page
 */
function applyConfig() {
  // Set Current Year in Footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Update Founder Name in About Section
  const founderNameEls = document.querySelectorAll(".founder-name-text");
  founderNameEls.forEach(el => {
    el.textContent = CONFIG.founderName;
  });

  // WhatsApp Default Link URLs
  const waUrl = `https://wa.me/${CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(CONFIG.contact.defaultQuoteMessage)}`;
  
  const heroQuoteBtn = document.getElementById("heroQuoteBtn");
  if (heroQuoteBtn) heroQuoteBtn.href = waUrl;

  const directWhatsappBtn = document.getElementById("directWhatsappBtn");
  if (directWhatsappBtn) directWhatsappBtn.href = waUrl;

  const floatingWhatsappBtn = document.getElementById("floatingWhatsappBtn");
  if (floatingWhatsappBtn) floatingWhatsappBtn.href = waUrl;

  const footerWhatsapp = document.getElementById("footerWhatsapp");
  if (footerWhatsapp) {
    footerWhatsapp.href = `https://wa.me/${CONFIG.contact.whatsappRaw}`;
    footerWhatsapp.textContent = `WhatsApp: ${CONFIG.contact.whatsappNumber}`;
  }

  // Email Links
  const mailtoUrl = `mailto:${CONFIG.contact.email}`;
  const directEmailBtn = document.getElementById("directEmailBtn");
  if (directEmailBtn) directEmailBtn.href = mailtoUrl;

  const footerEmail = document.getElementById("footerEmail");
  if (footerEmail) {
    footerEmail.href = mailtoUrl;
    footerEmail.textContent = `Email: ${CONFIG.contact.email}`;
  }

  // Display Text
  const displayWhatsapp = document.getElementById("displayWhatsapp");
  if (displayWhatsapp) displayWhatsapp.textContent = CONFIG.contact.whatsappNumber;

  const displayEmail = document.getElementById("displayEmail");
  if (displayEmail) displayEmail.textContent = CONFIG.contact.email;
}

/**
 * 2. Continuous Marquee Renderer
 */
function renderMarquee() {
  const marqueeContainer = document.getElementById("marqueeContent");
  if (!marqueeContainer) return;

  const items = CONFIG.marqueeItems;
  const buildItemsHtml = () => items.map(item => `
    <span class="marquee-item"><span class="marquee-dot">✦</span> ${item}</span>
  `).join("");

  // Duplicate items 4 times to guarantee a silky smooth, gap-free continuous CSS loop
  marqueeContainer.innerHTML = buildItemsHtml() + buildItemsHtml() + buildItemsHtml() + buildItemsHtml();
}

/**
 * 3. Portfolio Work Grid & Category Filters
 */
let currentCategory = "All";

function renderPortfolio() {
  const filterBar = document.getElementById("filterBar");
  const workGrid = document.getElementById("workGrid");
  if (!filterBar || !workGrid) return;

  // Extract unique categories
  const categories = ["All", ...new Set(CONFIG.works.map(w => w.category))];

  // Render Filter Chips
  filterBar.innerHTML = categories.map(cat => `
    <button 
      class="filter-chip ${cat === currentCategory ? 'active' : ''}" 
      data-category="${cat}"
      role="tab"
      aria-selected="${cat === currentCategory}">
      ${cat}
    </button>
  `).join("");

  // Attach Filter Listeners
  filterBar.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-category");
      if (selected === currentCategory) return;
      currentCategory = selected;

      filterBar.querySelectorAll(".filter-chip").forEach(b => {
        const isActive = b.getAttribute("data-category") === currentCategory;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive);
      });

      renderWorkItems();
    });
  });

  renderWorkItems();
}

function renderWorkItems() {
  const workGrid = document.getElementById("workGrid");
  if (!workGrid) return;

  const filtered = currentCategory === "All"
    ? CONFIG.works
    : CONFIG.works.filter(w => w.category === currentCategory);

  workGrid.innerHTML = filtered.map(work => `
    <article 
      class="work-card ${work.aspect === '16:9' ? 'landscape-card' : ''}" 
      data-id="${work.id}"
      tabindex="0"
      role="button"
      aria-label="Play ${work.title}">
      <div class="work-media-box">
        <img 
          src="${work.poster}" 
          alt="${work.title} thumbnail" 
          class="work-poster" 
          loading="eager">
        <video 
          class="work-video" 
          muted 
          loop 
          playsinline 
          preload="none"
          data-src="${work.file}">
        </video>
        <div class="play-overlay">
          <div class="play-circle">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
          </div>
        </div>
      </div>
      <div class="work-info">
        <span class="work-category-badge">${work.category}</span>
        <h3 class="work-card-title">${work.title}</h3>
        <span class="work-stack-pill">${work.stack || 'Runway Gen-3 • DaVinci Resolve'}</span>
      </div>
    </article>
  `).join("");

  attachWorkItemInteractions();
}

/**
 * Attach Hover & Intersection Video Playback + Lightbox Click
 */
function attachWorkItemInteractions() {
  const cards = document.querySelectorAll(".work-card");
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  cards.forEach(card => {
    const id = card.getAttribute("data-id");
    const work = CONFIG.works.find(w => w.id === id);
    if (!work) return;

    const video = card.querySelector(".work-video");

    // Click opens Lightbox Modal
    card.addEventListener("click", () => {
      openLightbox(work);
    });

    // Keyboard Access: Enter or Space
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(work);
      }
    });

    // Lazy load video src when near viewport
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!video.src && video.dataset.src) {
              video.src = video.dataset.src;
              video.load();
            }

            // On mobile touch devices, optionally play muted when centered in view
            if (isTouchDevice && entry.intersectionRatio >= 0.75) {
              video.play().then(() => {
                card.classList.add("is-playing");
              }).catch(() => {});
            } else if (isTouchDevice && entry.intersectionRatio < 0.4) {
              video.pause();
              card.classList.remove("is-playing");
            }
          }
        });
      }, { threshold: [0.1, 0.4, 0.75] });

      observer.observe(card);
    } else {
      if (!video.src && video.dataset.src) {
        video.src = video.dataset.src;
      }
    }

    // Desktop: Hover to preview video muted
    if (!isTouchDevice) {
      card.addEventListener("mouseenter", () => {
        if (!video.src && video.dataset.src) {
          video.src = video.dataset.src;
        }
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            card.classList.add("is-playing");
          }).catch(() => {});
        }
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        card.classList.remove("is-playing");
      });
    }
  });
}

/**
 * 4. Lightbox Modal Player
 */
let lastFocusedElement = null;

function initLightbox() {
  const modal = document.getElementById("videoLightbox");
  const closeBtn = document.getElementById("lightboxClose");
  const backdrop = document.getElementById("lightboxBackdrop");
  const video = document.getElementById("lightboxVideo");

  if (!modal || !closeBtn || !backdrop || !video) return;

  const closeLightbox = () => {
    video.pause();
    video.src = "";
    modal.classList.remove("is-open");
    modal.setAttribute("hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  closeBtn.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  // Close on Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function openLightbox(work) {
  const modal = document.getElementById("videoLightbox");
  const video = document.getElementById("lightboxVideo");
  const title = document.getElementById("lightboxTitle");
  const cat = document.getElementById("lightboxCategory");
  const stack = document.getElementById("lightboxStack");
  const desc = document.getElementById("lightboxDescription");

  if (!modal || !video) return;

  lastFocusedElement = document.activeElement;

  title.textContent = work.title;
  cat.textContent = work.category;
  if (stack) stack.textContent = work.stack || "AI + DaVinci Resolve";
  desc.textContent = work.description || "";

  video.src = work.file;
  video.poster = work.poster;
  video.currentTime = 0;

  modal.removeAttribute("hidden");
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });

  document.body.style.overflow = "hidden";

  video.play().catch(() => {});

  const closeBtn = document.getElementById("lightboxClose");
  if (closeBtn) closeBtn.focus();
}

/**
 * 5. Navigation & Mobile Menu
 */
function initNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("is-open");
      navMenu.classList.toggle("is-open", !isOpen);
      navToggle.setAttribute("aria-expanded", !isOpen);
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active Link Highlighting based on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop;
      const sectionId = sec.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
        });
      }
    });
  }, { passive: true });
}

/**
 * 6. Contact / Quote Form (Redirects to WhatsApp with pre-filled message)
 */
function initQuoteForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  const nameInput = document.getElementById("formName");
  const businessInput = document.getElementById("formBusiness");
  const needSelect = document.getElementById("formNeed");
  const notesInput = document.getElementById("formNotes");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, "formNameError");
      isValid = false;
    } else {
      clearError(nameInput, "formNameError");
    }

    // Validate Business
    if (!businessInput.value.trim()) {
      showError(businessInput, "formBusinessError");
      isValid = false;
    } else {
      clearError(businessInput, "formBusinessError");
    }

    // Validate Need
    if (!needSelect.value) {
      showError(needSelect, "formNeedError");
      isValid = false;
    } else {
      clearError(needSelect, "formNeedError");
    }

    if (!isValid) return;

    // Build the formatted WhatsApp message for Dubai & international inquiries
    const msg = [
      `*New Inquiry for Muhammad Abdul Rehman (Vyro)* 🇦🇪🚀`,
      ``,
      `*From:* ${nameInput.value.trim()}`,
      `*Company / Agency:* ${businessInput.value.trim()}`,
      `*Project / Role:* ${needSelect.value}`,
      notesInput.value.trim() ? `*Details & Scope:* ${notesInput.value.trim()}` : null,
      ``,
      `Sent via Vyro Creative Portfolio.`
    ].filter(line => line !== null).join("\n");

    const waLink = `https://wa.me/${CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp in a new tab
    window.open(waLink, "_blank", "noopener,noreferrer");

    // Clear form and display confirmation styling
    form.reset();
  });

  // Clear errors on input
  [nameInput, businessInput, needSelect].forEach(input => {
    if (!input) return;
    input.addEventListener("input", () => {
      const errorId = input.id + "Error";
      clearError(input, errorId);
    });
  });
}

function showError(inputEl, errorId) {
  const group = inputEl.closest(".form-group");
  if (group) group.classList.add("has-error");
}

function clearError(inputEl, errorId) {
  const group = inputEl.closest(".form-group");
  if (group) group.classList.remove("has-error");
}

/**
 * 7. Scroll Reveal Animations
 */
function initScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const elementsToReveal = document.querySelectorAll(
    ".service-card, .tech-card, .process-card, .why-card, .about-image-card, .about-content-column, .contact-card-box, .quote-form"
  );

  elementsToReveal.forEach(el => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.15
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));
  } else {
    elementsToReveal.forEach(el => el.classList.add("is-visible"));
  }
}
