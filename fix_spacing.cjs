const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      if (content.includes('py-24 lg:py-32')) {
        content = content.replace(/py-24 lg:py-32/g, 'py-16 lg:py-24');
        modified = true;
      }
      if (content.includes('py-24 bg-')) {
        content = content.replace(/py-24 bg-/g, 'py-16 lg:py-24 bg-');
        modified = true;
      }
      if (content.includes('pt-32 pb-16 lg:pt-40 lg:pb-24')) {
        content = content.replace(/pt-32 pb-16 lg:pt-40 lg:pb-24/g, 'pt-28 pb-12 lg:pt-32 lg:pb-16');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(srcDir);
