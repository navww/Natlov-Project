// This script downloads placeholder images for the Natlov Technologies website
// Run this script with Node.js to download the images

const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'project1.png', text: 'Shri GogaJi SoftIn Services' },
  { name: 'project3.png', text: 'Savitri Textiles' },
  { name: 'isa.png', text: 'Indian Survival Academy' },
  { name: 'project2v2.png', text: 'App Usage Tracker' },
  { name: 'about.png', text: 'About section' },
  { name: 'inline-logo-1.png', text: 'Natlov Logo' },
  { name: 'ItService.png', text: 'IT Services' },
  { name: 'itsupport.png', text: 'Technical Support' },
  { name: '8df690172c37da6afc3b32ae185a5767.png', text: 'Staycation' }
];

// Create directory if it doesn't exist
const dir = path.join(__dirname);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Download each image
images.forEach(image => {
  const url = `https://via.placeholder.com/800x600?text=${encodeURIComponent(image.text)}`;
  const filePath = path.join(dir, image.name);
  
  console.log(`Downloading ${image.name}...`);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${image.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${image.name}: ${err.message}`);
  });
});

console.log('All downloads started. Check the directory for the images.'); 