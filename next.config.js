const GH_PAGE_SLUG = "/landing-page-with-ssr-and-data-fetching";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*
    GitHub pages store website files under url that looks like this:
    https://username.github.io/repo-name/

    But Next.js vt default prepares absolute assets urls that expect that these assets are here:
    https://username.github.io/
  */
  basePath: GH_PAGE_SLUG,
};

module.exports = nextConfig;
