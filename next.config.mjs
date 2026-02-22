/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // images.unoptimized removed — Next.js image optimization improves
  // Core Web Vitals (LCP, CLS) which are Google ranking signals.
  // Images will be served as optimized WebP with proper sizing.
}

export default nextConfig
