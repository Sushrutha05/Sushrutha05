import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const handleMouseMove = (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        };

        const handleGlobalMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.interactive')) {
                glow.classList.add('active');
            } else {
                glow.classList.remove('active');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleGlobalMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleGlobalMouseOver);
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow"></div>;
};

export default CursorGlow;
