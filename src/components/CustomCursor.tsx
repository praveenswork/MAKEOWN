import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Use framer-motion motion values for performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Configure smooth springs for the trailing circle
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const touchCheck = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Setup hover listeners for interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive-element');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Observe document for dynamic element changes to bind hover effects
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Tiny precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Trailing sleek ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/40 rounded-full pointer-events-none z-50 backdrop-blur-[1px] custom-cursor"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.0)',
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
};
