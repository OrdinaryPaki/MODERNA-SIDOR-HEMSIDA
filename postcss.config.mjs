import { join } from "node:path";

globalThis.__tw_resolve = (id) => {
  if (id === "tailwindcss") {
    return join(process.cwd(), "node_modules", "tailwindcss", "index.css");
  }
};

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
