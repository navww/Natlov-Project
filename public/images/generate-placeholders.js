const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directories if they don't exist
const createDirectories = () => {
  const dirs = [
    'public/images',
    'public/images/logos',
    'public/images/backgrounds',
    'public/images/icons',
    'public/images/team',
    'public/images/services',
    'public/images/projects',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Generate logo images
const generateLogos = () => {
  const logos = [
    { name: 'inline-logo-1.png', width: 200, height: 50, text: 'NatLov', color: '#FA9939' },
    { name: 'inline-logo-2.png', width: 200, height: 50, text: 'NatLov', color: '#FFFFFF' },
    { name: 'logo-dark.png', width: 200, height: 200, text: 'NL', color: '#FA9939' },
    { name: 'logo-light.png', width: 200, height: 200, text: 'NL', color: '#FFFFFF' },
  ];

  logos.forEach(logo => {
    const canvas = createCanvas(logo.width, logo.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = logo.color === '#FFFFFF' ? '#1a1a1a' : '#FFFFFF';
    ctx.fillRect(0, 0, logo.width, logo.height);

    // Text
    ctx.fillStyle = logo.color;
    ctx.font = `bold ${logo.height * 0.6}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(logo.text, logo.width / 2, logo.height / 2);

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join('public/images/logos', logo.name), buffer);
    console.log(`Generated logo: ${logo.name}`);
  });
};

// Generate background images
const generateBackgrounds = () => {
  const backgrounds = [
    { name: 'hero-bg.jpg', width: 1920, height: 1080, color: '#f5f5f5' },
    { name: 'about-bg.jpg', width: 1920, height: 1080, color: '#e0e0e0' },
    { name: 'services-bg.jpg', width: 1920, height: 1080, color: '#f0f0f0' },
    { name: 'contact-bg.jpg', width: 1920, height: 1080, color: '#e8e8e8' },
  ];

  backgrounds.forEach(bg => {
    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = bg.color;
    ctx.fillRect(0, 0, bg.width, bg.height);

    // Pattern
    ctx.strokeStyle = '#dddddd';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < bg.width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, bg.height);
      ctx.stroke();
    }
    
    for (let i = 0; i < bg.height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(bg.width, i);
      ctx.stroke();
    }

    // Save the image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join('public/images/backgrounds', bg.name), buffer);
    console.log(`Generated background: ${bg.name}`);
  });
};

// Generate service images
const generateServiceImages = () => {
  const services = [
    { name: 'it-services.jpg', width: 800, height: 600, text: 'IT Services', color: '#FA9939' },
    { name: 'technical-support.jpg', width: 800, height: 600, text: 'Technical Support', color: '#FA9939' },
    { name: 'staycation.jpg', width: 800, height: 600, text: 'Staycation', color: '#FA9939' },
    { name: 'contact-us.jpg', width: 800, height: 600, text: 'Contact Us', color: '#FA9939' },
  ];

  services.forEach(service => {
    const canvas = createCanvas(service.width, service.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, service.width, service.height);

    // Text
    ctx.fillStyle = service.color;
    ctx.font = `bold ${service.height * 0.1}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(service.text, service.width / 2, service.height / 2);

    // Save the image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join('public/images/services', service.name), buffer);
    console.log(`Generated service image: ${service.name}`);
  });
};

// Generate team member images
const generateTeamImages = () => {
  const team = [
    { name: 'team-1.jpg', width: 400, height: 400, text: 'Team 1', color: '#FA9939' },
    { name: 'team-2.jpg', width: 400, height: 400, text: 'Team 2', color: '#FA9939' },
    { name: 'team-3.jpg', width: 400, height: 400, text: 'Team 3', color: '#FA9939' },
    { name: 'team-4.jpg', width: 400, height: 400, text: 'Team 4', color: '#FA9939' },
  ];

  team.forEach(member => {
    const canvas = createCanvas(member.width, member.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, member.width, member.height);

    // Circle for avatar
    ctx.fillStyle = member.color;
    ctx.beginPath();
    ctx.arc(member.width / 2, member.height / 2, member.width / 3, 0, Math.PI * 2);
    ctx.fill();

    // Text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${member.height * 0.1}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(member.text, member.width / 2, member.height / 2);

    // Save the image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join('public/images/team', member.name), buffer);
    console.log(`Generated team image: ${member.name}`);
  });
};

// Main function
const main = () => {
  console.log('Generating placeholder images...');
  createDirectories();
  generateLogos();
  generateBackgrounds();
  generateServiceImages();
  generateTeamImages();
  console.log('All images generated successfully!');
};

main(); 