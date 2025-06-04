import type { NextConfig } from "next";
import createMDX from '@next/mdx'; // Corrected import name

// This is the new part for MDX configuration
const withMDX = createMDX({
  // Add extensions to the list of extensions Next.js recognizes
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [], // Add remark plugins here if needed
    // rehypePlugins: [], // Add rehype plugins here if needed
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig: NextConfig = {
  /* Your existing config options here, if any */
  reactStrictMode: true, // Example existing option

  // Add pageExtensions to include 'md' and 'mdx'
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

// Export the combined config
export default withMDX(nextConfig);
