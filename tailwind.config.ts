import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#17213e", cream: "#fffaf2", coral: "#f97360", sun: "#fbbf24", mint: "#6ee7c7", lavender: "#b7a9f6" }, boxShadow: { float: "0 18px 45px rgba(32, 51, 94, .13)" } }, plugins: [] } satisfies Config;
