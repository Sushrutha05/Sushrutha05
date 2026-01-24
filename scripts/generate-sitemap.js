import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SiteConfig } from '../src/config/site-config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITE_URL = SiteConfig.metadata.siteUrl.replace(/\/$/, '');

const routes = [
    '/',
    '/work',
    '/certifications',
    '/contact'
];

const projects = SiteConfig.projects.map(p => `/projects/${p.id}`);

const allRoutes = [...routes, ...projects];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated');

const robots = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots);
console.log('robots.txt generated');
