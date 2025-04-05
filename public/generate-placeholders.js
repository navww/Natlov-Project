// This script generates placeholder images for the Natlov Technologies website
// Run this script with Node.js to generate the placeholder images

const fs = require('fs');
const path = require('path');
const https = require('https');

// Define the images to generate
const images = [
  {
    name: 'project1.png',
    text: 'Shri GogaJi SoftIn Services',
    width: 800,
    height: 600
  },
  {
    name: 'project3.png',
    text: 'Savitri Textiles',
    width: 800,
    height: 600
  },
  {
    name: 'isa.png',
    text: 'Indian Survival Academy',
    width: 800,
    height: 600
  },
  {
    name: 'project2v2.png',
    text: 'App Usage Tracker',
    width: 800,
    height: 600
  },
  {
    name: 'about.png',
    text: 'About Natlov Technologies',
    width: 800,
    height: 600
  },
  {
    name: 'inline-logo-1.png',
    text: 'Natlov Technologies Logo',
    width: 200,
    height: 50
  },
  {
    name: 'ItService.png',
    text: 'IT Services',
    width: 800,
    height: 600
  },
  {
    name: 'itsupport.png',
    text: 'Technical Support',
    width: 800,
    height: 600
  },
  {
    name: '8df690172c37da6afc3b32ae185a5767.png',
    text: 'Staycation',
    width: 800,
    height: 600
  }
];

// Create the directory if it doesn't exist
const imageDir = path.join(__dirname, 'images', 'home_app');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
  console.log(`Created directory: ${imageDir}`);
}

// Function to download an image
function downloadImage(image) {
  const url = `https://placehold.co/${image.width}x${image.height}/FA9939/FFFFFF.png?text=${encodeURIComponent(image.text)}`;
  const filePath = path.join(imageDir, image.name);

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${image.name}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${image.name}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => reject(err));
      });
    }).on('error', reject);
  });
}

// Download all images
Promise.all(images.map(downloadImage))
  .then(() => console.log('All images downloaded successfully!'))
  .catch((error) => console.error('Error downloading images:', error)); 