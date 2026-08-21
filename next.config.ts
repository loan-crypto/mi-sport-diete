import type { NextConfig } from "next";

// Export estatico: se publica en GitHub Pages bajo /mi-sport-diete/,
// igual que el sitio actual (loan-crypto.github.io/mi-sport-diete/).
const repoBasePath = "/mi-sport-diete";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  images: {
    // next/image necesita un loader server-side; en export estatico se
    // desactiva la optimizacion (las fotos remotas de Pexels y las
    // propias no pasan por un servidor de imagenes).
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
};

export default nextConfig;
