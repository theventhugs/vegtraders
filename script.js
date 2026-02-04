/* =========================================
   1. ADMIN AREA - EDIT PRODUCTS HERE
   ========================================= */
const allProducts = [
  {
    name: "Enzo All In One Detergent Powder 5 kg",
    weight: "5 Kg",
    price: 600,
    about: [
      "<b>All In One Cleaning Power:</b> This is the core promise of the product. It's formulated to provide a complete laundry solution, effectively handling multiple aspects of washing without the need for separate additives.",
      "<b>Superior Stain Removal:</b> Enzo All In One Detergent Powder is specifically formulated to tackle tough stains on various fabrics, including dirt, grease, oil, and food residues, ensuring a deep and thorough clean. Some sources mention a triple enzyme stain blaster formula for a spotless wash.",
      "<b>Fabric Care:</b> Despite its strong stain-fighting abilities, the detergent is gentle on fabric fibers. It helps preserve fabric quality and color, preventing dullness and keeping clothes looking new even after repeated washes.",
      "<b>Long-Lasting Freshness:</b> Leaves clothes with a pleasant, lingering fragrance, ensuring they smell fresh and clean after every wash.",
      "<b>Works in All Water Types:</b> Formulated to deliver effective cleaning performance in both hard and soft water, ensuring consistent results regardless of water hardness.",
      "<b>Easy Dissolution:</b> Designed to dissolve easily and completely in water, allowing quick penetration into fabric fibers and preventing undissolved residue or white patches on clothes.",
      "<b>Versatile Usage:</b> Suitable for both handwashing and machine washing, including top-load and front-load washing machines.",
      "<b>Economical 5 kg Pack:</b> Ideal for large families or bulk buyers, offering excellent value for money by reducing cost per kilogram and purchase frequency.",
      "<b>Trusted Brand:</b> Enzo is a brand under Reliance Consumer Brands, part of Reliance Retail, ensuring trust, quality, and wide availability through JioMart and Reliance retail stores."
    ],
    details: {
      "Color": "White",
      "Pack Size": "5kg",
      "Usage": "Washing Clothes",
      "Brand": "Enzo",
      "Pack Type": "Packet"
    },
    images: ["images/product01_5kg(1).jpg", "images/product01_5kg(2).jpg", "images/product01_5kg(3).jpg", "images/product01_5kg(4).jpg", "images/product01_5kg(5).jpg", "images/product01_5kg(6).jpg", "images/product01_5kg(7).jpg", "images/product01_5kg(8).jpg"] 
  },
  {
    name: "Enzo All In One Detergent Powder 1 kg",
    weight: "1 Kg",
    price: 120,
    about: [
        "<b>All In One Cleaning Solution:</b> Designed to handle multiple aspects of laundry cleaning effectively, eliminating the need for additional additives.",
        "<b>Superior Stain Removal:</b> Specially formulated to remove stubborn stains such as dirt, grease, oil, and food residues, delivering a deep and thorough clean on various fabrics.",
        "<b>Gentle on Fabric:</b> Despite its stain-fighting strength, the detergent is gentle on fabric fibers, helping preserve fabric quality and color while keeping clothes bright and preventing dullness even after repeated washes.",
        "<b>Long-Lasting Freshness:</b> Leaves clothes with a pleasant, lingering fragrance so they smell fresh and clean after every wash.",
        "<b>Works in All Water Types:</b> Formulated to perform effectively in both hard and soft water, ensuring consistent cleaning results regardless of water hardness.",
        "<b>Easy Dissolution:</b> Dissolves easily in water, allowing quick penetration into fabric fibers and preventing residue on clothes or inside the washing machine.",
        "<b>Versatile Usage:</b> Suitable for both handwashing and machine washing. While specialized Matic variants exist for certain machines, this detergent supports general machine use.",
        "<b>How to Use – Hand Wash:</b> Add the recommended amount (e.g., 2 scoops) to a bucket of water, soak clothes, wash thoroughly, and rinse.",
        "<b>How to Use – Machine Wash:</b> Add the recommended amount (e.g., 3 scoops for a full load) to the washing machine’s detergent dispenser.",
        "<b>Tough Stain Care:</b> For very stubborn stains, pre-soak the affected area with a paste made from the detergent powder and a little water before the main wash."
    ],
    details: {
      "Color": "White",
      "Pack Size": "1kg",
      "Usage": "Washing Clothes",
      "Brand": "Enzo",
      "Pack Type": "Packet"
    },
    images: ["images/product01_1kg(1).jpg", "images/product01_1kg(2).jpg", "images/product01_1kg(3).jpg", "images/product01_1kg(4).jpg"]
  },
  {
    name: "Enzo All-in-One Detergent Powder 90 g",
    weight: "90gm",
    price: 10,
    about: [
      "<b>All In One Cleaning Solution:</b> Designed to handle multiple aspects of laundry cleaning effectively, eliminating the need for additional additives.",
      "<b>Superior Stain Removal:</b> Specially formulated to remove stubborn stains such as dirt, grease, oil, and food residues, delivering a deep and thorough clean on various fabrics.",
      "<b>Gentle on Fabric:</b> Despite its stain-fighting strength, the detergent is gentle on fabric fibers, helping preserve fabric quality and color while keeping clothes bright and preventing dullness even after repeated washes.",
      "<b>Long-Lasting Freshness:</b> Leaves clothes with a pleasant, lingering fragrance so they smell fresh and clean after every wash.",
      "<b>Works in All Water Types:</b> Formulated to perform effectively in both hard and soft water, ensuring consistent cleaning results regardless of water hardness.",
      "<b>Easy Dissolution:</b> Dissolves easily in water, allowing quick penetration into fabric fibers and preventing residue on clothes or inside the washing machine.",
      "<b>Versatile Usage:</b> Suitable for both handwashing and machine washing. While specialized Matic variants exist for certain machines, this detergent supports general machine use.",
      "<b>How to Use – Hand Wash:</b> Add the recommended amount (e.g., 2 scoops) to a bucket of water, soak clothes, wash thoroughly, and rinse.",
      "<b>How to Use – Machine Wash:</b> Add the recommended amount (e.g., 3 scoops for a full load) to the washing machine’s detergent dispenser.",
      "<b>Tough Stain Care:</b> For very stubborn stains, pre-soak the affected area with a paste made from the detergent powder and a little water before the main wash."
    ],
    details: {
      "Color": "White",
      "Pack Size": "90g",
      "Usage": "Washing Clothes",
      "Brand": "Enzo",
      "Pack Type": "Packet"
    },
    images: ["images/product01_90gm(1).jpg", "images/product01_90gm(2).jpg", "images/product01_90gm(3).jpg"]
  },

// -----------------------------------------------------------------------------------------------------------------------------

  // PRODUCT 02
  {
    name: "Glimmer Bright Lavender Soap 100 g (pack of 5)",
    weight: "100 gm",
    price: 90,
    about: [
      "<b>Calming Lavender Fragrance:</b> Enriched with a soothing lavender scent that leaves the skin feeling relaxed and pleasantly fragrant after every wash.",
      "<b>Gentle Daily Cleansing:</b> Cleanses the skin effectively while remaining mild and suitable for everyday use.",
      "<b>Soft & Smooth Skin:</b> Helps keep the skin soft, smooth, and refreshed with regular use.",
      "<b>Suitable for Normal Skin:</b> Formulated for normal skin type, offering balanced cleansing and gentle care.",
      "<b>Pack of 5 for Regular Use:</b> Supplied as a value pack of five 100 g soaps, ideal for family use and long-term convenience."
    ],
    details: {
      "Packaging Size": "100 gm × 5 (500 gm)",
      "Purpose": "For Regular Use",
      "Skin Type": "Normal Skin",
      "Brand": "GLIMMER",
      "Shelf Life": "24 months",
      "Fragrance": "Neutral",
      "Ideal For": "Unisex"
    },
    images: ["images/product02_100gm_BrightLavender(1).jpg", "images/product02_100gm_BrightLavender(2).jpg"]
  },
  {
    name: "Glimmer Floral Burst Soap 100 g (pack of 5)",
    weight: "100 gm",
    price: 90,
    about: [
      "<b>Refreshing Floral Fragrance:</b> Infused with a pleasant floral burst aroma that leaves the skin feeling fresh and lightly scented after every wash.",
      "<b>Gentle Daily Cleansing:</b> Effectively cleanses the skin while being mild enough for regular, everyday use.",
      "<b>Soft & Smooth Skin:</b> Helps maintain soft, smooth, and refreshed skin with consistent use.",
      "<b>Suitable for Normal Skin:</b> Specially formulated for normal skin type, providing balanced care and cleansing.",
      "<b>Pack of 5 for Regular Use:</b> Comes in a convenient value pack of five 100 g soaps, ideal for family use and long-term needs."
    ],
    details: {
      "Packaging Size": "100 gm × 5 (500 gm)",
      "Purpose": "For Regular Use",
      "Skin Type": "Normal Skin",
      "Brand": "GLIMMER",
      "Shelf Life": "24 months",
      "Fragrance": "Neutral",
      "Ideal For": "Unisex"
    },
    images: ["images/product02_100gm_FloralBurst(1).jpg", "images/product02_100gm_FloralBurst(2).jpg"]
  },
  {
    name: "Glimmer Fresh Jasmine Soap 100 g (pack of 5)",
    weight: "100 gm",
    price: 90,
    about: [
      "<b>Soothing Jasmine Fragrance:</b> Enriched with a gentle jasmine scent that leaves the skin feeling fresh and pleasantly fragrant after every wash.",
      "<b>Gentle Daily Cleansing:</b> Cleanses the skin effectively while remaining mild enough for everyday use.",
      "<b>Soft & Smooth Feel:</b> Helps keep skin soft, smooth, and refreshed with regular use.",
      "<b>Suitable for Normal Skin:</b> Formulated for normal skin type, offering balanced cleansing and care.",
      "<b>Pack of 5 for Regular Use:</b> Supplied as a value pack of five 100 g soaps, ideal for family use and long-term convenience."
    ],
    details: {
      "Packaging Size": "100 gm × 5 (500 gm)",
      "Purpose": "For Regular Use",
      "Skin Type": "Normal Skin",
      "Brand": "GLIMMER",
      "Shelf Life": "24 months",
      "Fragrance": "Neutral",
      "Ideal For": "Unisex"
    },
    images: ["images/product02_100gm_FreshJasmine(1).jpg", "images/product02_100gm_FreshJasmine(2).jpg"]
  },
  {
    name: "Glimmer Fresh Rose Soap 100 g (pack of 5)",
    weight: "100 gm",
    price: 90,
    about: [
      "<b>Refreshing Rose Fragrance:</b> Infused with a pleasant rose scent that leaves your skin feeling fresh and fragrant after every wash.",
      "<b>Gentle Cleansing:</b> Formulated to cleanse the skin effectively without stripping away natural moisture, making it suitable for daily use.",
      "<b>Soft & Smooth Skin:</b> Helps maintain soft, smooth, and healthy-looking skin with regular use.",
      "<b>Suitable for Normal Skin:</b> Designed for normal skin type, providing balanced cleansing and care.",
      "<b>Pack of 5 for Regular Use:</b> Comes in a value pack of five 100 g soaps, ideal for family use and long-term convenience."
    ],
    details: {
      "Packaging Size": "100 gm × 5 (500 gm)",
      "Purpose": "For Regular Use",
      "Skin Type": "Normal Skin",
      "Brand": "GLIMMER",
      "Shelf Life": "24 months",
      "Fragrance": "Neutral",
      "Ideal For": "Unisex"
    },
    images: ["images/product02_100gm_FreshRose(1).jpg", "images/product02_100gm_FreshRose(2).jpg"]
  },

// -----------------------------------------------------------------------------------------------------------------------------

// Product 03
  {
    name: "Home Guard 10X Power Toilet Cleaner 200 ml | 500 ml",
    weight: "200 ml | 500 ml",
    price: 10,
    about: [
      "<b>Powerful 10X Cleaning Action:</b> Formulated with a concentrated cleaning solution that effectively removes tough stains, buildup, limescale, and dirt from toilet surfaces for a deep and powerful clean.",  
      "<b>Removes Germs and Bacteria:</b> Designed to eliminate harmful germs and bacteria, ensuring a hygienic and safer toilet bowl with every use.",  
      "<b>Fresh Fragrance:</b> Leaves behind a pleasant, fresh scent that helps neutralize bathroom odors after cleaning.",  
      "<b>Works on Hard Water Marks:</b> Suitable for use in areas with hard water; helps reduce marks and residues caused by hard water deposits.",  
      "<b>Easy to Use:</b> Simply pour along the sides of the toilet bowl, allow the formula to act, and scrub for best results on stubborn stains.",  
      "<b>Available in Multiple Sizes:</b> Offered in both 200 ml and 500 ml pack sizes to suit your usage needs and cleaning frequency.",
    ],
    details: {
      "Product": "Home Guard 10X Power Toilet Cleaner",
      "Pack Sizes Available": "200ml, 500ml",
      "Net Quantity 200ml": "200 ml",
      "Net Quantity 500ml": "500 ml",
      "Usage": "Toilet Bowl Cleaning",
      "Fragrance": "Fresh",
      "Cleans": "Tough Stains, Limescale, Dirt, Germs",
      "Suitable Water Types": "Hard & Soft Water",
      "Application": "Pour & Clean Toilet Bowl"
    },
    images: ["images/product03_200ml(1).png", "images/product03_200ml(2).png"]
  },

// -----------------------------------------------------------------------------------------------------------------------------

// PRODUCT 04
  {
    name: "Bum Suit Baby Pants New Born (pack of 40+2)",
    weight: "New Born (NB)",
    price: 10,
    about: [
      "<b>Comfortable Baby Pants:</b> Designed to provide a soft and comfortable fit for newborn babies, ensuring ease of movement throughout the day.",
      "<b>Soft & Gentle Material:</b> Made with skin-friendly materials that are gentle on a newborn’s delicate skin.",
      "<b>Leak Protection:</b> Features an absorbent core that helps keep the baby dry and comfortable for longer durations.",
      "<b>Easy to Wear:</b> Pant-style design makes it easy to put on and remove, helping parents during quick diaper changes.",
      "<b>Value Pack:</b> Comes with a total of 42 baby pants (40 + 2 free), suitable for regular daily use.",
    ],
    details: {
      "Product Type": "Baby Pants Diaper",
      "Brand": "Bum Suit",
      "Size": "New Born",
      "Pack Size": "40 + 2 Pants",
      "Total Quantity": "42 Pants",
      "Usage": "Baby Diapering",
      "Material": "Soft Absorbent Material",
      "Ideal For": "New Born Babies"
    },
    images: ["images/product04_NB_42(1).png", "images/product04_NB_42(2).png", "images/product04_NB_42(3).png"]
  },
  {
    name: "Bum Suit Baby Pants Small (pack of 40) | (pack of 78)",
    weight: "Small (S)",
    price: 10,
    about: [
      "<b>Premium Comfort & Fit:</b> Designed with a soft, breathable material that’s gentle on your baby’s delicate skin and ensures comfortable all-day wear.",  
      "<b>Active Leak Protection:</b> Features advanced 3D Leak Guard and elastic waistband for a snug fit that helps prevent leaks during movement and play.",  
      "<b>Up to 12-Hour Absorption:</b> Gel Magnet Technology locks in wetness, providing long-lasting dryness and comfort throughout day and night.",  
      "<b>Mosquito Protection Technology:</b> Integrated natural mosquito-repellent feature offers added protection while your baby plays or sleeps.",  
      "<b>Suitable for Small Babies:</b> Sized Small (S) for babies approximately 4–8 kg, perfect for growing infants with active movements.",  
      "<b>Available in Multiple Pack Sizes:</b> Offered in both 40-count and 78-count packs to meet your daily baby care needs and family usage.",
    ],
    details: {
      "Product": "Bumsuit Baby Pants Small (S)",
      "Pack Sizes Available": "40 Count, 78 Count",
      "Size": "Small (S)",
      "Compatible Baby Weight": "4 kg – 8 kg",
      "Material": "Soft Breathable Fabric with Elastic Waistband",
      "Leak Protection": "3D Leak Guard, Elastic Waistband",
      "Absorption Duration": "Up to 12 Hours",
      "Mosquito Protection": "Yes (Natural Mosquito-Repellent Technology)",
      "Usage": "Baby Diapering",
      "Ideal For": "Small Babies"
    },
    images: ["images/product04_S_40(1).jpg", "images/product04_S_40(2).jpg", "images/product04_S_40(3).jpg", "images/product04_S_40(4).jpg", "images/product04_S_40(5).jpg", "images/product04_S_40(6).jpg", "images/product04_S_40(7).jpg", "images/product04_S_40(8).jpg", "images/product04_S_40(9).jpg"]
  },
  {
    name: "Bum Suit Baby Pants Large (pack of 30)",
    weight: "Large (L)",
    price: 10,
    about: [
      "<b>Comfortable All-Day Wear:</b> Designed with a soft, breathable material that’s gentle on your baby’s delicate skin and provides comfortable movement throughout the day.",
      "<b>Advanced Leak Protection:</b> Features an absorbent core and elastic waistband that help prevent leaks and keep your baby dry for longer durations.",
      "<b>Up to 12-Hour Absorption:</b> High-performance absorption technology locks in wetness, offering long-lasting dryness and comfort during both day and night.",
      "<b>Easy to Wear & Remove:</b> Pant-style design allows for quick and hassle-free changing, making diapering easier for parents.",
      "<b>Value Pack – 30 Pants:</b> Comes in a pack of 30 diaper pants, ideal for regular daily use and family needs.",
    ],
    details: {
      "Product": "Bum Suit Baby Pants Large",
      "Pack Size": "30 Pants",
      "Size": "Large",
      "Compatible Baby Weight": "Approx. 9–14 kg",
      "Material": "Soft Breathable Fabric with Elastic Waistband",
      "Absorption Duration": "Up to 12 Hours",
      "Leak Protection": "Yes",
      "Usage": "Baby Diapering",
      "Ideal For": "Large Babies"
    },
    images: ["images/product04_L_30(1).jpg", "images/product04_L_30(2).jpg", "images/product04_S_40(3).jpg", "images/product04_S_40(4).jpg", "images/product04_S_40(5).jpg", "images/product04_S_40(6).jpg", "images/product04_S_40(7).jpg", "images/product04_S_40(8).jpg"]
  },
  {
    name: "Bum Suit Baby Pants Extra Large (pack of 56)",
    weight: "Extra Large (XL)",
    price: 10,
    about: [
      "<b>Comfortable & Breathable Design:</b> Made with soft, breathable fabric that is gentle on your baby’s delicate skin and supports comfortable movement throughout the day.",
      "<b>Advanced Leak Protection:</b> Features a highly absorbent core and elastic waistband to help prevent leaks and keep your baby dry for longer periods.",
      "<b>Up to 12-Hour Absorption:</b> Enhanced absorption technology locks in moisture, providing long-lasting dryness and comfort both day and night.",
      "<b>Easy Diaper Changes:</b> Stretchy pant-style design makes it quick and simple for parents to put on and remove during every change.",
      "<b>Pack of 56 Pants:</b> Comes as a value pack of 56 diaper pants, ideal for growing babies who need frequent changing.",
    ],
    details: {
      "Product": "Bum Suit Baby Pants Extra Large",
      "Pack Size": "56 Pants",
      "Size": "Extra Large",
      "Compatible Baby Weight": "Approx. 12–17 kg",
      "Material": "Soft Breathable Fabric with Elastic Waistband",
      "Absorption Duration": "Up to 12 Hours",
      "Leak Protection": "Yes",
      "Usage": "Baby Diapering",
      "Ideal For": "Extra Large Babies"
    },
    images: ["images/product04_XL_56(1).jpg", "images/product04_XL_56(2).jpg", "images/product04_S_40(3).jpg", "images/product04_S_40(4).jpg", "images/product04_S_40(5).jpg", "images/product04_S_40(6).jpg", "images/product04_S_40(7).jpg", "images/product04_S_40(8).jpg"]
  },
];

/* =========================================
   2. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(allProducts);
});


/* =========================================
   3. APP LOGIC
   ========================================= */

/* SEARCH LOGIC (Updated for Mobile UX) */
const searchToggle = document.getElementById('searchToggle');
const headerInput = document.querySelector('.header-search .search-input');
const searchInputs = document.querySelectorAll('.search-input');

if(searchToggle && headerInput) {
    // 1. Toggle Search on Icon Click
    searchToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop click from bubbling to document
      headerInput.classList.toggle('active');
      if (headerInput.classList.contains('active')) headerInput.focus();
    });

    // 2. Prevent closing when clicking INSIDE the search bar
    headerInput.addEventListener('click', (e) => {
      e.stopPropagation(); 
    });

    // 3. Close Search when clicking anywhere OUTSIDE
    document.addEventListener('click', () => {
      if (headerInput.classList.contains('active')) {
        headerInput.classList.remove('active');
      }
    });
}

// Universal Search Filter Logic
searchInputs.forEach(input => {
  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    searchInputs.forEach(i => { if(i !== input) i.value = q }); 

    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.about && p.about.some(a => a.toLowerCase().includes(q))) // Search inside bullets too!
    );
    renderProducts(filtered);
  });
});

/* RENDER PRODUCTS */
let currentRenderedProducts = [];

function renderProducts(products) {
  const container = document.getElementById('productsContainer');
  currentRenderedProducts = products; 
  
  if (products.length === 0) {
    container.innerHTML = '<p style="text-align:center; width:100%; color:#666;">No products found.</p>';
    return;
  }

  container.innerHTML = products.map((p, index) => `
      <div class="product-card">
        
        <div class="image-slider">
          <button class="nav left" aria-label="Previous image">&#10094;</button>
          
          <img src="${p.images[0]}" class="main-img" alt="${p.name}">
          
          <button class="nav right" aria-label="Next image">&#10095;</button>
          
          <div class="slider-data" hidden>${JSON.stringify(p.images)}</div>
        </div>

        <div class="product-info">
          <h3>${p.name}</h3>
          <p class="weight">${p.weight}</p>
          <div class="price">₹${p.price}</div>
        </div>

        <button class="details-btn" onclick="openModal(${index})">
          Product Details
        </button>
      </div>
  `).join('');

  activateSliders();
}

/* SLIDER LOGIC */
function activateSliders() {
  document.querySelectorAll('.product-card').forEach(card => {
    const rawData = card.querySelector('.slider-data').textContent;
    const images = JSON.parse(rawData);
    const mainImg = card.querySelector('.main-img');
    const sliderArea = card.querySelector('.image-slider');
    const leftBtn = card.querySelector('.nav.left');
    const rightBtn = card.querySelector('.nav.right');
    
    let currentIndex = 0;

    if (images.length <= 1) {
      leftBtn.style.display = 'none';
      rightBtn.style.display = 'none';
      return; 
    }

    const updateImage = () => { mainImg.src = images[currentIndex]; };
    const showPrev = () => { currentIndex = (currentIndex - 1 + images.length) % images.length; updateImage(); };
    const showNext = () => { currentIndex = (currentIndex + 1) % images.length; updateImage(); };

    leftBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    rightBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    let touchStartX = 0;
    sliderArea.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    sliderArea.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) showNext();
      if (touchEndX > touchStartX + 50) showPrev();
    }, { passive: true });
  });
}

/* GLOBAL MODAL LOGIC (RICH DATA) */
const modal = document.getElementById('globalModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

window.openModal = (index) => {
  if(!modal) return;
  
  // 1. Get the data from the index
  const product = currentRenderedProducts[index];
  
  // 2. Set Title
  modalTitle.textContent = product.name;

  // 3. Build "About this item" (Bullets)
  let aboutHtml = '';
  if (product.about && product.about.length > 0) {
    aboutHtml = `
      <div class="section-title">About this item</div>
      <ul class="feature-list">
        ${product.about.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  // 4. Build "Product Details" (Table)
  let detailsHtml = '';
  if (product.details) {
    const rows = Object.entries(product.details).map(([key, value]) => `
      <tr>
        <th>${key}</th>
        <td>${value}</td>
      </tr>
    `).join('');
    
    detailsHtml = `
      <div class="section-title">Product Details</div>
      <table class="specs-table">
        ${rows}
      </table>
    `;
  }

  // 5. Inject into Modal
  modalBody.innerHTML = detailsHtml + aboutHtml;
  
  modal.classList.add('active');
};

if(closeModal) closeModal.onclick = () => modal.classList.remove('active');
if(modal) modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };