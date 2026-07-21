import Image from "next/image";

const posts = [
  {
    img: "/assets/blog-1.png",
    title: "Psychology of High-Converting Landing Pages",
    category: "Website design",
    date: "Jun 17, 2025",
  },
  {
    img: "/assets/blog-2.png",
    title: "5 Signs Your Brand Identity Needs a Refresh",
    category: "Brand identity",
    date: "May 16, 2025",
  },
];

export default function Blog() {
  return (
    <section id="blogg" className="bg-[#f0f5f9] px-8 py-20 text-[#061218]">
      <div className="mx-auto flex max-w-[1439px] flex-col gap-[76px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#1f75b2]">
            //08 Blog
          </span>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-[524px] text-[88px] font-medium uppercase leading-[96.8px] tracking-[-3.52px]">
              Latest Insights
            </p>
            <div className="flex max-w-[290px] flex-col gap-4">
              <p className="text-[20px] leading-[26px] tracking-[-0.6px] opacity-70">
                Free advice on branding, design, marketing, and business growth
                from our team of experts.
              </p>
              <a
                href="#"
                className="inline-flex h-[45px] w-fit items-center justify-center rounded-[4px] bg-[#1f75b2] px-6"
              >
                <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px] text-white">
                  Read all articles
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Blog cards */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group flex flex-1 flex-col gap-4 rounded-[8px] bg-white p-4"
            >
              <div className="relative aspect-[675/454] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="max-w-[360px] text-[24px] font-medium leading-[31.2px] tracking-[-0.48px]">
                  {post.title}
                </p>
                <div className="flex items-center gap-4 text-[16px] leading-[20.8px] tracking-[-0.48px] opacity-70">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
