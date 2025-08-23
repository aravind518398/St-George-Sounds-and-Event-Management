/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['qftcakdgsshyvdollguq.supabase.co'],
    // or use remotePatterns for more control (recommended for newer Next.js versions)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qftcakdgsshyvdollguq.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig;
