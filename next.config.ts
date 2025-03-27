import type { NextConfig } from "next"
const basePath = process.env.NODE_ENV === "development" ? "" : "/eid-card"

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: "export",
	basePath,
}

export default nextConfig
