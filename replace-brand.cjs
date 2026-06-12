const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git') && !file.includes('prisma')) {
             walk(file, (err, res) => {
              results = results.concat(res);
              if (!--pending) done(null, results);
            });
          } else {
            if (!--pending) done(null, results);
          }
        } else {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.cjs')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('d:/Proyek MT/konsultanpbgslf.id', (err, results) => {
  if (err) throw err;
  let replacedFiles = [];
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('klikpbgslf.id')) {
      content = content.replace(/klikpbgslf.id/g, 'klikpbgslf.id');
      fs.writeFileSync(file, content, 'utf8');
      replacedFiles.push(file.replace('d:\\Proyek MT\\konsultanpbgslf.id\\', ''));
    }
  });
  console.log('Replaced klikpbgslf.id in:', replacedFiles.join(', '));
});
