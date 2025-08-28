/** @type {import('next').NextConfig} */
const nextConfig = {
  // European Cabinet Website Configuration
  // appDir is now stable in Next.js 14, no longer experimental
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'instagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'graph.instagram.com',
        pathname: '/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // European Cabinet 3D Models and Assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]'
      }
    });

    config.module.rules.push({
      test: /\.(obj|mtl|fbx)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/3d-assets/[name][ext]'
      }
    });

    return config;
  },
  // Performance optimization for 3D European cabinet models
  compress: true,
  poweredByHeader: false,
  
  // Environment variables for Mike Switzer's workshop
  env: {
    SITE_NAME: 'Cypress Millwork Custom Cabinets',
    CRAFTSMAN_NAME: 'Mike Switzer',
    WORKSHOP_LOCATION: 'Spicewood, Texas',
    SPECIALTY: 'European Frameless Cabinets',
    SERVICE_AREA: 'Austin & Central Texas Hill Country'
  },

  // Headers for European cabinet assets and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/models/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO - European cabinet focus
  async redirects() {
    return [
      {
        source: '/cabinets',
        destination: '/european-cabinets',
        permanent: true,
      },
      {
        source: '/custom',
        destination: '/european-frameless-cabinets',
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig