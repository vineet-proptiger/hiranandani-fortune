import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import { faviconImage } from '../lib/images'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hiranandanipanvelfortunecity.com'),
  title: 'Hiranandani Fortune City Panvel | 2, 3 & 4 BHK Luxury Homes',
  description: 'Discover Hiranandani Fortune City in Panvel, Navi Mumbai. Offering luxury 2, 3 & 4 BHK sports-themed residences starting at ₹1.20 Cr* with 80+ amenities.',
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: 'https://hiranandanipanvelfortunecity.com',
  },
  openGraph: {
    title: 'Hiranandani Fortune City Panvel | 2, 3 & 4 BHK Luxury Homes',
    description: 'Discover Hiranandani Fortune City in Panvel, Navi Mumbai. Offering luxury 2, 3 & 4 BHK sports-themed residences starting at ₹1.20 Cr* with 80+ amenities.',
    url: 'https://hiranandanipanvelfortunecity.com',
    siteName: 'Hiranandani Fortune City',
    images: [
      {
        url: '/projects/iris-tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiranandani Fortune City Panvel Navi Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiranandani Fortune City Panvel | 2, 3 & 4 BHK Luxury Homes',
    description: 'Discover Hiranandani Fortune City in Panvel, Navi Mumbai. Offering luxury 2, 3 & 4 BHK sports-themed residences starting at ₹1.20 Cr* with 80+ amenities.',
    images: ['/projects/iris-tower.jpg'],
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="icon" href={faviconImage} type="image/webp" />
        <link rel="shortcut icon" href={faviconImage} type="image/webp" />
        <link rel="apple-touch-icon" href={faviconImage} type="image/webp" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Hiranandani Fortune City Panvel",
              "url": "https://hiranandanipanvelfortunecity.com",
              "logo": "https://hiranandanipanvelfortunecity.com/projects/iris-tower.jpg",
              "image": "https://hiranandanipanvelfortunecity.com/projects/iris-tower.jpg",
              "description": "Hiranandani Fortune City, Navi Mumbai's premier luxury integrated township in Panvel offering luxurious 2 & 3 BHK residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Panvel",
                "addressLocality": "Navi Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "410210",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 1.20 Cr Onwards",
              "sameAs": [
                "https://hiranandanipanvelfortunecity.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
