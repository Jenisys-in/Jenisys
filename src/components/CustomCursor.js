"use client";
import { useEffect, useState, useRef, useCallback } from "react";

export default function TechCursor() {
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [backgroundType, setBackgroundType] = useState('dark');
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const trailPositions = useRef([]);
  const lastUpdateTime = useRef(0);

  // Function to detect background color
  const detectBackgroundColor = useCallback((x, y) => {
    try {
      const element = document.elementFromPoint(x, y);
      if (!element) return;

      const computedStyle = window.getComputedStyle(element);
      const bgColor = computedStyle.backgroundColor;
      const color = computedStyle.color;
      
      const getRGBValues = (colorString) => {
        if (!colorString) return null;
        const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : null;
      };

      const getLuminance = (r, g, b) => {
        const [rs, gs, bs] = [r, g, b].map(c => {
          c = c / 255;
          return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
      };

      let isLight = false;

      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        const rgb = getRGBValues(bgColor);
        if (rgb) {
          const luminance = getLuminance(rgb[0], rgb[1], rgb[2]);
          isLight = luminance > 0.5;
        }
      } else {
        const rgb = getRGBValues(color);
        if (rgb) {
          const luminance = getLuminance(rgb[0], rgb[1], rgb[2]);
          isLight = luminance < 0.5;
        }
      }

      setBackgroundType(isLight ? 'light' : 'dark');
    } catch (error) {
      setBackgroundType('dark');
    }
  }, []);

  // Smooth trail animation
  const animateTrail = useCallback(() => {
    const now = performance.now();
    
    // Throttle trail updates to 60fps max for performance
    if (now - lastUpdateTime.current < 16) {
      requestAnimationFrame(animateTrail);
      return;
    }
    lastUpdateTime.current = now;

    if (trailRef.current?.children && trailPositions.current.length > 0) {
      const particles = trailRef.current.children;
      
      for (let i = 0; i < Math.min(particles.length, trailPositions.current.length - 1); i++) {
        const targetIndex = Math.min(i * 2 + 1, trailPositions.current.length - 1);
        const targetPos = trailPositions.current[targetIndex];
        
        if (targetPos && particles[i]) {
          const opacity = Math.max(0, (particles.length - i) / particles.length * 0.6);
          const scale = Math.max(0.1, (particles.length - i) / particles.length * 0.8);
          
          particles[i].style.transform = `translate3d(${targetPos.x - 2}px, ${targetPos.y - 2}px, 0) scale(${scale})`;
          particles[i].style.opacity = opacity.toString();
        }
      }
    }
    
    requestAnimationFrame(animateTrail);
  }, []);

  useEffect(() => {
    let isActive = true;
    
    // Direct mouse move handler - no delays, instant updates
    const move = (e) => {
      if (!isActive) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Update main cursor instantly - this is key for perfect smoothness
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      }
      
      // Update trail positions
      trailPositions.current.unshift({ x, y });
      if (trailPositions.current.length > 12) {
        trailPositions.current.pop();
      }
      
      // Background detection (throttled for performance)
      detectBackgroundColor(x, y);
    };

    const handleMouseDown = () => isActive && setClicked(true);
    const handleMouseUp = () => isActive && setClicked(false);

    const setupHoverEvents = () => {
      // Add a delay to ensure DOM is ready
      setTimeout(() => {
        if (!isActive) return;
        
        const selectors = [
          { elements: 'button, .cursor-pointer, [role="button"]', type: 'pointer' },
          { elements: 'a, [role="link"]', type: 'pointer' },
          { elements: 'input, textarea, [contenteditable]', type: 'text' },
          { elements: 'code, pre, .cursor-code', type: 'code' }
        ];

        selectors.forEach(({ elements, type }) => {
          try {
            const nodeList = document.querySelectorAll(elements);
            nodeList.forEach((el) => {
              if (!el.dataset.cursorListenerAdded) {
                const enterHandler = () => {
                  if (isActive) {
                    setHovering(true);
                    setCursorType(type);
                  }
                };
                const leaveHandler = () => {
                  if (isActive) {
                    setHovering(false);
                    setCursorType('default');
                  }
                };

                el.addEventListener("mouseenter", enterHandler, { passive: true });
                el.addEventListener("mouseleave", leaveHandler, { passive: true });
                el.dataset.cursorListenerAdded = 'true';
              }
            });
          } catch (error) {
            console.warn(`Failed to setup hover events for selector: ${elements}`, error);
          }
        });
      }, 100);
    };

    // Hide default cursor with fallback
    const originalCursor = document.body.style.cursor;
    const originalPointerEvents = document.body.style.pointerEvents;
    
    document.body.style.cursor = 'none';
    
    // Ensure cursor is hidden on all elements
    const hideStyle = document.createElement('style');
    hideStyle.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(hideStyle);
    
    // Use passive listeners for better performance
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    
    // Setup hover events with retry mechanism
    setupHoverEvents();
    
    // Also listen for dynamic content changes
    const observer = new MutationObserver(() => {
      if (isActive) {
        setupHoverEvents();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Start trail animation
    let animationId = requestAnimationFrame(animateTrail);

    return () => {
      isActive = false;
      
      // Restore original cursor
      document.body.style.cursor = originalCursor;
      document.body.style.pointerEvents = originalPointerEvents;
      
      // Remove style
      if (hideStyle.parentNode) {
        hideStyle.parentNode.removeChild(hideStyle);
      }
      
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      observer.disconnect();
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // Clean up all cursor listener markers
      document.querySelectorAll('[data-cursor-listener-added]').forEach(el => {
        delete el.dataset.cursorListenerAdded;
      });
    };
  }, [animateTrail, detectBackgroundColor]);

  const getAdaptiveColors = () => {
    const isDark = backgroundType === 'dark';
    
    switch (cursorType) {
      case 'pointer':
        return {
          border: isDark ? 'border-cyan-400' : 'border-blue-600',
          bg: isDark ? 'bg-cyan-500/20' : 'bg-blue-600/30',
          glow: isDark ? 'shadow-[0_0_25px_rgba(34,211,238,0.6)]' : 'shadow-[0_0_25px_rgba(37,99,235,0.8)]',
          dot: isDark ? 'bg-cyan-300' : 'bg-blue-700',
          accent: isDark ? 'bg-cyan-400' : 'bg-blue-600',
          trail: isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'
        };
      case 'text':
        return {
          border: isDark ? 'border-green-400' : 'border-green-600',
          bg: isDark ? 'bg-green-500/20' : 'bg-green-600/30',
          glow: isDark ? 'shadow-[0_0_25px_rgba(34,197,94,0.6)]' : 'shadow-[0_0_25px_rgba(22,163,74,0.8)]',
          dot: isDark ? 'bg-green-300' : 'bg-green-700',
          accent: isDark ? 'bg-green-400' : 'bg-green-600',
          trail: isDark ? 'bg-green-400/60' : 'bg-green-600/60'
        };
      case 'code':
        return {
          border: isDark ? 'border-purple-400' : 'border-purple-600',
          bg: isDark ? 'bg-purple-500/20' : 'bg-purple-600/30',
          glow: isDark ? 'shadow-[0_0_25px_rgba(168,85,247,0.6)]' : 'shadow-[0_0_25px_rgba(147,51,234,0.8)]',
          dot: isDark ? 'bg-purple-300' : 'bg-purple-700',
          accent: isDark ? 'bg-purple-400' : 'bg-purple-600',
          trail: isDark ? 'bg-purple-400/60' : 'bg-purple-600/60'
        };
      default:
        return {
          border: isDark ? 'border-white/60' : 'border-gray-800/80',
          bg: isDark ? 'bg-white/10' : 'bg-gray-800/20',
          glow: isDark ? 'shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'shadow-[0_0_20px_rgba(0,0,0,0.4)]',
          dot: isDark ? 'bg-white' : 'bg-gray-800',
          accent: isDark ? 'bg-white' : 'bg-gray-800',
          trail: isDark ? 'bg-white/40' : 'bg-gray-800/40'
        };
    }
  };

  const colors = getAdaptiveColors();
  
  const getCursorClasses = () => {
    const baseClasses = "w-8 h-8 rounded-full border-2 transition-all duration-200 ease-out will-change-transform";
    const scaleClass = clicked ? 'scale-75' : hovering ? 'scale-125' : 'scale-100';
    const rotateClass = clicked ? 'rotate-45' : 'rotate-0';
    
    return `${baseClasses} ${scaleClass} ${rotateClass} ${colors.border} ${colors.bg} ${colors.glow}`;
  };

  const getInnerDotClasses = () => {
    const scaleClass = clicked ? 'scale-150' : 'scale-100';
    return `w-1.5 h-1.5 rounded-full transition-all duration-150 will-change-transform ${scaleClass} ${colors.dot}`;
  };

  const getTextColorFromBg = (bgClass) => {
    return bgClass.replace('bg-', 'text-');
  };

  return (
    <>
      {/* Trail particles */}
      <div ref={trailRef} className="pointer-events-none fixed top-0 left-0 z-[9998]">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-opacity duration-100 will-change-transform ${colors.trail}`}
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div className={getCursorClasses()}>
          {/* Inner dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={getInnerDotClasses()} />
          </div>
          
          {/* State indicators */}
          {cursorType === 'pointer' && (
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
              <div className={`w-0.5 h-0.5 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 ${colors.accent}`} />
              <div className={`w-0.5 h-0.5 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 ${colors.accent}`} />
              <div className={`w-0.5 h-0.5 rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2 ${colors.accent}`} />
              <div className={`w-0.5 h-0.5 rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2 ${colors.accent}`} />
            </div>
          )}
          
          {cursorType === 'text' && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`w-3 h-0.5 animate-pulse ${colors.accent}`} />
            </div>
          )}
          
          {cursorType === 'code' && (
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-mono animate-pulse ${getTextColorFromBg(colors.accent)}`}>
              &lt;/&gt;
            </div>
          )}
        </div>

        {/* Click ripple */}
        {clicked && (
          <div className={`absolute inset-0 rounded-full border animate-ping ${colors.border}`} />
        )}
      </div>
    </>
  );
}