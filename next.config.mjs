/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build plain HTML/CSS/JS into `out/` so GitHub Pages can host it.
  output: "export",
  // Emit /about/index.html etc., which every static host serves at /about/.
  trailingSlash: true,
  // GitHub Pages has no image optimization server; serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
