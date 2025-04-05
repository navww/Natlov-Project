// This script sets up the image directories and files for the Natlov Technologies website
// Run this script with Node.js to create the necessary directories and files

const fs = require('fs');
const path = require('path');

// Define the directories to create
const directories = [
  'images',
  'images/home_app'
];

// Define the files to create
const files = [
  {
    path: 'images/index.html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Natlov Technologies - Images</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 30px;
    }
    .button {
      display: inline-block;
      background-color: #FA9939;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Natlov Technologies - Images</h1>
  <p>This directory contains images for the Natlov Technologies website.</p>
  <p>Please check the <a href="home_app/placeholder.html">placeholder images</a> for reference.</p>
  <a href="../" class="button">Back to Home</a>
</body>
</html>`
  },
  {
    path: 'images/home_app/placeholder.js',
    content: `// This is a placeholder file to ensure the directory is not empty
// In a real project, you would replace these with actual images

// Required images:
// 1. project1.png - Shri GogaJi SoftIn Services
// 2. project3.png - Savitri Textiles
// 3. isa.png - Indian Survival Academy
// 4. project2v2.png - App Usage Tracker
// 5. about.png - About section image
// 6. inline-logo-1.png - Company logo
// 7. ItService.png - IT Services section
// 8. itsupport.png - Technical Support section
// 9. 8df690172c37da6afc3b32ae185a5767.png - Staycation section

console.log('Placeholder file for images directory');`
  }
];

// Create directories
directories.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }
});

// Create files
files.forEach(file => {
  const filePath = path.join(__dirname, file.path);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file.content);
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
});

console.log('Setup complete!'); 