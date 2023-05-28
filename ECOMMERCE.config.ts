const BLOG = {
  title: "Chomerce",
  ArTitle: "هامش",
  author: "Abderrahim",
  link: "https://chomerce.vercel.app",
  email: "abderrahimaneddam1@gmail.com",
  description: "هامش هي مدونة شخصية تهدف الى اغناء المحتوى العربي ",
  lang: "ar-EG", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: "egypt/kahera", // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: "auto", // ['light', 'dark', 'auto'],
  font: "sans-serif", // ['sans-serif', 'serif']
  lightBackground: "#F6F8FA", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#212936", // use hex value, don't forget '#'
  path: "", // leave this empty unless you want to deploy Notionic in a folder
  since: 2023, // If leave this empty, current year will be used.
  showLoadingSpinner: false,
  primaryColor: "#0f766e",

  autoCollapsedNavBar: true, // The automatically collapsed navigation bar
  pagesIcon: "/logo.svg",
  ogImageGenerateHost: "og-zl.vercel.app", // The link to generate OG image, don't end with a slash
  socialLink: {
    twitter: "https://twitter.com/iabdrahimz",
    github: "https://github.com/iabdrahim",
    instagram: "https://instagram.com/iabderrahim",
  },

  seo: {
    keywords: [
      "hamesh",
      "مدونة عربية",
      "Abderrahim aneddam",
      "hamesh Blog",
      "مدونة هامش",
    ],
    googleSiteVerification: "5EySfeUGoEZeYFK_SsE2qJD_ZcX4S9e_YmkrEtpZKZs", // Remove the value or replace it with your own google site verification code
  },

  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};

export default BLOG;
