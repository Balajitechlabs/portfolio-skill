import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  onMouseEnter,
  className = "",
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  // Position of mouse cursor relative to the center of the button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configurations for smooth physical pull effect
  const springOptions = { stiffness: 150, damping: 15, mass: 0.1 };
  const pullX = useSpring(mouseX, springOptions);
  const pullY = useSpring(mouseY, springOptions);

  // Map coordinate offsets to actual pixel displacement (max 20px)
  const x = useTransform(pullX, [-100, 100], [-20, 20]);
  const y = useTransform(pullY, [-100, 100], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Coordinates relative to the center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-medium select-none overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Outer border & styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4d7cff] to-[#7f9dff] opacity-80 rounded-lg" />
      
      {/* Inner glass overlay for texture */}
      <div className="absolute inset-[1px] bg-[#0c1224] rounded-[7px] flex items-center justify-center transition-colors duration-300 hover:bg-[#0c1224]/80" />

      {/* Button content */}
      <span className="relative z-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#d6e4ff]">
        {children}
      </span>
    </motion.button>
  );
};

export default MagneticButton;
