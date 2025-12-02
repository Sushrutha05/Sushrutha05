import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particles = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height; // Start randomly
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.speed = 0.2 + Math.random() * 0.5;
                this.size = Math.random() * 2;
                this.opacity = Math.random() * 0.5;
                this.fadeSpeed = 0.002 + Math.random() * 0.005;
                this.color = Math.random() > 0.8 ? '#4696ff' : '#cfd3d4'; // Electric Blue or Platinum
            }

            update() {
                this.y -= this.speed;
                this.opacity += Math.sin(this.y * 0.01) * 0.002; // Twinkle effect

                if (this.y < -10) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const init = () => {
            resizeCanvas();
            const particleCount = window.innerWidth < 768 ? 50 : 100;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="particle-canvas" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none block" />;
};

export default ParticleCanvas;
