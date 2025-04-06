import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import './Logo.css';

const Logo = ({ size = 'medium', variant = 'default', className = '', linkTo = '/' }) => {
  const { isDarkMode } = useTheme();
  
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium',
    large: 'logo-large'
  };
  
  const variantClasses = {
    default: isDarkMode ? 'logo-dark' : 'logo-light',
    gradient: isDarkMode ? 'logo-gradient-dark' : 'logo-gradient-light',
    animated: 'logo-animated',
    '3d': 'logo-3d',
    glow: 'logo-glow'
  };
  
  const logoClass = `logo ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <Link to={linkTo} className={logoClass}>
      <motion.img
        src="https://www.natlov.com/static/images/inline-logo-1.png"
        alt="NatLov Logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="logo-image"
      />
    </Link>
  );
};

export default Logo; 