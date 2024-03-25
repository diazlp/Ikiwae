interface Product {
  src: string
  title: string
  description: string
  price: number
}

export const heroProduct: Product[] = [
  {
    src: '/assets/hero-1.png',
    title: 'DRÖNJÖNS',
    description: 'Kursi sederhana untuk semua umur',
    price: 230000
  },
  {
    src: '/assets/hero-2.png',
    title: 'TROLLBERGET',
    description: 'Penyangga berdiri/duduk aktif, glose hitam',
    price: 1299000
  },
  {
    src: '/assets/hero-3.png',
    title: 'MALSKÄR / LOBERGET',
    description: 'Kursi putar + bantalan, putih/abu-abu tua',
    price: 709000
  }
]

export const mejaProduct: Product[] = [
  {
    src: '/assets/meja/sandsberg.jpg',
    title: 'SANDSBERG',
    description: 'meja, hitam, 67x67 cm',
    price: 499000
  },
  {
    src: '/assets/meja/melltorp.jpg',
    title: 'MELLTORP',
    description: 'meja, putih, 75x75 cm',
    price: 599000
  },
  {
    src: '/assets/meja/lommarp.jpg',
    title: 'LOMMARP',
    description: 'meja, biru gelap-hijau, 90x54 cm',
    price: 2599000
  },
  {
    src: '/assets/meja/hauga.jpg',
    title: 'HAUGA',
    description: 'meja, krem, 100x45 cm',
    price: 2799000
  }
]
