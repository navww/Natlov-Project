import { motion } from 'framer-motion';
import { hover, tap } from '../../../utils/animations';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  ...props
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const widthClass = fullWidth ? 'btn-full-width' : '';

  return (
    <motion.button
      className={`${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={hover}
      whileTap={tap}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button; 