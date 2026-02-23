export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "01",
    name: "Custom Furniture",
    description:
      "Dining tables, chairs, beds, and statement pieces designed around your dimensions and lifestyle.",
    icon: "Chair",
  },
  {
    id: "02",
    name: "Bespoke Cabinetry",
    description:
      "Kitchen cabinets, wardrobes, and built-ins crafted to make every millimetre purposeful.",
    icon: "Cabinet",
  },
  {
    id: "03",
    name: "Architectural Joinery",
    description:
      "Staircases, panelling, doors, and window frames where structure and craft become one.",
    icon: "Joinery",
  },
  {
    id: "04",
    name: "Restoration & Repair",
    description:
      "Careful restoration of antiques and cherished pieces while honoring their original character.",
    icon: "Restore",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "solid-oak-dining-table",
    title: "Solid Oak Dining Table",
    category: "Custom Furniture",
    summary: "Eight-seater table with hand-finished matte oil and chamfered edge detailing.",
    image: "/portfolio/pexels-zumrad-normatova-3352466-11090145.jpg",
    alt: "Solid oak custom dining table in a warm interior",
  },
  {
    slug: "walnut-kitchen-fit-out",
    title: "Walnut Kitchen Fit-Out",
    category: "Cabinetry",
    summary: "Full kitchen cabinetry with hidden storage and soft-close hardware.",
    image: "/portfolio/pexels-kseniachernaya-6638801.jpg",
    alt: "Walnut kitchen cabinetry with custom joinery",
  },
  {
    slug: "hardwood-staircase",
    title: "Hardwood Staircase",
    category: "Architectural Joinery",
    summary: "Floating staircase build with precision-fitted balustrades and durable finish.",
    image: "/portfolio/pexels-james-frid-81279-1098764.jpg",
    alt: "Custom hardwood staircase and joinery details",
  },
  {
    slug: "teak-reading-chair",
    title: "Teak Reading Chair",
    category: "Furniture",
    summary: "Ergonomic teak lounge chair handcrafted for comfort and longevity.",
    image: "/portfolio/pexels-enginakyurt-2098596.jpg",
    alt: "Handcrafted teak reading chair",
  },
  {
    slug: "antique-bureau-restoration",
    title: "Antique Bureau Restoration",
    category: "Restoration",
    summary: "Period-accurate restoration preserving original detailing and hardware.",
    image: "/portfolio/pexels-tima-miroshnichenko-6790751.jpg",
    alt: "Restored antique bureau with polished wood finish",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Tinashe built us a dining table that has become the centrepiece of our home. The quality is extraordinary.",
    author: "Amara Moyo",
    role: "Homeowner, Harare",
    initials: "AM",
  },
  {
    id: "t2",
    quote:
      "Our kitchen has been completely transformed. The cabinetry fits perfectly and the craftsmanship is beyond what we expected.",
    author: "David Ncube",
    role: "Property Developer",
    initials: "DN",
  },
  {
    id: "t3",
    quote:
      "The attention to detail and communication throughout the project was exceptional. I recommend the studio without hesitation.",
    author: "Ruth Chikowore",
    role: "Interior Designer",
    initials: "RC",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Consultation",
    description: "Free initial meeting to understand your vision, space, and budget.",
  },
  {
    id: "02",
    title: "Design & Quote",
    description: "Detailed drawings and an itemised quote with transparent pricing.",
  },
  {
    id: "03",
    title: "Material Selection",
    description: "Choose timber, finishes, and hardware from sustainable options.",
  },
  {
    id: "04",
    title: "Crafting",
    description: "Built in our studio with regular updates and precision checks.",
  },
  {
    id: "05",
    title: "Delivery & Fit",
    description: "Professional installation and post-fit care guidance.",
  },
];

export const marqueeItems = [
  "Custom Furniture",
  "Bespoke Cabinetry",
  "Architectural Joinery",
  "Home Restoration",
  "Hardwood Flooring",
  "Built-in Wardrobes",
  "Kitchen Fitting",
  "Fine Woodwork",
];
