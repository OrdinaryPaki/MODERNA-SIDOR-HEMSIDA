export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt?: string;
  excerpt: string;
  metaDescription?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  detailLayout?: "compact";
  content: {
    heading: string;
    body: string;
  }[];
};

export const articles: Article[] = [
  {
    slug: "the-psychology-behind-high-converting-landing-pages",
    title: "Psychology of High-Converting Landing Pages",
    category: "Website design",
    date: "Jun 17, 2025",
    image: "/reference/S2QOyOk4A16i6x2jsTudO4LAKA.png",
    excerpt:
      "Want to boost conversions? Here's how behavioral science can help your landing pages succeed.",
    author: {
      name: "David Park",
      role: "Web developer",
      avatar: "/reference/FKskt3wvzejbjxV6Dr8ewf2wjgs.png",
    },
    content: [
      {
        heading: "The Power of First Impressions",
        body: "Users form opinions about your website within 50 milliseconds of viewing it. Your landing page design, headline clarity, and overall visual hierarchy determine whether visitors stay or immediately leave. Professional design signals credibility and competence.",
      },
      {
        heading: "Cognitive Load Theory",
        body: "The human brain can only process limited information simultaneously. Landing pages with too many choices, complex navigation, or cluttered layouts overwhelm visitors and reduce conversions. Simplicity always wins over complexity.",
      },
      {
        heading: "Social Proof Influence",
        body: "People look to others' behavior when making decisions, especially in uncertain situations. Customer testimonials, review scores, client logos, and usage statistics provide social validation that reduces purchase anxiety and increases trust.",
      },
      {
        heading: "Color Psychology in Conversions",
        body: "Colors evoke emotional responses that influence behavior. Red creates urgency and excitement, blue builds trust and reliability, green suggests growth and positivity. Your button colors should align with desired user emotions and actions.",
      },
      {
        heading: "Trust Signal Placement",
        body: "Security badges, professional certifications, and guarantee information should appear near conversion points. These trust indicators reduce final barriers to taking action when visitors are ready to convert.",
      },
    ],
  },
  {
    slug: "5-signs-your-brand-identity-needs-a-refresh",
    title: "5 Signs Your Brand Identity Needs a Refresh",
    category: "Brand identity",
    date: "May 16, 2025",
    image: "/reference/A7GWwQGtDx6fxV2qz8qnCXU54o.png",
    excerpt:
      "Discover the warning signs that reveal your brand identity feels outdated and needs a modern refresh.",
    author: {
      name: "Sarah Chen",
      role: "Creative director",
      avatar: "/reference/EiA4iZPaAE5MgkPEM2Jzjl6Q0.png",
    },
    detailLayout: "compact",
    content: [
      {
        heading: "Your Visual Identity Looks Outdated",
        body: "Design trends evolve rapidly, and what looked cutting-edge five years ago might now appear dated. If your logo uses gradients from the early 2000s or fonts that were popular in the previous decade, customers may perceive your business as behind the times. Modern consumers associate current design with reliability and competence.",
      },
      {
        heading: "You're Embarrassed to Show Your Materials",
        body: "When you hesitate to hand out business cards or feel uncomfortable sharing your website, your brand identity has become a liability rather than an asset. Your brand should make you proud and confident in every customer interaction.",
      },
      {
        heading: "Your Competition Looks More Professional",
        body: "If competitors with similar services consistently appear more polished and established, their superior branding may be winning customers before they even compare actual services. Professional appearance builds trust and justifies higher prices.",
      },
      {
        heading: "Your Target Audience Has Changed",
        body: "Businesses naturally evolve, and the customers you serve today may be very different from when you first launched. If you've pivoted your services, expanded into new markets, or your ideal customer demographic has shifted, your brand identity should reflect these changes.",
      },
      {
        heading: "Your Growth Has Stalled",
        body: "When businesses struggle to break through to the next level, outdated branding is often the invisible barrier. A professional brand identity can be the catalyst that transforms a small business into a recognized industry player.",
      },
    ],
  },
  {
    slug: "building-a-brand-that-stands-out-in-a-crowded-market",
    title: "Building a Brand That Stands Out in a Crowded Market",
    category: "Brand identity",
    date: "May 12, 2025",
    image: "/reference/tJnXA2SAuHCLP5LghuJuCF0xQE.png",
    excerpt:
      "In today’s crowded market, a bold brand identity is non-negotiable. Learn how to build one that truly stands out.",
    author: {
      name: "Elena Thompson",
      role: "Lead Designer",
      avatar: "/reference/6ZMucLXjDo5falTRvJDgy9LQCc.png",
    },
    detailLayout: "compact",
    content: [
      {
        heading: "Define Your Unique Position",
        body: "Successful brands own specific positions in customers' minds. Instead of trying to be everything to everyone, identify the one thing you want to be known for. This focused positioning creates clear differentiation from competitors.",
      },
      {
        heading: "Understand Your Competition",
        body: "Analyze direct and indirect competitors to identify opportunities for differentiation. Look beyond obvious rivals-sometimes your biggest competition comes from unexpected sources. Understanding the competitive landscape reveals gaps you can fill.",
      },
      {
        heading: "Develop Your Brand Personality",
        body: "Brands with distinct personalities create emotional connections with customers. Are you professional and trustworthy, or creative and rebellious? Your personality should reflect your target audience's aspirations and values.",
      },
      {
        heading: "Consistent Visual Identity",
        body: "Every visual element should reinforce your brand position and personality. Colors, fonts, imagery styles, and design elements work together to create recognition and build trust. Inconsistency dilutes brand impact and confuses customers.",
      },
      {
        heading: "Authentic Storytelling",
        body: "Customers connect with stories more than features or benefits. Share your origin story, core values, and mission in ways that resonate with your target audience. Authentic narratives create emotional bonds that transcend price competition.",
      },
      {
        heading: "Customer Experience Alignment",
        body: "Your brand promise must be reflected in every customer interaction. From initial website visit to post-purchase support, consistent experiences build brand trust and loyalty. Broken promises destroy brand credibility quickly.",
      },
      {
        heading: "Digital Brand Presence",
        body: "Online touchpoints often provide first brand experiences. Your website, social media profiles, and digital communications should immediately communicate your brand positioning and personality. Digital consistency reinforces brand recognition across platforms.",
      },
      {
        heading: "Measuring Brand Success",
        body: "Brand strength can be measured through customer surveys, social media engagement, referral rates, and price premium ability. Regular assessment helps identify brand-building opportunities and potential reputation risks.",
      },
    ],
  },
  {
    slug: "digital-marketing-mistakes-that-kill-creative-agencies",
    title: "Digital Marketing Mistakes That Kill Creative Agencies",
    category: "Digital marketing",
    date: "Sep 18, 2025",
    image: "/reference/BqRykGFSimkA59EUxX01hwIQY.jpg",
    excerpt:
      "Many agencies struggle to market themselves effectively. Avoid these mistakes and grow with confidence.",
    author: {
      name: "Lisa Johnson",
      role: "Marketing Manager",
      avatar: "/reference/eIk60oFw5Btb9sVOQs589lyTIc.png",
    },
    detailLayout: "compact",
    content: [
      {
        heading: "Focusing on Features Instead of Results",
        body: "Agencies often showcase their design process, software expertise, or creative awards rather than the business results they deliver for clients. Potential customers care more about increased sales, improved brand recognition, or competitive advantages than design methodology.",
      },
      {
        heading: "Inconsistent Content Creation",
        body: "Sporadic blog posts and irregular social media updates signal unprofessionalism and unreliability. Consistent content creation demonstrates expertise and keeps your agency visible when prospects are ready to hire creative services.",
      },
      {
        heading: "Neglecting SEO Fundamentals",
        body: "Beautiful websites mean nothing if potential clients can't find them. Basic SEO mistakes like missing meta descriptions, poor site structure, and lack of local optimization prevent agencies from appearing in relevant search results.",
      },
      {
        heading: "Generic Social Media Presence",
        body: "Posting the same content across all social platforms wastes opportunities to connect with different audience segments. LinkedIn content should focus on business results, Instagram on visual creativity, and Twitter on industry insights and quick tips.",
      },
      {
        heading: "Ignoring Email Marketing",
        body: "Many agencies rely entirely on social media and networking, missing the higher conversion potential of email marketing. Regular newsletters sharing case studies, tips, and industry insights keep your agency top-of-mind with prospects.",
      },
      {
        heading: "Poor Client Testimonials",
        body: 'Generic testimonials like "Great work, very creative!" provide no persuasive value. Effective testimonials include specific results, measurable improvements, and context about the client\'s business challenges and goals.',
      },
      {
        heading: "No Clear Call-to-Action",
        body: "Agency websites often showcase beautiful work without clearly directing visitors toward the next step. Every page should guide visitors toward scheduling consultations, downloading resources, or contacting your team.",
      },
      {
        heading: "Competing on Price",
        body: "Agencies that compete primarily on price attract clients who don't value quality work. Focus marketing messages on unique expertise, proven results, and long-term partnership value rather than low costs.",
      },
      {
        heading: "Overlooking Referral Programs",
        body: "Satisfied clients are your best marketing channel, yet most agencies have no formal referral process. Systematic referral programs with clear incentives can dramatically increase new client acquisition.",
      },
    ],
  },
  {
    slug: "from-freelancer-to-agency-a-complete-growth-guide",
    title: "From Freelancer to Agency: A Complete Growth Guide",
    category: "Website design",
    date: "Sep 18, 2025",
    image: "/reference/xs2Y0jjOeCn88JmWyTzFdbAECE.png",
    excerpt:
      "Scaling from freelancer to agency takes more than hard work, it takes strategy.",
    metaDescription:
      "Scaling from freelancer to agency takes more than hard work, it takes strategy. ",
    author: {
      name: "Ryan Anderson",
      role: "Project Manager",
      avatar: "/reference/5diKqf0U2Vk2jN3JLVedX53JBs.png",
    },
    detailLayout: "compact",
    content: [
      {
        heading: "Recognizing the Right Time",
        body: "Several indicators suggest readiness for agency transition: consistent client demand exceeding your capacity, repeated requests for services outside your core skills, and financial stability to invest in growth. Premature scaling can destroy successful freelance businesses.",
      },
      {
        heading: "Building Your First Team",
        body: "Your initial hires should complement your existing skills rather than duplicate them. If you're a designer, consider hiring a developer, copywriter, or project manager first. Contractors and part-time employees offer flexibility during early growth phases.",
      },
      {
        heading: "Systematizing Your Processes",
        body: "Your initial hires should complement your existing skills rather than duplicate them. If you're a designer, consider hiring a developer, copywriter, or project manager first. Contractors and part-time employees offer flexibility during early growth phases.",
      },
      {
        heading: "Evolving Client Relationships",
        body: "Agency clients expect different service levels than freelance clients. You'll need formal contracts, regular progress reports, dedicated account management, and professional project management tools. Higher service standards justify higher prices.",
      },
      {
        heading: "Pricing Structure Changes",
        body: "Agency pricing should reflect increased capabilities, team expertise, and service levels. Value-based pricing becomes more viable when you can deliver comprehensive solutions rather than individual services. Don't let freelance pricing habits limit agency growth.",
      },
      {
        heading: "Managing Cash Flow",
        body: "Agencies face different financial challenges than freelancers. Employee salaries, office overhead, and equipment costs create fixed expenses that must be covered regardless of project volume. Maintain larger cash reserves and establish credit lines for stability.",
      },
      {
        heading: "Marketing Your Agency",
        body: "Agency marketing emphasizes team expertise, case studies, and comprehensive capabilities rather than individual personality. Professional websites, formal case studies, and thought leadership content position your agency as an established business partner.",
      },
      {
        heading: "Legal and Administrative Changes",
        body: "Operating as an agency requires business registration, appropriate insurance coverage, employment law compliance, and professional accounting systems. These administrative foundations protect your business and enable continued growth.",
      },
    ],
  },
  {
    slug: "how-to-price-your-services-for-maximum-profit",
    title: "How to price your services for maximum profit",
    category: "Brand identity",
    date: "May 16, 2025",
    image: "/reference/AoiYQH4DGb2s9jNV9OOYfS5wnI.jpg",
    imageAlt: "1 U.S. dollar banknote",
    excerpt:
      "Set your rates right: price too low and you lose value, too high and you lose clients. Learn how to price smart.",
    author: {
      name: "Marcus Rodriguez",
      role: "Brand Strategist",
      avatar: "/reference/mv5k4A5bcoM3cCehh5WGY2vR9w.png",
    },
    detailLayout: "compact",
    content: [
      {
        heading: "Understand Your True Costs",
        body: "Most creative professionals dramatically underestimate their actual costs. Beyond obvious expenses like software and equipment, consider health insurance, retirement contributions, unpaid time spent on proposals, client revisions, and business development. Your hourly rate needs to cover all these hidden costs plus profit.",
      },
      {
        heading: "Value-Based Pricing vs. Hourly Rates",
        body: "Hourly pricing caps your earning potential and focuses clients on time rather than results. Value-based pricing ties your fee to the business impact you create. A logo that helps a startup raise funding is worth far more than the hours spent designing it.",
      },
      {
        heading: "Research Your Market",
        body: "Investigate what established professionals in your area charge for similar services. Look at agencies, freelancers, and consultants with comparable experience levels. This research provides realistic boundaries for your pricing structure.",
      },
      {
        heading: "Create Clear Service Packages",
        body: "Offering defined packages eliminates endless client negotiations and scope creep. Instead of custom quotes for every inquiry, present three clear options: essential, professional, and premium. This approach simplifies client decisions and increases average project values.",
      },
      {
        heading: "The Psychology of Pricing",
        body: "Clients often equate higher prices with better quality. Extremely low prices can actually hurt your business by signaling inexperience or desperation. Confident pricing reflects professional competence and attracts clients who value quality work.",
      },
      {
        heading: "Handling Price Objections",
        body: "When clients say your prices are too high, they're often comparing you to less experienced alternatives. Respond by emphasizing the specific business results you deliver and the risks of choosing cheaper options. Quality clients understand that professional work requires professional investment.",
      },
      {
        heading: "Regular Price Increases",
        body: "Your prices should increase annually to reflect growing experience, inflation, and improved efficiency. Existing clients may accept modest increases, while new clients will only know your current rates. Gradual increases are easier to implement than dramatic jumps.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
