export type ProjectCategory =
  | "WordPress"
  | "WooCommerce"
  | "Apps"
  | "Mini Projects";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: ProjectCategory[];
  codeUrl?: string;
  liveUrl?: string;
  comingSoon?: boolean;
  inactiveImage?: boolean;
};

export const projects: Project[] = [
  {
    id: "flowboard",
    title: "FlowBoard",
    description:
      "A Trello-style project management app built with React, Cloudflare Workers, and Neon Postgres, designed for organizing tasks across boards, lists, and cards with a clean workflow-focused interface.",
    image: "/images/FlowBoard.png",
    tags: ["React", "Cloudflare Workers", "Neon", "PostgreSQL", "Cursor"],
    codeUrl: "https://github.com/alexlangidis/flowboard",
    liveUrl: "https://flowboard.alexlag-dev.workers.dev/",
    categories: ["Apps"],
  },
  {
    id: "greek-luxury-holidays",
    title: "Greek Luxury Holidays",
    description:
      "A premium villas website project built with WordPress and Elementor Pro, enhanced with custom CSS, JavaScript, and ACF custom snippets.",
    image: "/images/greekluxuryholidays.png",
    tags: [
      "WordPress",
      "Elementor Pro",
      "Custom CSS",
      "JavaScript",
      "ACF custom snippets",
    ],
    liveUrl: "https://greekluxuryholidays.gr/",
    categories: ["WordPress"],
  },
  {
    id: "quantum-buildings",
    title: "Quantum Buildings",
    description:
      "A professional technology project management website built using WordPress and Elementor Pro, featuring custom CSS styling and animations for a unique and polished look.",
    image: "/images/quantumbuildings.png",
    tags: ["WordPress", "Elementor Pro", "Custom CSS", "JavaScript"],
    liveUrl: "https://quantumbuildings.gr/",
    categories: ["WordPress"],
  },
  {
    id: "clickdom",
    title: "Clickdom.gr",
    description:
      "E-Commerce Website Project, built using WooCommerce and the Flatsome theme. Incorporates multiple courier and payment methods, with speed optimization.",
    image: "/images/Screenshot_12.png",
    tags: ["WordPress", "WooCommerce", "Flatsome"],
    liveUrl: "https://clickdom.gr/",
    categories: ["WordPress", "WooCommerce"],
  },
  {
    id: "seo-generator",
    title: "SEO Generator",
    description:
      "An AI-powered SEO tool demo built with Next.js that helps generate optimized page titles, meta descriptions, and keyword-focused content ideas. It is deployed on Vercel and uses the Gemini API to produce fast, practical SEO suggestions for websites and landing pages.",
    image: "/images/Screenshot_45.png",
    tags: ["Next Js", "Tailwind", "Shadcn", "Vercel", "Gemini API"],
    codeUrl: "https://github.com/alexlangidis/workspace/tree/main/seo-generator",
    liveUrl: "https://workspace-iota-peach.vercel.app/",
    categories: ["Apps"],
  },
  {
    id: "todo-app-v2",
    title: "Todo App v2",
    description:
      "An improved version of a todo application built with React, TypeScript, Tailwind CSS, and Firebase for real-time data management. Features include task creation, editing, deletion, and user authentication.",
    image: "/images/Screenshot_46.png",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
    codeUrl: "https://github.com/alexlangidis/todo-app-v2",
    liveUrl: "https://alexlangidis.github.io/todo-app-v2/",
    categories: ["Apps"],
  },
  {
    id: "edem",
    title: "EdemRestaurant.gr",
    description:
      "Built using WordPress and Elementor in two languages. Provides visitors with the ability to view restaurant and cafe menus and contact the restaurant.",
    image: "/images/Screenshot_7.png",
    tags: ["WordPress", "Elementor"],
    liveUrl: "https://www.edemrestaurant.gr/",
    categories: ["WordPress"],
  },
  {
    id: "athena",
    title: "AthenaPrivateTours.com",
    description:
      "Built using WordPress and Divi for promoting tours. Includes descriptions of each tour and a booking form.",
    image: "/images/Screenshot_2.png",
    tags: ["WordPress", "Divi"],
    liveUrl: "https://athenaprivatetours.com/",
    categories: ["WordPress"],
  },
  {
    id: "razer-clone",
    title: "Clone Razer Homepage",
    description:
      "A fully responsive clone of the Razer homepage built with HTML and CSS for practice.",
    image: "/images/Screenshot_5.png",
    tags: ["HTML", "CSS"],
    codeUrl: "https://github.com/alexlangidis/workspace/tree/main/Razer",
    liveUrl: "https://alexlangidis.github.io/workspace/Razer/",
    categories: ["Mini Projects"],
  },
  {
    id: "discord-clone",
    title: "Clone Discord Homepage",
    description:
      "A clone of the Discord homepage using HTML, Tailwind CSS, and jQuery.",
    image: "/images/Screenshot_6.png",
    tags: ["HTML", "Tailwind", "jQuery"],
    codeUrl:
      "https://github.com/alexlangidis/tailwind-projects/tree/main/Discord",
    liveUrl: "https://alexlangidis.github.io/tailwind-projects/Discord/",
    categories: ["Mini Projects"],
  },
  {
    id: "defi-site",
    title: "DeFi Homepage Site",
    description: "A DeFi homepage built using React and CoinGecko API.",
    image: "/images/Screenshot_9.png",
    tags: ["React", "API", "CSS"],
    codeUrl: "https://github.com/alexlangidis/defi-site",
    liveUrl: "https://sparkly-sprinkles-6270c8.netlify.app/",
    categories: ["Mini Projects"],
  },
  {
    id: "frontend-mentor",
    title: "40+ Mini Projects",
    description:
      "Over 40 mini projects from Frontend Mentor, ranging from newbie to junior level, using HTML, CSS, JS, Tailwind, and SCSS.",
    image: "/images/Screenshot_1.png",
    tags: ["HTML", "CSS", "JS", "Tailwind", "SCSS"],
    codeUrl: "https://github.com/alexlangidis/junior-frontendmentor",
    liveUrl: "https://www.frontendmentor.io/profile/alexlangidis?tab=solutions",
    categories: ["Mini Projects"],
  },
];
