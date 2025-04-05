# Natlov Technologies Website

A modern, responsive website for Natlov Technologies, showcasing their services, projects, and company information.

## Overview

This project is a React-based website for Natlov Technologies, featuring:

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Sections for About, Services, Projects, and Contact information
- Integration with Natlov's branding and visual identity

## Technologies Used

- **React**: Frontend framework
- **CSS**: Styling with custom animations and responsive design
- **Framer Motion**: For smooth animations and transitions
- **React Router**: For navigation between pages

## Project Structure

```
natlov-home/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer/
│   │   │   └── Navbar/
│   │   └── ...
│   ├── pages/
│   │   ├── About/
│   │   ├── Career/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Staycation/
│   │   └── TechnicalService/
│   ├── App.jsx
│   └── index.js
└── package.json
```

## Features

### Home Page
- Hero carousel with animated slides
- About section with company information
- Services section showcasing technical offerings
- Projects section highlighting past work
- Staycation section for special promotions

### Contact Page
- Contact form for inquiries
- Company information and location details
- Interactive map integration

### Other Pages
- Career opportunities
- Technical service details
- Staycation information

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/natlov-home.git
   ```

2. Navigate to the project directory:
   ```
   cd natlov-home
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000`

## Deployment

The website can be deployed to any static hosting service such as:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Customization

### Changing Images
All images are stored in the public directory or loaded from the Natlov website. To update images:

1. Replace the image files in the public directory
2. Update image paths in the respective components

### Modifying Content
Content can be updated by editing the text in the respective components:

- Home page content: `src/pages/Home/Home.jsx`
- Contact information: `src/pages/Contact/Contact.jsx`
- Other page content: Navigate to the respective component files

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For any inquiries about this project, please contact Natlov Technologies at [contact@natlov.com](mailto:contact@natlov.com). 