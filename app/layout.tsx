import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'European Frameless Cabinets by Mike Switzer | Cypress Millwork Custom Cabinets',
  description: 'Handcrafted European frameless cabinets by master craftsman Mike Switzer in Spicewood, Texas. Serving Austin and Central Texas hill country with authentic craftsmanship and modern precision.',
  keywords: [
    'European cabinets',
    'frameless cabinets', 
    'custom cabinets Austin',
    'Mike Switzer',
    'Spicewood Texas',
    'hill country cabinets',
    'European frameless construction',
    'custom kitchen cabinets',
    'Central Texas cabinetmaker'
  ],
  authors: [{ name: 'Mike Switzer', url: 'https://cypressmillwork.com' }],
  creator: 'Cypress Millwork Custom Cabinets',
  publisher: 'Mike Switzer Workshop',
  
  // Open Graph for Social Media
  openGraph: {
    title: 'European Frameless Cabinets by Mike Switzer | Cypress Millwork',
    description: 'Master craftsman Mike Switzer creates European frameless cabinets in Spicewood, Texas. Authentic hill country craftsmanship meets European precision.',
    url: 'https://cypressmillwork.com',
    siteName: 'Cypress Millwork Custom Cabinets',
    images: [
      {
        url: '/images/og-mike-switzer-workshop.jpg',
        width: 1200,
        height: 630,
        alt: 'Mike Switzer in his Spicewood workshop crafting European frameless cabinets',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'European Frameless Cabinets | Mike Switzer | Spicewood, TX',
    description: 'Handcrafted European frameless cabinets by master craftsman Mike Switzer. Serving Austin & Central Texas hill country.',
    images: ['/images/twitter-mike-workshop.jpg'],
    creator: '@cypressmillworks',
  },

  // Local Business Schema will be added via JSON-LD in components
  alternates: {
    canonical: 'https://cypressmillwork.com',
  },

  // Verification for search engines
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },

  // App-specific metadata
  applicationName: 'Cypress Millwork Custom Cabinets',
  
  // Geographic targeting
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Spicewood, Texas',
    'geo.position': '30.2672;-97.7431',
    'ICBM': '30.2672, -97.7431',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Local Business JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cypress Millwork Custom Cabinets",
              "image": "https://cypressmillwork.com/images/mike-switzer-workshop.jpg",
              "description": "European frameless custom cabinets handcrafted by master craftsman Mike Switzer in Spicewood, Texas.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Spicewood",
                "addressRegion": "TX",
                "addressCountry": "US",
                "postalCode": "78669"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.2672",
                "longitude": "-97.7431"
              },
              "url": "https://cypressmillwork.com",
              "telephone": "+1-512-555-0123",
              "email": "mike@cypressmillwork.com",
              "priceRange": "$$$",
              "paymentAccepted": "Cash, Check, Credit Card",
              "currenciesAccepted": "USD",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "areaServed": [
                "Austin, TX",
                "Spicewood, TX", 
                "Lakeway, TX",
                "Dripping Springs, TX",
                "Bee Cave, TX",
                "Cedar Park, TX",
                "Central Texas"
              ],
              "serviceType": "European Frameless Cabinet Construction",
              "founder": {
                "@type": "Person",
                "name": "Mike Switzer",
                "jobTitle": "Master Craftsman",
                "description": "European cabinet specialist with decades of hill country craftsmanship experience"
              },
              "specialty": "European Frameless Cabinets",
              "award": "Central Texas Master Craftsman",
              "sameAs": [
                "https://instagram.com/cypressmillworkscc",
                "https://facebook.com/cypressmillwork",
                "https://www.houzz.com/pro/cypressmillwork"
              ]
            })
          }}
        />

        {/* European Cabinet Expertise Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "European Frameless Cabinet Construction",
              "description": "Handcrafted European frameless cabinets using traditional techniques and modern precision",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Cypress Millwork Custom Cabinets"
              },
              "serviceType": "Custom Cabinetry",
              "category": "European Frameless Construction",
              "areaServed": "Central Texas",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "European Cabinet Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Kitchen Cabinets",
                      "description": "European frameless kitchen cabinets"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bathroom Vanities",
                      "description": "European frameless bathroom cabinetry"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Built-in Storage",
                      "description": "Custom built-in European cabinetry"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Preload Critical Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          as="style"
        />
        <link
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
          as="style"
        />
      </head>
      <body className="bg-limestone text-workshop-charcoal font-workshop antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-barn-red text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Main Application */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>

        {/* European Cabinet Website Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mike Switzer Workshop Analytics
              window.workshopConfig = {
                craftsman: 'Mike Switzer',
                location: 'Spicewood, Texas', 
                specialty: 'European Frameless Cabinets',
                instagram: '@cypressmillworkscc'
              };
            `,
          }}
        />
      </body>
    </html>
  )
}