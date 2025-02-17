// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Colaborate", url: "/colaborate" },
];

type FooterLinksType = {
  section: string;
  links: { name: string; url: string }[];
};
// An array of links for footer
const footerLinks : FooterLinksType[] = [
  // {
  //   section: "Ecosystem",
  //   links: [
  //     { name: "Documentation", url: "/welcome-to-docs/" },
  //     { name: "Tools & Equipment", url: "/products" },
  //     { name: "Construction Services", url: "/services" },
  //   ],
  // },
  // {
  //   section: "Company",
  //   links: [
  //     { name: "About us", url: "#" },
  //     { name: "Blog", url: "/blog" },
  //     { name: "Careers", url: "#" },
  //     { name: "Customers", url: "#" },
  //   ],
  // },
] as any[];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://x.com/AerynOS_Project",
  github: "https://github.com/AerynOS",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};