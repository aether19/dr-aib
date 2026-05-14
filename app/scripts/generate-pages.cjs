const fs = require('fs');
const path = require('path');

// Read the built index.html as template
const distDir = path.resolve(__dirname, '../dist');
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// All routes that need static HTML files
const routes = [
  '/',
  '/docteur',
  '/contact',
  // All procedure pages
  '/chirurgie/rhinoplastie',
  '/chirurgie/prothese-mammaire',
  '/chirurgie/reduction-mammaire',
  '/chirurgie/remonter-seins',
  '/chirurgie/liposuccion',
  '/chirurgie/gynecomastie',
  '/chirurgie/abdominoplastie',
  '/chirurgie/silhouette-lift',
  '/chirurgie/reconstruction-plastique',
  '/chirurgie/lifting',
  '/chirurgie/lifting-cervico-facial',
  '/chirurgie/blepharoplastie',
  '/chirurgie/oreille-decollees',
  '/chirurgie/greffe-capilaire',
  '/chirurgie/botox',
  '/chirurgie/acide-hyaluronique',
  '/chirurgie/peeling',
  '/chirurgie/cerne',
  '/chirurgie/microdermabrasion',
  '/chirurgie/apres-chirurgie',
  '/chirurgie/grossesse',
];

// Generate HTML for each route
routes.forEach((route) => {
  // For root, already exists
  if (route === '/') return;

  // Create directory structure: dist/route/index.html
  const dirPath = path.join(distDir, route);
  fs.mkdirSync(dirPath, { recursive: true });

  // Write the HTML file with the template
  // The SPA router will handle client-side navigation
  fs.writeFileSync(path.join(dirPath, 'index.html'), template);
  console.log(`Generated: ${route}/index.html`);
});

console.log(`\nGenerated ${routes.length - 1} static pages (+ existing index.html)`);
console.log('Total pages:', routes.length);
