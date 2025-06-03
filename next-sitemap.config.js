/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webdoctorlabs.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin'],
  outDir: './public', 
};
