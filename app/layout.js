import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
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
  metadataBase: new URL('https://hiranandanifortune.in'),
  title: 'Hiranandani Fortune City | Luxury 2 & 3 BHK Homes in Panvel, Navi Mumbai',
  description: "Hiranandani Fortune City — A vibrant mixed-use landmark development in Panvel, Navi Mumbai by Hiranandani Group. Luxurious 2 & 3 BHK apartments and 2 BHK Balcony Homes starting at ₹1.20 Cr*.",
  alternates: {
    canonical: 'https://hiranandanifortune.in',
  },
  openGraph: {
    title: 'Hiranandani Fortune City | Luxury Integrated Township in Panvel',
    description: "Discover luxurious 2 & 3 BHK apartments at Hiranandani Fortune City, an integrated landmark development in Panvel, Navi Mumbai.",
    url: 'https://hiranandanifortune.in',
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
    title: 'Hiranandani Fortune City | Luxury 2 & 3 BHK Homes in Panvel',
    description: "A vibrant mixed-use landmark development in Panvel, Navi Mumbai by Hiranandani Group.",
    images: ['/projects/iris-tower.jpg'],
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Hiranandani Fortune City Panvel",
              "url": "https://hiranandanifortune.in",
              "logo": "https://hiranandanifortune.in/projects/iris-tower.jpg",
              "image": "https://hiranandanifortune.in/projects/iris-tower.jpg",
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
                "https://hiranandanifortune.in"
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
