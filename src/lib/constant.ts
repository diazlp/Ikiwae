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

export const sofaProduct: Product[] = [
  {
    src: '/assets/sofa/ektorp.jpg',
    title: 'EKTORP',
    description: 'sofa 3 dudukan, Hakebo abu-abu-hijau',
    price: 6295000
  },
  {
    src: '/assets/sofa/hemlingby.jpg',
    title: 'HEMLINGBY',
    description: 'sofa 2 dudukan, Bomstad hitam',
    price: 2995000
  },
  {
    src: '/assets/sofa/linanas.jpg',
    title: 'LINANÄS',
    description: 'sofa 2 dudukan, Vissle krem',
    price: 3495000
  },
  {
    src: '/assets/sofa/vimle.jpg',
    title: 'VIMLE',
    description: 'sofa 3 dudukan, Hallarp krem',
    price: 14499000
  }
]
