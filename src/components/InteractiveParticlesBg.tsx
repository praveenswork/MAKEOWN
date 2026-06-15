import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  neonColor: string;
}

export const InteractiveParticlesBg: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseRef = useRef({ x: -1000, y: -1000, isDragging: false });

  // Handle Resize using ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeTimeout: NodeJS.Timeout;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        
        // Debounce resize to prevent continuous re-initialization during quick resizing
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          setDimensions({ width, height });
        }, 100);
      }
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Update canvas size in response to dimension changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
  }, [dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Build adaptive particle config based on viewport size
    const isMobile = dimensions.width < 768;
    const particleCount = isMobile ? 35 : 75;
    const particles: Particle[] = [];

    const colors = theme === 'dark' 
      ? ['#2997ff', '#a1a1a6', '#30b0c7', '#bf5af2', '#ff9f0a'] // Pristine Apple-style premium glow
      : ['#0071e3', '#86868b', '#00d2ff', '#af52de', '#b55000']; // Perfect premium vibrant light theme accents

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.2,
        alpha: Math.random() * 0.4 + 0.3,
        neonColor: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Render subtle underlying ambient mesh gradients onto the canvas
      const ambientGradients = theme === 'dark' ? [
        { x: dimensions.width * 0.3, y: dimensions.height * 0.2, r: isMobile ? 120 : 250, color: 'rgba(99, 102, 241, 0.03)' },
        { x: dimensions.width * 0.7, y: dimensions.height * 0.7, r: isMobile ? 150 : 300, color: 'rgba(236, 72, 153, 0.02)' },
      ] : [
        { x: dimensions.width * 0.3, y: dimensions.height * 0.2, r: isMobile ? 120 : 250, color: 'rgba(99, 102, 241, 0.02)' },
        { x: dimensions.width * 0.7, y: dimensions.height * 0.7, r: isMobile ? 150 : 300, color: 'rgba(56, 189, 248, 0.02)' },
      ];

      for (const grad of ambientGradients) {
        const radGrad = ctx.createRadialGradient(grad.x, grad.y, 0, grad.x, grad.y, grad.r);
        radGrad.addColorStop(0, grad.color);
        radGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = radGrad;
        ctx.fillRect(grad.x - grad.r, grad.y - grad.r, grad.r * 2, grad.r * 2);
      }

      // 1. Draw Global Base Grid (Sleek Apple style)
      const gridSpacing = 40;
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' 
        ? 'rgba(255, 255, 255, 0.015)' 
        : 'rgba(0, 0, 0, 0.02)';
      ctx.lineWidth = 1;

      for (let x = 0; x < dimensions.width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
      }
      for (let y = 0; y < dimensions.height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
      }
      ctx.stroke();

      const mouse = mouseRef.current;

      // 2. Interactive Neon Grid Glow around Mouse position
      if (mouse.x !== -1000 && mouse.y !== -1000) {
        ctx.save();
        const glowRadius = isMobile ? 120 : 180;
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
        
        if (theme === 'dark') {
          glowGrad.addColorStop(0, 'rgba(41, 151, 255, 0.28)'); // Premium Blue neon
          glowGrad.addColorStop(0.4, 'rgba(48, 176, 199, 0.14)'); // Aqua neon intensity
          glowGrad.addColorStop(0.8, 'rgba(191, 90, 242, 0.04)'); // Violet neon trail
          glowGrad.addColorStop(1, 'transparent');
        } else {
          glowGrad.addColorStop(0, 'rgba(0, 113, 227, 0.20)'); // High fidelity tech blue
          glowGrad.addColorStop(0.5, 'rgba(0, 210, 255, 0.09)'); // Radiant sky blue glow
          glowGrad.addColorStop(1, 'transparent');
        }

        ctx.strokeStyle = glowGrad;
        ctx.lineWidth = theme === 'dark' ? 1.5 : 1.3;
        
        if (theme === 'dark') {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(41, 151, 255, 0.55)';
        }

        ctx.beginPath();
        const startX = Math.floor((mouse.x - glowRadius) / gridSpacing) * gridSpacing;
        const endX = Math.ceil((mouse.x + glowRadius) / gridSpacing) * gridSpacing;
        const startY = Math.floor((mouse.y - glowRadius) / gridSpacing) * gridSpacing;
        const endY = Math.ceil((mouse.y + glowRadius) / gridSpacing) * gridSpacing;

        for (let x = Math.max(0, startX); x <= Math.min(dimensions.width, endX); x += gridSpacing) {
          ctx.moveTo(x, Math.max(0, mouse.y - glowRadius));
          ctx.lineTo(x, Math.min(dimensions.height, mouse.y + glowRadius));
        }
        for (let y = Math.max(0, startY); y <= Math.min(dimensions.height, endY); y += gridSpacing) {
          ctx.moveTo(Math.max(0, mouse.x - glowRadius), y);
          ctx.lineTo(Math.min(dimensions.width, mouse.x + glowRadius), y);
        }
        ctx.stroke();
        ctx.restore();
      }

      const maxDistance = 140; // max interaction distance

      // Draw and update particle kinetics
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Kinetic physics
        p.x += p.vx;
        p.y += p.vy;

        // Bounce back from boundaries
        if (p.x < 0 || p.x > dimensions.width) p.vx *= -1;
        if (p.y < 0 || p.y > dimensions.height) p.vy *= -1;

        // Interactive mouse proximity response (attraction or drag sense)
        if (mouse.x !== -1000 && mouse.y !== -1000) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < (mouse.isDragging ? 260 : 180)) {
            // Drag sense acceleration multiplier
            const attractionForce = mouse.isDragging ? 0.06 : 0.035;
            const factor = (1 - dist / (mouse.isDragging ? 260 : 180));
            p.x += (dx / dist) * factor * attractionForce * 15;
            p.y += (dy / dist) * factor * attractionForce * 15;
          }
        }

        // Draw particle body
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.neonColor;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = theme === 'dark' ? 6 : 0; // Ambient neon glow blur only on darkmode
        ctx.shadowColor = p.neonColor;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Construct plexus lines between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            const lineAlpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.55;
            ctx.shadowBlur = 0; // reset shadow for fast line rendering
            ctx.stroke();
          }
        }

        // Connect particles to mouse with glowing neon thread lines
        if (mouse.x !== -1000 && mouse.y !== -1000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            
            const connectionAlpha = (1 - dist / maxDistance) * (mouse.isDragging ? 0.45 : 0.28);
            ctx.strokeStyle = p.neonColor;
            ctx.globalAlpha = connectionAlpha;
            ctx.lineWidth = mouse.isDragging ? 1.0 : 0.65;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0; // reset standard canvas state
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions, theme]);

  // Capture mouse positioning events on interactive layer
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.isDragging = false;
    };

    const handleMouseDown = () => {
      mouseRef.current.isDragging = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden transition-all duration-350"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
};
