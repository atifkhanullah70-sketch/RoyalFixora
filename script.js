/* =========================================
   FIXORA JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

const WHATSAPP_NUMBER = "923481969273";


/* =========================================
   SVG ICON LIBRARY
========================================= */

const ICONS = {

    plumbing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h4a2 2 0 0 1 2 2v4"/><circle cx="18" cy="8" r="2"/><rect x="4" y="14" width="8" height="6" rx="1"/><path d="M8 10V4h4"/></svg>`,

    electrical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,

    cleaning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6l1 8H8l1-8z"/><path d="M7 11h10l1 9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1l1-9z"/></svg>`,

    painting: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3H8a2 2 0 0 0-2 2v3h11a2 2 0 0 1 2 2v3"/><path d="M6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/><path d="M12 14v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5"/></svg>`,

    "water-tank": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s-5 6-5 10a5 5 0 0 0 10 0c0-4-5-10-5-10z"/></svg>`,

    moving: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 4v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>`,

    gardening: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12c0-5 4-8 8-8 0 5-4 8-8 8z"/><path d="M12 12c0-5-4-8-8-8 0 5 4 8 8 8z"/></svg>`,

    waterproof: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12 12 3l9 9"/><path d="M5 10v10h14V10"/><path d="M9 20v-5h6v5"/></svg>`,

    locksmith: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`,

    furniture: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M2 11a2 2 0 0 1 2 2v4h16v-4a2 2 0 0 1 2-2"/><path d="M4 17v3"/><path d="M20 17v3"/></svg>`,

    handyman: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m14 6 4-4 4 4-4 4z"/><path d="m18 10-9 9"/><path d="M6 15 3 12l4-4 3 3"/><path d="m3 21 4-4"/></svg>`,

    carpentry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h14l4 4v8H3z"/><path d="M3 14h18"/><path d="M7 6v8"/></svg>`,

    "deep-clean": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M5 8h14l-2 12H7z"/><path d="M9 12h6"/></svg>`,

    /* ---- UI ICONS ---- */

    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,

    "map-pin": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,

    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>`,

    clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>`,

    "user-check": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 14-5.3"/><path d="m16 17 2 2 4-4"/></svg>`,

    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>`,

    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 3l9 7"/><path d="M5 9v11h14V9"/><path d="M10 20v-6h4v6"/></svg>`,

    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,

    zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,

    message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/></svg>`,

    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,

    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`,

    wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2 2 0 1 1-2.8-2.8z"/><path d="M14.7 6.3 17 4l3 3-2.3 2.3"/></svg>`,

    "user-plus": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 12-6.9"/><path d="M18 14v6"/><path d="M15 17h6"/></svg>`,

    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 4a4 4 0 0 1 0 8"/><path d="M22 21a6 6 0 0 0-4-5.6"/></svg>`,

    "file-text": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>`,

    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0 11.9 11.9 0 0 0 1.7 17.7L.1 24l6.5-1.7A11.9 11.9 0 0 0 12 24h.1A11.9 11.9 0 0 0 24 12.1a11.7 11.7 0 0 0-3.5-8.6zM12 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.2-.4a9.8 9.8 0 0 1 15.3-12 9.7 9.7 0 0 1 2.9 6.9 9.9 9.9 0 0 1-9.6 9.9zm5.5-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0a8.1 8.1 0 0 1-4-3.5c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 5 6.4 6.4 0 0 0 3.9.7 3.3 3.3 0 0 0 2.2-1.6 2.7 2.7 0 0 0 .2-1.6c-.1-.2-.3-.3-.6-.4z"/></svg>`

};


/* =========================================
   SERVICES
========================================= */

const services = [

    { name: "Plumbing",            icon: "plumbing",     description: "Pipes, taps, leaks and plumbing repairs." },
    { name: "Electrical",          icon: "electrical",   description: "Electrical installation and repair services." },
    { name: "Home Cleaning",       icon: "cleaning",     description: "Professional home cleaning services." },
    { name: "Painting",            icon: "painting",     description: "Interior and exterior painting services." },
    { name: "Water Tank Cleaning", icon: "water-tank",   description: "Professional water tank cleaning." },
    { name: "Moving & Shifting",   icon: "moving",       description: "Moving and household shifting assistance." },
    { name: "Gardening",           icon: "gardening",    description: "Garden maintenance and landscaping." },
    { name: "Waterproofing",       icon: "waterproof",   description: "Roof and building waterproofing." },
    { name: "Locksmith",           icon: "locksmith",    description: "Locks, keys and emergency locksmith services." },
    { name: "Furniture Assembly",  icon: "furniture",    description: "Furniture assembly and installation." },
    { name: "General Handyman",    icon: "handyman",     description: "Everyday household repairs and maintenance." },
    { name: "Carpentry",           icon: "carpentry",    description: "Custom woodwork and carpentry services." },
    { name: "Deep Cleaning",       icon: "deep-clean",   description: "Detailed deep cleaning for your property." }

];


/* =========================================
   DOM READY
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    renderServices();
    populateServiceSelects();
    setupMenu();
    setupForms();
    setupBookingDate();
    setupStats();
    updateYear();
    hydrateIcons();

});


/* =========================================
   ICON HYDRATION
========================================= */

function hydrateIcons() {

    document.querySelectorAll("[data-icon]").forEach(el => {

        const key = el.getAttribute("data-icon");

        if (ICONS[key]) {

            el.innerHTML = ICONS[key];

        }

    });

}


/* =========================================
   RENDER SERVICES
========================================= */

function renderServices(filter = "") {

    const grid = document.getElementById("servicesGrid");
    const noResults = document.getElementById("noServices");

    if (!grid) return;

    const search = filter.trim().toLowerCase();

    const filtered = services.filter(service => {

        return (
            service.name.toLowerCase().includes(search) ||
            service.description.toLowerCase().includes(search)
        );

    });

    grid.innerHTML = "";

    filtered.forEach(service => {

        const card = document.createElement("div");

        card.className = "service-card";
        card.setAttribute("itemscope", "");
        card.setAttribute("itemtype", "https://schema.org/Service");
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `Book ${service.name} service`);

        card.innerHTML = `
            <div class="service-icon" aria-hidden="true">
                ${ICONS[service.icon] || ""}
            </div>
            <h3 itemprop="name">${service.name}</h3>
            <p itemprop="description">${service.description}</p>
        `;

        card.addEventListener("click", function () {
            openBookingModal(service.name);
        });

        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openBookingModal(service.name);
            }
        });

        grid.appendChild(card);

    });

    if (noResults) {
        noResults.style.display = filtered.length === 0 ? "block" : "none";
    }

}


/* =========================================
   FILTER SERVICES
========================================= */

function filterServices() {

    const input = document.getElementById("serviceSearch");

    if (!input) return;

    renderServices(input.value);

}


/* =========================================
   HERO SEARCH
========================================= */

function searchServices() {

    const serviceInput = document.getElementById("heroServiceSearch");

    if (!serviceInput) return;

    const search = serviceInput.value.trim();

    if (!search) {
        showToast("Please enter the service you need.");
        return;
    }

    const match = services.find(service => {

        const serviceName = service.name.toLowerCase();
        const userSearch = search.toLowerCase();

        return (
            serviceName.includes(userSearch) ||
            userSearch.includes(serviceName.split(" ")[0])
        );

    });

    if (match) {

        document.getElementById("serviceSearch").value = match.name;
        renderServices(match.name);

        document.getElementById("services").scrollIntoView({ behavior: "smooth" });

        showToast(`${match.name} service found.`);

    } else {

        renderServices(search);

        document.getElementById("services").scrollIntoView({ behavior: "smooth" });

        showToast("No matching service found.");

    }

}


/* =========================================
   QUICK SEARCH
========================================= */

function quickSearch(serviceName) {

    const searchInput = document.getElementById("serviceSearch");

    if (searchInput) searchInput.value = serviceName;

    renderServices(serviceName);

    document.getElementById("services").scrollIntoView({ behavior: "smooth" });

}


/* =========================================
   MENU
========================================= */

function setupMenu() {

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });

    });

}


/* =========================================
   POPULATE SELECTS
========================================= */

function populateServiceSelects() {

    const bookingSelect = document.getElementById("bookingService");
    const providerSelect = document.getElementById("providerCategory");

    services.forEach(service => {

        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = service.name;

        if (bookingSelect) bookingSelect.appendChild(option.cloneNode(true));
        if (providerSelect) providerSelect.appendChild(option.cloneNode(true));

    });

}


/* =========================================
   BOOKING MODAL
========================================= */

function openBookingModal(service = "") {

    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    if (service) {

        const select = document.getElementById("bookingService");
        if (select) select.value = service;

    }

}

function closeBookingModal() {

    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "";

}


/* =========================================
   PROFESSIONAL BOOKING
========================================= */

function bookProfessional(professional, service) {

    openBookingModal(service);

    showToast(`Booking ${professional} for ${service}`);

}


/* =========================================
   PROVIDER MODAL
========================================= */

function openProviderModal() {

    const modal = document.getElementById("providerModal");

    if (!modal) return;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

}

function closeProviderModal() {

    const modal = document.getElementById("providerModal");

    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "";

}


/* =========================================
   BOOKING DATE
========================================= */

function setupBookingDate() {

    const dateInput = document.getElementById("bookingDate");

    if (!dateInput) return;

    const today = new Date().toISOString().split("T")[0];

    dateInput.min = today;

}


/* =========================================
   FORM SETUP
========================================= */

function setupForms() {

    const bookingForm = document.getElementById("bookingForm");
    const providerForm = document.getElementById("providerForm");
    const contactForm = document.getElementById("contactForm");

    if (bookingForm) bookingForm.addEventListener("submit", handleBooking);
    if (providerForm) providerForm.addEventListener("submit", handleProvider);
    if (contactForm) contactForm.addEventListener("submit", handleContact);

}


/* =========================================
   BOOKING SUBMISSION
========================================= */

function handleBooking(event) {

    event.preventDefault();

    const service  = document.getElementById("bookingService").value;
    const name     = document.getElementById("bookingName").value.trim();
    const phone    = document.getElementById("bookingPhone").value.trim();
    const email    = document.getElementById("bookingEmail").value.trim();
    const location = document.getElementById("bookingLocation").value.trim();
    const address  = document.getElementById("bookingAddress").value.trim();
    const date     = document.getElementById("bookingDate").value;
    const time     = document.getElementById("bookingTime").value;
    const details  = document.getElementById("bookingDetails").value.trim();

    if (!service || !name || !phone || !email || !location || !address || !date || !time) {
        showToast("Please complete all required fields.");
        return;
    }

    const selectedDate = new Date(date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        showToast("Please select a future date.");
        return;
    }

    const message = `

Hello Fixora!

I would like to book a home service.

*Service:* ${service}

*Customer Name:* ${name}

*Phone:* ${phone}

*Email:* ${email}

*City / Area:* ${location}

*Address:* ${address}

*Preferred Date:* ${date}

*Preferred Time:* ${time}

*Details:*
${details || "No additional details provided."}

Thank you.

`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    showToast("Opening WhatsApp...");

    document.getElementById("bookingForm").reset();

    setTimeout(() => {
        closeBookingModal();
    }, 800);

}


/* =========================================
   PROVIDER FORM
========================================= */

function handleProvider(event) {

    event.preventDefault();

    const name = document.getElementById("providerName").value.trim();

    showToast(`Thanks ${name}! Your professional registration was received.`);

    event.target.reset();

    setTimeout(() => {
        closeProviderModal();
    }, 1200);

}


/* =========================================
   CONTACT FORM
========================================= */

function handleContact(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    showToast(`Thanks ${name}! Your message has been received.`);

    event.target.reset();

}


/* =========================================
   TOAST
========================================= */

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}


/* =========================================
   STATS ANIMATION
========================================= */

function setupStats() {

    const stats = document.querySelectorAll(".stat strong");

    if (!stats.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateNumber(
                entry.target,
                parseFloat(entry.target.dataset.target)
            );

            observer.unobserve(entry.target);

        });

    }, { threshold: 0.4 });

    stats.forEach(stat => observer.observe(stat));

}

function animateNumber(element, target) {

    const duration = 1500;
    const start = performance.now();

    function update(currentTime) {

        const progress = Math.min((currentTime - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;

        if (target === 4.8) {

            element.textContent = value.toFixed(1);

        } else {

            element.textContent = Math.floor(value).toLocaleString();

            if (progress === 1) {
                element.textContent = target.toLocaleString() + "+";
            }

        }

        if (progress < 1) requestAnimationFrame(update);

    }

    requestAnimationFrame(update);

}


/* =========================================
   YEAR
========================================= */

function updateYear() {

    const year = document.getElementById("currentYear");

    if (year) year.textContent = new Date().getFullYear();

}


/* =========================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    const bookingModal  = document.getElementById("bookingModal");
    const providerModal = document.getElementById("providerModal");

    if (event.target === bookingModal)  closeBookingModal();
    if (event.target === providerModal) closeProviderModal();

});


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") return;

    closeBookingModal();
    closeProviderModal();

});