const ECOMMERCE = {
  title: "chomerce",
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};

export default ECOMMERCE;
