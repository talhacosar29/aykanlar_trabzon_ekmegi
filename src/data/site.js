/** Prefix site paths for GitHub Pages (`base`) and local dev. */
export function url(path = '/') {
  if (/^(https?:|tel:|mailto:)/i.test(path)) return path;
  const prefix = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) return path;
  const [pathname, hash] = path.split('#');
  const clean = (pathname || '/').replace(/^\/+/, '');
  const isFile = /\.[a-z0-9]+$/i.test(clean.split('/').pop() || '');
  let joined = clean ? `${prefix}/${clean}` : `${prefix}/`;
  if (!joined.startsWith('/')) joined = `/${joined}`;
  if (!isFile && !joined.endsWith('/')) joined += '/';
  return hash ? `${joined}#${hash}` : joined;
}

export const site = {
  name: 'Aykanlar',
  fullName: 'Aykanlar Trabzon Ekmeği',
  tagline: '20 Yıllık Karadeniz Lezzeti',
  slogan: 'Gerçek lezzet, emekten doğar.',
  description:
    'Odun ateşinde ekşi mayalı Trabzon ekmeği. Her gün taptaze, fırından sofranıza.',
  instagram: 'https://www.instagram.com/aykanlar/',
  instagramHandle: '@aykanlar',
  maps: 'https://maps.app.goo.gl/vbG3at182ua1oef59',
  mapsEmbed:
    'https://maps.google.com/maps?q=Deri%20OSB%20Mahallesi%20Cihan%20Sokak%20Tuzla%20%C4%B0stanbul&hl=tr&z=16&output=embed',
  phone: '0533 383 53 53',
  phoneHref: 'tel:+905333835353',
  regions: 'İstanbul & İzmit',
  company: 'Aykanlar Trabzon Ekmeği Sanayi ve Ticaret Limited Şirketi',
  address: {
    title: 'Tuzla',
    street: 'Deri OSB Mah. Cihan Sokak, II. Blok No: 2/13',
    district: '34956 Tuzla / İstanbul',
  },
};

export const branches = [
  {
    id: 'tuzla',
    title: 'Tuzla',
    role: 'Üretim & Satış',
    name: 'Aykanlar Trabzon Ekmeği Sanayi ve Ticaret Limited Şirketi',
    street: 'Deri OSB Mah. Cihan Sokak, II. Blok No: 2/13',
    district: '34956 Tuzla / İstanbul',
    phone: '0533 383 53 53',
    phoneHref: 'tel:+905333835353',
    maps: 'https://maps.app.goo.gl/vbG3at182ua1oef59',
    mapsEmbed:
      'https://maps.google.com/maps?q=Deri%20OSB%20Mahallesi%20Cihan%20Sokak%20Tuzla%20%C4%B0stanbul&hl=tr&z=16&output=embed',
  },
  {
    id: 'izmit',
    title: 'İzmit',
    role: 'Şube',
    name: 'Aykanlar ekmek fırını',
    street: 'Gültepe, Miralay Mümtaz Cd. No:61',
    district: '41100 İzmit / Kocaeli',
    maps: 'https://maps.app.goo.gl/SUuGv6B8yM6C8RZD8',
    mapsEmbed:
      'https://maps.google.com/maps?q=G%C3%BCltepe%2C%20Miralay%20M%C3%BCmtaz%20Cd.%20No%3A61%2C%2041100%20%C4%B0zmit%2FKocaeli&hl=tr&z=17&output=embed',
  },
];

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/kurumsal', label: 'Kurumsal' },
  { href: '/urunler', label: 'Ürünler' },
  { href: '/subeler', label: 'Şubeler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
];

export const products = [
  {
    slug: 'trabzon-ekmegi',
    name: 'Ekşi Mayalı Trabzon Ekmeği',
    short: 'Odun ateşinde, ekşi mayayla.',
    category: 'flagship',
    href: url('/urunler/trabzon-ekmegi'),
    image: url('/images/products/trabzon-ekmegi.jpg'),
    imageAlt: 'Geleneksel Trabzon ekmeği, kalın kabuklu yuvarlak somun',
  },
  {
    slug: 'tam-bugday',
    name: 'Ekşi Mayalı Tam Buğday Ekmeği',
    short: 'Tam buğdayın tok aroması.',
    category: 'wheat',
    href: url('/urunler/diger-urunler#tam-bugday'),
    image: url('/images/products/whole-wheat.jpg'),
    imageAlt: 'Tam buğday ekmeği somunları',
  },
  {
    slug: 'misir',
    name: 'Mısır Ekmeği',
    short: 'Karadeniz sofralarının klasiği.',
    category: 'regional',
    href: url('/urunler/diger-urunler#misir'),
    image: url('/images/products/misir-ekmegi.jpg'),
    imageAlt: 'Geleneksel mısır ekmeği',
  },
  {
    slug: 'pide',
    name: 'Ekşi Mayalı Pide',
    short: 'İnce, sıcak, taze.',
    category: 'regional',
    href: url('/urunler/diger-urunler#pide'),
    image: url('/images/products/pide-style.jpg'),
    imageAlt: 'Taze pide ekmeği',
  },
  {
    slug: 'baston',
    name: 'Ekşi Mayalı Baston Ekmeği',
    short: 'Uzun form, çıtır kabuk.',
    category: 'wheat',
    href: url('/urunler/diger-urunler#baston'),
    image: url('/images/products/baguette-style.jpg'),
    imageAlt: 'Baston formunda ekmekler',
  },
  {
    slug: 'tava-tekli',
    name: 'Ekşi Mayalı Tava Ekmeği',
    short: 'Tava usulü, yumuşak iç yapı.',
    category: 'wheat',
    href: url('/urunler/diger-urunler#tava'),
    image: url('/images/products/fresh-loaves.jpg'),
    imageAlt: 'Tava ekmeği somunları',
  },
  {
    slug: 'sari-bugday',
    name: 'Sarı Buğday Ekmeği',
    short: 'Sarı buğdayın kendine has rengi.',
    category: 'regional',
    href: url('/urunler/diger-urunler#sari-bugday'),
    image: url('/images/products/sourdough-close.jpg'),
    imageAlt: 'Sarı buğday ekmeği kabuğu',
  },
  {
    slug: 'gobit',
    name: 'Gobit Tandır Ekmeği',
    short: 'Tandır usulü yöresel lezzet.',
    category: 'regional',
    href: url('/urunler/diger-urunler#gobit'),
    image: url('/images/products/round-loaf.jpg'),
    imageAlt: 'Tandır ekmeği',
  },
  {
    slug: 'yoresel',
    name: 'Yöresel Ekmek',
    short: 'Karadeniz’in günlük ekmeği.',
    category: 'regional',
    href: url('/urunler/diger-urunler#yoresel'),
    image: url('/images/products/somun.jpg'),
    imageAlt: 'Yöresel somun ekmek',
  },
];

export const gallery = [
  { src: url('/images/products/trabzon-ekmegi.jpg'), alt: 'Ekşi mayalı Trabzon ekmeği somunu', cat: 'urun' },
  { src: url('/images/gallery/trabzon-loaf.jpg'), alt: 'Geleneksel Trabzon ekmeği', cat: 'urun' },
  { src: url('/images/products/whole-wheat.jpg'), alt: 'Tam buğday somunları', cat: 'urun' },
  { src: url('/images/products/pide-style.jpg'), alt: 'Ekşi mayalı pide', cat: 'urun' },
  { src: url('/images/products/misir-ekmegi.jpg'), alt: 'Mısır ekmeği', cat: 'urun' },
  { src: url('/images/process/kneading.jpg'), alt: 'Hamur yoğurma', cat: 'uretim' },
  { src: url('/images/process/shaping.jpg'), alt: 'Hamurun elde şekillendirilmesi', cat: 'uretim' },
  { src: url('/images/process/flour.jpg'), alt: 'Un ve usta elleri', cat: 'uretim' },
  { src: url('/images/process/production-floor.jpg'), alt: 'Üretim alanı', cat: 'uretim' },
  { src: url('/images/instagram/ig-2.jpg'), alt: 'Aykanlar üretim alanı', cat: 'uretim' },
  { src: url('/images/process/peel.jpg'), alt: 'Odun ateşli fırına kürekle sürme', cat: 'firin' },
  { src: url('/images/gallery/oven-interior.jpg'), alt: 'Odun fırınının içi', cat: 'firin' },
  { src: url('/images/gallery/bakery-interior.jpg'), alt: 'Fırın tezgâhı', cat: 'firin' },
  { src: url('/images/gallery/cooling-racks.jpg'), alt: 'Soğuma rafları', cat: 'firin' },
  { src: url('/images/gallery/crust-macro.jpg'), alt: 'Ekmek kabuğu detayı', cat: 'detay' },
  { src: url('/images/process/wheat.jpg'), alt: 'Buğday taneleri', cat: 'detay' },
  { src: url('/images/products/sourdough-close.jpg'), alt: 'Sarı buğday ekmeği içi', cat: 'detay' },
  { src: url('/images/instagram/ig-1.jpg'), alt: 'Fırından çıkan ekmekler', cat: 'urun' },
];
