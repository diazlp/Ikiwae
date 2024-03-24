interface HeroProduct {
  src: string
  title: string
  description: string
  price: string
}

export const heroProduct: HeroProduct[] = [
  {
    src: '/assets/hero-1.png',
    title: 'DRÖNJÖNS',
    description: 'Kursi sederhana untuk semua umur',
    price: 'IDR 230.000'
  },
  {
    src: '/assets/hero-2.png',
    title: 'TROLLBERGET',
    description: 'Penyangga berdiri/duduk aktif, glose hitam',
    price: 'IDR 1.299.000'
  },
  {
    src: '/assets/hero-3.png',
    title: 'MALSKÄR / LOBERGET',
    description: 'Kursi putar + bantalan, putih/abu-abu tua',
    price: 'IDR 709.000'
  }
]
