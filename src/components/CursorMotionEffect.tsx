
import React, { useEffect } from 'react';

const CursorMotionEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const containers = document.querySelectorAll('.floating-icons-container');
      
      containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        
        const icons = container.querySelectorAll(':scope > div');
        icons.forEach((icon: Element, index) => {
          const htmlIcon = icon as HTMLElement;
          const intensity = 0.3 + (index * 0.1);
          const rotateX = deltaY * intensity * 10;
          const rotateY = deltaX * intensity * 10;
          const translateX = deltaX * intensity * 20;
          const translateY = deltaY * intensity * 20;
          
          htmlIcon.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateX(${translateX}px) 
            translateY(${translateY}px)
          `;
        });
      });
    };

    const handleMouseLeave = () => {
      const containers = document.querySelectorAll('.floating-icons-container');
      containers.forEach(container => {
        const icons = container.querySelectorAll(':scope > div');
        icons.forEach((icon: Element) => {
          const htmlIcon = icon as HTMLElement;
          htmlIcon.style.transform = '';
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return null;
};

export default CursorMotionEffect;
