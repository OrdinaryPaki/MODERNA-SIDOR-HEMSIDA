export type Project = {
  slug: string;
  title: string;
  service: string;
  year: string;
  listingYear?: string;
  industry: string;
  timeline: string;
  summary: string;
  logoImage?: string;
  detailLayout?: "spacious" | "offset";
  coverImage: string;
  heroImage: string;
  gallery: string[];
  problem: string;
  solution: string;
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "baseline-sports",
    title: "Baseline Sports",
    service: "Web Design & Development",
    year: "2025",
    listingYear: "2025",
    industry: "Sports & Fitness",
    timeline: "7 weeks",
    summary:
      "Baseline Sports needed a refreshed brand identity that would better reflect their focus on performance and attract serious athletes.",
    logoImage: "/reference/9XfpXOcQrpiKYnZNcFlnYhYZVI.svg",
    coverImage: "/reference/kf0L3mld1QAbDZWfDp3yi4LfwV8.png",
    heroImage: "/reference/1pXpKFq0RxwTqHAyd8akZF1bfE.jpg",
    gallery: [
      "/reference/ylgWkUBav1fVo4GMI7lCF9dLse4.jpg",
      "/reference/m3SbWtji5h8aQ1efaRf9mzqgyF4.jpg",
      "/reference/o8BRmDyqhrN2IDj4h5iGEx7sBY.jpg",
      "/reference/je8Xjf02lITYWw5t4fuBh8hKsg.jpg",
    ],
    problem:
      "The old identity felt outdated and generic. It failed to highlight their expertise in sports science, struggled to inspire trust, and left them overshadowed by modern competitors. Visuals lacked consistency and marketing materials did not connect with their audience.",
    solution:
      "We created a bold new identity centered on performance and precision. A modern logo, fresh typography, and a cohesive color palette gave the brand clarity and strength across digital and print materials. The new system finally aligned the visual presence with their mission.",
    impact:
      "Social media engagement grew by 220% in the first quarter. The brand secured two new sponsorships, boosted recall in surveys by 65%, and strengthened trust within their community.",
  },
  {
    slug: "urban-bites",
    title: "Urban Bites",
    service: "UI/UX Design",
    year: "2024",
    listingYear: "2025",
    industry: "Food & Hospitality",
    timeline: "6 weeks",
    summary:
      "Urban Bites wanted a seamless digital experience that made online food ordering as appealing and effortless as their in-store service.",
    logoImage: "/reference/Ntc48i8GxNtzZe6K8P7DeRLzQ.svg",
    coverImage: "/reference/Vzqe1Y7Hjtxberq3o9cKXZ514.png",
    heroImage: "/reference/1pXpKFq0RxwTqHAyd8akZF1bfE.jpg",
    gallery: [
      "/reference/ylgWkUBav1fVo4GMI7lCF9dLse4.jpg",
      "/reference/m3SbWtji5h8aQ1efaRf9mzqgyF4.jpg",
      "/reference/o8BRmDyqhrN2IDj4h5iGEx7sBY.jpg",
      "/reference/je8Xjf02lITYWw5t4fuBh8hKsg.jpg",
    ],
    problem:
      "Their outdated website lacked clarity and structure. Customers struggled to browse the menu, and the checkout process was clunky and confusing. This led to abandoned orders and poor engagement, while competitors offered smoother digital solutions.",
    solution:
      "We redesigned the digital platform with a clean UI and intuitive UX. The new design simplified menu navigation, streamlined the checkout flow, and incorporated bold visuals to showcase their food. The result was a modern, mobile-first platform that matched the brand’s energy.",
    impact:
      "Online orders increased by 150% within two months. Customer feedback highlighted the ease of use and improved experience, while repeat orders grew by 40%.",
  },
  {
    slug: "northcap-supply",
    title: "Northcap supply",
    service: "Brand identity",
    year: "2024",
    listingYear: "2025",
    industry: "Fashion & Lifestyle",
    timeline: "5 weeks",
    summary:
      "Northcap Supply needed a fresh brand identity to position itself as a modern streetwear label rooted in minimalism and urban culture.",
    logoImage: "/reference/2rq9YMILXCGw0qOqXvxaPhzIuWo.svg",
    coverImage: "/reference/FZLSLkf4KypXwztwnGP7AfQOpo.png",
    heroImage: "/reference/1pXpKFq0RxwTqHAyd8akZF1bfE.jpg",
    gallery: [
      "/reference/ylgWkUBav1fVo4GMI7lCF9dLse4.jpg",
      "/reference/m3SbWtji5h8aQ1efaRf9mzqgyF4.jpg",
      "/reference/o8BRmDyqhrN2IDj4h5iGEx7sBY.jpg",
      "/reference/je8Xjf02lITYWw5t4fuBh8hKsg.jpg",
    ],
    problem:
      "The brand lacked a distinct visual style and struggled to differentiate itself in a crowded streetwear market. Their existing look felt inconsistent and failed to capture the lifestyle-driven spirit they wanted to project. As a result, customers had little reason to connect with the brand or remember it.",
    solution:
      "We developed a bold and cohesive brand identity built on simplicity, authenticity, and edge. A new wordmark, refined color palette, and versatile design system created a strong foundation for both online and offline presence. Every element was designed to embody the urban, minimal aesthetic that defines Northcap Supply.",
    impact:
      "The rebrand immediately elevated perception. Social engagement doubled in the first month, new collaborations with local creatives were established, and sales grew steadily as the brand gained recognition within its target community.",
  },
  {
    slug: "velo-studio",
    title: "Velo Studio",
    service: "Web Design & Development",
    year: "2023",
    listingYear: "2025",
    industry: "Creative & Media",
    timeline: "12 weeks",
    summary:
      "Velo Studio needed a dynamic web design that would capture the energy of movement and showcase their creative work in a bold way.",
    logoImage: "/reference/OPToRxvhQd2ScvavfIOXuI6o.svg",
    coverImage: "/reference/RAVhlibsB1Uz6MJmEED2G3SQc.png",
    heroImage: "/reference/1pXpKFq0RxwTqHAyd8akZF1bfE.jpg",
    gallery: [
      "/reference/ylgWkUBav1fVo4GMI7lCF9dLse4.jpg",
      "/reference/m3SbWtji5h8aQ1efaRf9mzqgyF4.jpg",
      "/reference/o8BRmDyqhrN2IDj4h5iGEx7sBY.jpg",
      "/reference/je8Xjf02lITYWw5t4fuBh8hKsg.jpg",
    ],
    problem:
      "Their old site lacked personality and failed to reflect the innovative nature of their projects. It was static, uninspiring, and difficult to navigate. Potential clients often left without understanding the studio’s strengths or unique approach.",
    solution:
      "We designed a modern, responsive website with strong visuals, smooth transitions, and interactive elements. The design emphasized motion and flow, creating an experience that felt aligned with the studio’s creative spirit. The new structure also made it easier to showcase case studies and highlight their portfolio.",
    impact:
      "The new site significantly improved client engagement and inquiries. Visitors spent 70% more time exploring projects, and the studio received a noticeable increase in collaboration opportunities from creative partners.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug).slice(0, 3);
}
