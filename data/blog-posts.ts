export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image: string;
  contentHtml: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-wood-for-dining-table",
    tag: "Wood Selection",
    title: "How to Choose the Right Wood for Your Dining Table",
    excerpt:
      "Oak, walnut, teak, or pine? The right timber balances beauty, durability, and maintenance.",
    date: "2025-01-14",
    readTime: "6 min read",
    featured: true,
    image: "/portfolio/pexels-zumrad-normatova-3352466-11090145.jpg",
    contentHtml:
      "<p>Choosing timber is about lifestyle as much as appearance. Oak is durable for family use, walnut gives dramatic depth, and teak performs exceptionally in variable climates.</p><p>Before deciding, always test samples in your home lighting. Morning and evening light can shift tone significantly.</p><h2>Studio recommendation</h2><p>For most homes, oak with hardwax oil gives the best balance of resilience, repairability, and long-term character.</p>",
  },
  {
    slug: "joinery-secrets-for-lasting-furniture",
    tag: "Craft Techniques",
    title: "Joinery Secrets That Separate Good Furniture from Great",
    excerpt:
      "Strong furniture is built from invisible decisions: mortise-and-tenon, dovetails, and precise fit.",
    date: "2024-12-28",
    readTime: "8 min read",
    image: "/portfolio/pexels-james-frid-81279-1098764.jpg",
    contentHtml:
      "<p>Joinery is the structural language of furniture. A piece can look beautiful and still fail if the joints are weak.</p><p>Ask your carpenter how legs and rails are connected. Quality answers include floating tenons, draw-bore pinning, or hand-fit dovetails.</p>",
  },
  {
    slug: "integrating-custom-woodwork-in-renovations",
    tag: "Home Design",
    title: "Integrating Custom Woodwork into a Home Renovation",
    excerpt:
      "Bring in your carpenter early to avoid expensive redesigns and awkward built-ins.",
    date: "2024-11-15",
    readTime: "5 min read",
    image: "/portfolio/pexels-kseniachernaya-6638801.jpg",
    contentHtml:
      "<p>The best built-ins feel architectural, not added later. That only happens when carpentry is planned before walls and electrical positions are finalized.</p><p>Coordinate timber finish, wall color, and lighting together to avoid mismatched results.</p>",
  },
  {
    slug: "hardwood-furniture-care-guide",
    tag: "Maintenance",
    title: "A Practical Guide to Caring for Hardwood Furniture",
    excerpt:
      "Simple maintenance habits can extend the life of handcrafted furniture by decades.",
    date: "2024-10-02",
    readTime: "4 min read",
    image: "/portfolio/pexels-enginakyurt-2098596.jpg",
    contentHtml:
      "<p>Use mild cleaners, wipe spills quickly, and avoid silicone polish. Oiled surfaces usually need one maintenance coat yearly.</p><p>Seasonal movement is normal; timber expands and contracts naturally with humidity changes.</p>",
  },
  {
    slug: "inside-the-carpentry-workshop",
    tag: "Behind the Studio",
    title: "Inside the Workshop: Tools That Define the Craft",
    excerpt:
      "A closer look at the machines and hand tools behind precision woodwork.",
    date: "2024-09-18",
    readTime: "7 min read",
    image: "/portfolio/pexels-tima-miroshnichenko-6790751.jpg",
    contentHtml:
      "<p>Machines handle repeatable accuracy, but finish quality still comes from hand tools and sharp edges.</p><p>The most important station in any serious workshop is sharpening. Sharp tools are safer and cleaner.</p>",
  },
];
