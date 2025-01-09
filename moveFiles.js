const fs = require('fs');
const path = require('path');

// Define the source and destination directories
const sourceDir = path.join(__dirname, 'out');
const destDir = path.join(__dirname, 'out', 'sanyam');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

// Move files from sourceDir to destDir
fs.readdirSync(sourceDir).forEach((file) => {
  const sourceFile = path.join(sourceDir, file);
  const destFile = path.join(destDir, file);

  if (file !== 'sanyam') {
    fs.renameSync(sourceFile, destFile);
  }
});

console.log('Files moved successfully!');
