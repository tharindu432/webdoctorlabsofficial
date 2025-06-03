/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true, // Generates robots.txt file
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/private-page'],
};
