export const websiteExamples = [
  {
    name: "Moderna Sidor",
    description: "Skräddarsydda digitala system",
    href: process.env.EXAMPLE_MODERNA_URL || "http://127.0.0.1:3093/",
    image: "/examples/moderna-sidor.png",
  },
  {
    name: "Opus",
    description: "Digital designstudio",
    href: process.env.EXAMPLE_OPUS_URL || "/opus-original",
    image: "/examples/opus.png",
  },
  {
    name: "Kreativy",
    description: "Kreativ byrå",
    href: process.env.EXAMPLE_KREATIVY_URL || "http://127.0.0.1:3092/",
    image: "/examples/kreativy.png",
  },
  {
    name: "Nomen Studio",
    description: "Varumärken och visuell identitet",
    href: process.env.EXAMPLE_NOMEN_URL || "http://127.0.0.1:3090/",
    image: "/examples/nomen-studio.png",
  },
] as const;
