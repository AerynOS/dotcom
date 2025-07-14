import ogImageSrc from "@/images/logo.png";

export const SITE = {
  title: "AerynOS",
  tagline: "Top-quality Hardware Tools",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://aerynos.com",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

export const COMMUNITY = [
  {
    title: "Matrix",
    description: "Join our community on Matrix.",
    url: "https://matrix.to/#/#aerynos:matrix.org",
    icon: "tabler:brand-matrix",
  },
  {
    title: "GitHub Discussions",
    description: "Join the conversation on GitHub.",
    url: "https://github.com/AerynOS",
    icon: "tabler:brand-github",
  },
  {
    title: "X",
    description: "Join our community on X.",
    url: "https://x.com/AerynOS_Linux",
    icon: "tabler:brand-x",
  },
];

// An array of links for navigation bar
export const NAVBAR_LINKS = [
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Download", url: "/download" },
  { name: "Documentation", url: "/docs" },
  { name: "Sponsor", url: "/sponsor" },
  { name: "Community", url: "/community" },
]

type FooterLinksType = {
  section: string
  links: { name: string; url: string }[]
}
// An array of links for footer
export const FOOTER_LINKS: FooterLinksType[] = []
