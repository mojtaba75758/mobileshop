/* ===== Mobile Shop — App Logic ===== */

// ---------- i18n ----------
const translations = {
  fa: {
    'brand.name': 'موبایل-shop',
    'topbar.shipping': '🚚 ارسال رایگان برای خرید بالای ۳۰٬۰۰۰ افغانی',
    'nav.home': 'خانه',
    'nav.products': 'محصولات',
    'nav.categories': 'دسته‌بندی‌ها',
    'nav.blog': 'وبلاگ',
    'nav.features': 'چرا ما؟',
    'nav.contact': 'تماس با ما',
    'hero.badge': '✨ جدیدترین لوازم جانبی موبایل',
    'hero.title': 'همه‌چیز برای موبایلت،<br/>یک‌جا و با بهترین قیمت',
    'hero.subtitle': 'از قاب و محافظ صفحه گرفته تا پاوربانک، هندزفری و محصولات دیجیتال — با ضمانت اصالت کالا و ارسال سریع به سراسر کشور.',
    'hero.cta1': 'مشاهده محصولات',
    'hero.cta2': 'دسته‌بندی‌ها',
    'hero.stat1': 'مشتری راضی',
    'hero.stat2': 'محصول متنوع',
    'hero.stat3': 'ضمانت اصالت',
    'cat.title': 'دسته‌بندی محصولات',
    'cat.subtitle': 'بهترین‌ها را در هر دسته پیدا کن',
    'cat.c1': 'قاب و کاور', 'cat.c1d': 'انواع قاب سیلیکونی، چرمی و ضدضربه',
    'cat.c2': 'شارژر و کابل', 'cat.c2d': 'شارژر سریع و کابل‌های باکیفیت',
    'cat.c3': 'پاوربانک', 'cat.c3d': 'ظرفیت بالا و طراحی Slim',
    'cat.c4': 'هندزفری', 'cat.c4d': 'بی‌سیم و سیمی با صدای باکیفیت',
    'cat.c5': 'محافظ صفحه', 'cat.c5d': 'گلس و TPU ضدخش و ضدضربه',
    'cat.c6': 'محصولات دیجیتال', 'cat.c6d': 'سکه بازی، بنر و اشتراک اپلیکیشن',
    'prod.title': 'محصولات منتخب',
    'prod.subtitle': 'پرفروش‌ترین‌های این هفته',
    'filter.all': 'همه',
    'filter.accessory': 'لوازم جانبی',
    'filter.digital': 'دیجیتال',
    'blog.title': 'آخرین مقالات وبلاگ',
    'blog.subtitle': 'نکات و راهنمای خرید',
    'blog.read': 'ادامه مطلب ←',
    'feat.title': 'چرا موبایل-shop؟',
    'feat.f1': 'ضمانت اصالت کالا', 'feat.f1d': 'همه محصولات اورجینال با هولوگرام اصالت',
    'feat.f2': 'ارسال سریع', 'feat.f2d': 'تحویل ۲۴ تا ۴۸ ساعته به سراسر کشور',
    'feat.f3': 'پرداخت امن', 'feat.f3d': 'درگاه پرداخت ایمن بانکی',
    'feat.f4': '۷ روز ضمانت برگشت', 'feat.f4d': 'در صورت نارضایتی، بدون قید و شرط',
    'contact.title': 'با ما در تماس باش',
    'contact.subtitle': 'سؤال، پیشنهاد یا پیگیری سفارش — فرم را پر کن تا با تو تماس بگیریم.',
    'contact.phone': '۰۲۱-۱۲۳۴۵۶۷۸',
    'contact.address': 'هرات، بازار موبایل',
    'contact.hours': 'شنبه تا پنجشنبه، ۹ صبح تا ۹ شب',
    'contact.ph.name': 'نام و نام خانوادگی',
    'contact.ph.phone': 'شماره تماس',
    'contact.ph.email': 'ایمیل (اختیاری)',
    'contact.ph.msg': 'پیام شما...',
    'contact.send': 'ارسال پیام',
    'contact.success': '✅ پیام شما با موفقیت ارسال شد! به‌زودی با شما تماس می‌گیریم.',
    'footer.about': 'فروشگاه تخصصی لوازم موبایل و محصولات دیجیتال با بیش از ۵ سال سابقه.',
    'footer.links': 'دسترسی سریع',
    'footer.contact': 'تماس با ما',
    'footer.rights': '© ۱۴۰۴ موبایل-shop — تمامی حقوق محفوظ است.',
    'cart.title': 'سبد خرید',
    'cart.total': 'جمع کل:',
    'cart.checkout': 'ثبت سفارش',
    'cart.empty': 'سبد خرید شما خالی است 🛒',
    'cart.added': 'به سبد خرید اضافه شد ✅',
    'product.add': 'افزودن به سبد',
    'product.accessory': 'لوازم جانبی',
    'product.digital': 'دیجیتال',
    'currency': '؋ افغانی',
  },
  en: {
    'brand.name': 'Mobile Shop',
    'topbar.shipping': '🚚 Free shipping on orders over 30,000 AFN',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.categories': 'Categories',
    'nav.blog': 'Blog',
    'nav.features': 'Why Us',
    'nav.contact': 'Contact',
    'hero.badge': '✨ Latest mobile accessories',
    'hero.title': 'Everything for your phone,<br/>in one place at the best price',
    'hero.subtitle': 'From cases and screen protectors to power banks, earphones and digital products — with authenticity guarantee and fast nationwide shipping.',
    'hero.cta1': 'Shop Now',
    'hero.cta2': 'Categories',
    'hero.stat1': 'Happy Customers',
    'hero.stat2': 'Diverse Products',
    'hero.stat3': 'Authenticity Guarantee',
    'cat.title': 'Product Categories',
    'cat.subtitle': 'Find the best in every category',
    'cat.c1': 'Cases & Covers', 'cat.c1d': 'Silicone, leather and shockproof cases',
    'cat.c2': 'Chargers & Cables', 'cat.c2d': 'Fast chargers and quality cables',
    'cat.c3': 'Power Banks', 'cat.c3d': 'High capacity, slim design',
    'cat.c4': 'Earphones', 'cat.c4d': 'Wireless and wired with quality sound',
    'cat.c5': 'Screen Protectors', 'cat.c5d': 'Glass and TPU, scratch & shock resistant',
    'cat.c6': 'Digital Products', 'cat.c6d': 'Game coins, banners and app subscriptions',
    'prod.title': 'Featured Products',
    'prod.subtitle': "This week's best sellers",
    'filter.all': 'All',
    'filter.accessory': 'Accessories',
    'filter.digital': 'Digital',
    'blog.title': 'Latest Blog Posts',
    'blog.subtitle': 'Tips & buying guides',
    'blog.read': 'Read more →',
    'feat.title': 'Why Mobile Shop?',
    'feat.f1': 'Authenticity Guarantee', 'feat.f1d': 'All products original with hologram',
    'feat.f2': 'Fast Shipping', 'feat.f2d': '24–48 hour delivery nationwide',
    'feat.f3': 'Secure Payment', 'feat.f3d': 'Safe online payment gateway',
    'feat.f4': '7-Day Return', 'feat.f4d': 'No-questions-asked returns',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Questions, suggestions or order tracking — fill the form and we will reach out.',
    'contact.phone': '+93-21-12345678',
    'contact.address': 'Herat, Mobile Market',
    'contact.hours': 'Sat–Thu, 9 AM – 9 PM',
    'contact.ph.name': 'Full name',
    'contact.ph.phone': 'Phone number',
    'contact.ph.email': 'Email (optional)',
    'contact.ph.msg': 'Your message...',
    'contact.send': 'Send Message',
    'contact.success': '✅ Your message was sent successfully! We will contact you soon.',
    'footer.about': 'Specialized mobile accessories and digital products store with 5+ years of experience.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.rights': '© 2025 Mobile Shop — All rights reserved.',
    'cart.title': 'Shopping Cart',
    'cart.total': 'Total:',
    'cart.checkout': 'Checkout',
    'cart.empty': 'Your cart is empty 🛒',
    'cart.added': 'Added to cart ✅',
    'product.add': 'Add to Cart',
    'product.accessory': 'Accessory',
    'product.digital': 'Digital',
    'currency': 'AFN',
  },
};

// ---------- Products (prices in Afghani) ----------
const products = [
  { id: 1, icon: '📱', cat: 'accessory', price: 1500, oldPrice: 1900,
    name: { fa: 'قاب سیلیکونی ضدضربه', en: 'Shockproof Silicone Case' } },
  { id: 2, icon: '🛡️', cat: 'accessory', price: 700, oldPrice: null,
    name: { fa: 'گلس محافظ صفحه', en: 'Screen Glass Protector' } },
  { id: 3, icon: '🔋', cat: 'accessory', price: 5200, oldPrice: 6400,
    name: { fa: 'پاوربانک ۲۰۰۰۰ میلی‌آمپر', en: '20000mAh Power Bank' } },
  { id: 4, icon: '🔌', cat: 'accessory', price: 2000, oldPrice: null,
    name: { fa: 'شارژر سریع ۳۰ وات', en: '30W Fast Charger' } },
  { id: 5, icon: '🎧', cat: 'accessory', price: 4600, oldPrice: 5600,
    name: { fa: 'هندزفری بی‌سیم بلوتوثی', en: 'Bluetooth Wireless Earbuds' } },
  { id: 6, icon: '🚗', cat: 'accessory', price: 1700, oldPrice: null,
    name: { fa: 'هولدر نگهدارنده گوشی', en: 'Car Phone Holder' } },
  { id: 7, icon: '🔗', cat: 'accessory', price: 600, oldPrice: 800,
    name: { fa: 'کابل USB-C شارژ سریع', en: 'USB-C Fast Charging Cable' } },
  { id: 8, icon: '⌚', cat: 'accessory', price: 9500, oldPrice: 12000,
    name: { fa: 'ساعت هوشمند', en: 'Smart Watch' } },
  { id: 9, icon: '🔊', cat: 'accessory', price: 6800, oldPrice: null,
    name: { fa: 'اسپیکر بلوتوثی', en: 'Bluetooth Speaker' } },
  { id: 10, icon: '💡', cat: 'accessory', price: 1100, oldPrice: 1400,
    name: { fa: 'چراغ قوه LED شارژی', en: 'Rechargeable LED Flashlight' } },
  { id: 11, icon: '🎮', cat: 'digital', price: 900, oldPrice: null,
    name: { fa: 'سکه بازی فوتبال (۱۰۰۰ سکه)', en: 'Football Game Coins (1000)' } },
  { id: 12, icon: '🔫', cat: 'digital', price: 1200, oldPrice: null,
    name: { fa: 'سکه بازی PUBG (۶۶۰ سکه)', en: 'PUBG Coins (660 UC)' } },
  { id: 13, icon: '📲', cat: 'digital', price: 1300, oldPrice: 1800,
    name: { fa: 'اشتراک اپلیکیشن Premium', en: 'Premium App Subscription' } },
  { id: 14, icon: '🌐', cat: 'digital', price: 800, oldPrice: null,
    name: { fa: 'شارژ مستقیم اپلیکیشن UC Browser', en: 'UC Browser Direct Top-up' } },
];

// ---------- Blog posts ----------
const posts = [
  {
    icon: '🔋',
    date: { fa: '۱۲ آبان ۱۴۰۴', en: 'Nov 3, 2025' },
    title: { fa: 'چطور عمر باتری گوشی را دو برابر کنیم؟', en: 'How to double your phone battery life?' },
    excerpt: { fa: 'با چند习惯 ساده مثل مدیریت اپلیکیشن‌های پس‌زمینه و استفاده از حالت صرفه‌جویی، عمر باتری را به شکل چشمگیری افزایش دهید.', en: 'Simple habits like managing background apps and using battery saver mode can dramatically extend battery life.' },
  },
  {
    icon: '🛡️',
    date: { fa: '۵ آبان ۱۴۰۴', en: 'Oct 26, 2025' },
    title: { fa: 'گلس یا TPU؟ کدام محافظ صفحه بهتر است؟', en: 'Glass or TPU? Which screen protector is better?' },
    excerpt: { fa: 'مقایسه کامل گلس و TPU از نظر مقاومت، نصب آسان و قیمت — تا بهترین انتخاب را برای گوشی خود داشته باشید.', en: 'A full comparison of glass vs TPU in durability, ease of installation and price.' },
  },
  {
    icon: '⚡',
    date: { fa: '۲۸ مهر ۱۴۰۴', en: 'Oct 19, 2025' },
    title: { fa: 'شارژ سریع چیست و آیا به باتری آسیب می‌زند؟', en: 'What is fast charging and does it harm the battery?' },
    excerpt: { fa: 'در این مقاله توضیح می‌دهیم технологии شارژ سریع چگونه کار می‌کند و نکات استفاده صحیح از آن چیست.', en: 'How fast charging technology works and the best practices for using it safely.' },
  },
];

// ---------- State ----------
let lang = 'fa';
let cart = JSON.parse(localStorage.getItem('mshop_cart') || '[]');
let currentFilter = 'all';

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const t = (key) => (translations[lang] && translations[lang][key]) || translations.fa[key] || key;
const fmt = (n) => n.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US');

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => {
    const val = t(el.getAttribute('data-i18n'));
    el.innerHTML = val;
  });
  $$('[data-i18n-ph]').forEach((el) => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  $('#lang-fa').classList.toggle('active', lang === 'fa');
  $('#lang-en').classList.toggle('active', lang === 'en');
  renderProducts();
  renderBlog();
  renderCart();
}

// ---------- Products ----------
function renderProducts() {
  const grid = $('#product-grid');
  const list = products.filter((p) => currentFilter === 'all' || p.cat === currentFilter);
  grid.innerHTML = list
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <span class="product-cat">${t(p.cat === 'digital' ? 'product.digital' : 'product.accessory')}</span>
        <span class="product-name">${p.name[lang]}</span>
        <span class="product-price">${fmt(p.price)} ${t('currency')}
          ${p.oldPrice ? `<span class="old">${fmt(p.oldPrice)}</span>` : ''}
        </span>
        <button class="add-btn" onclick="addToCart(${p.id})">${t('product.add')}</button>
      </div>
    </div>`
    )
    .join('');
}

// ---------- Blog ----------
function renderBlog() {
  $('#blog-grid').innerHTML = posts
    .map(
      (p) => `
    <article class="blog-card">
      <div class="blog-img">${p.icon}</div>
      <div class="blog-body">
        <span class="blog-date">📅 ${p.date[lang]}</span>
        <h3>${p.title[lang]}</h3>
        <p>${p.excerpt[lang]}</p>
        <span class="blog-link">${t('blog.read')}</span>
      </div>
    </article>`
    )
    .join('');
}

// ---------- Cart ----------
function saveCart() {
  localStorage.setItem('mshop_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const item = cart.find((c) => c.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  const btn = event?.target;
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = t('cart.added');
    setTimeout(() => (btn.textContent = orig), 1200);
  }
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const wrap = $('#cart-items');
  const count = cart.reduce((s, c) => s + c.qty, 0);
  $('#cart-count').textContent = lang === 'fa' ? toFaDigits(count) : count;
  if (cart.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">${t('cart.empty')}</div>`;
  } else {
    wrap.innerHTML = cart
      .map((c) => {
        const p = products.find((x) => x.id === c.id);
        return `
      <div class="cart-item">
        <span class="ci-icon">${p.icon}</span>
        <div class="ci-info">
          <div class="ci-name">${p.name[lang]}</div>
          <div class="ci-price">${fmt(p.price * c.qty)} ${t('currency')}</div>
        </div>
        <div class="ci-qty">
          <button onclick="changeQty(${p.id},1)">+</button>
          <span>${lang === 'fa' ? toFaDigits(c.qty) : c.qty}</span>
          <button onclick="changeQty(${p.id},-1)">−</button>
        </div>
      </div>`;
      })
      .join('');
  }
  const total = cart.reduce((s, c) => {
    const p = products.find((x) => x.id === c.id);
    return s + p.price * c.qty;
  }, 0);
  $('#cart-total').textContent = `${fmt(total)} ${t('currency')}`;
}

function toFaDigits(n) {
  return String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

// ---------- Drawer ----------
function openCart() {
  $('#cart-drawer').classList.add('open');
  $('#cart-overlay').classList.add('open');
}
function closeCart() {
  $('#cart-drawer').classList.remove('open');
  $('#cart-overlay').classList.remove('open');
}

// ---------- Contact form ----------
function handleContactSubmit(e) {
  e.preventDefault();
  const ok = $('#form-success');
  ok.hidden = false;
  e.target.reset();
  setTimeout(() => (ok.hidden = true), 5000);
}

// ---------- Events ----------
$('#lang-fa').addEventListener('click', () => { lang = 'fa'; applyLang(); });
$('#lang-en').addEventListener('click', () => { lang = 'en'; applyLang(); });
$('#cart-btn').addEventListener('click', openCart);
$('#cart-close').addEventListener('click', closeCart);
$('#cart-overlay').addEventListener('click', closeCart);
$('#hamburger').addEventListener('click', () => $('#nav').classList.toggle('open'));
$$('#nav a').forEach((a) => a.addEventListener('click', () => $('#nav').classList.remove('open')));
$$('.filter-btn').forEach((b) =>
  b.addEventListener('click', () => {
    $$('.filter-btn').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    currentFilter = b.dataset.filter;
    renderProducts();
  })
);
$('#contact-form').addEventListener('submit', handleContactSubmit);

// ---------- Init ----------
applyLang();
