const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  url: "https://cloudfalcon.io",
  baseUrl: "/",
  title: "CloudFalcon",
  tagline: "Automated and Secure Production-grade IaC Deployments on AWS",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "cloudfalcon",
  projectName: "docusaurus",
  deploymentBranch: "main",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        sitemap: {},
        gtag: {
          trackingID: "G-4M3NDTZQDW",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/cloudfalcon/docusaurus/edit/master/website/",
        },
        blog: {
          blogTitle: "CloudFalcon Blog",
          blogDescription: "DevSecOps Blog",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All Posts",
          showReadingTime: true,
          editUrl:
            "https://github.com/cloudfalcon/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
  ],
  themeConfig: {
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'N5QXBXOP5V',
    //   apiKey: '20ebcd9fbcf7377916800db33e4c0223',
    //   indexName: 'cloudfalcon',
    //   contextualSearch: true,
    //   externalUrlRegex: 'cloudfalcon\\.io',
    //   searchParameters: {},
    //   searchPagePath: 'search',
    // },
    navbar: {
      title: "",
      logo: {
        alt: "CF",
        src: "img/logo/cf_logo_transparent.svg",
        // width: 70,
        // height: 70,
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        // { to: "/clients", label: "Clients", position: "left" },
        // { to: "/courses", label: "Courses", position: "left" },
        // { to: "/podcasts", label: "Podcasts", position: "left" },
        // { to: "/workshops", label: "Workshops", position: "left" },
        // { to: "/slides", label: "Slides", position: "left" },
        // { to: "/team", label: "Team", position: "left" },
        {
          href: "https://www.youtube.com/channel/UCbwcohrMkjVdG2dxHPHfElw",
          position: "right",
          className: "fab fa-youtube fa-2x",
        },
        {
          href: "https://www.linkedin.com/in/mhmdio/",
          position: "right",
          className: "fab fa-linkedin fa-2x",
        },
        {
          href: "https://twitter.com/mhmdyahya87",
          position: "right",
          className: "fab fa-twitter fa-2x",
        },
        {
          href: "https://cloudfalcon.slack.com",
          position: "right",
          className: "fab fa-slack fa-2x",
        },
        {
          href: "https://github.com/cloudfalcon",
          position: "right",
          className: "fab fa-github fa-2x",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "LinkedIn",
      //         href: "https://www.linkedin.com/company/cloudfalcon",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/mhmdyahya87",
      //       },
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/users/5532207/mohammed-yahya",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Introduction",
      //         to: "/docs/intro",
      //         position: "right",
      //       },
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/cloudfalcon/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      logo: {
        alt: "CF",
        src: "img/logo/cf_logo_transparent.svg",
        width: 300,
        height: 300,
      },
      copyright: `Copyright © 2015 - ${new Date().getFullYear()} CloudFalcon.<br>
      <FontAwesomeIcon icon={faCoffee} /> Built with
      <a href="https://Docusaurus.io">Docusaurus</a>, Hosted on
      <a href="https://netlify.com/">Netlify</a>, Protected with
      <a href="https://cloudflare.com/">Cloudflare</a>`,
    },
    prism: {
      additionalLanguages: ["hcl"],
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
  },
};
