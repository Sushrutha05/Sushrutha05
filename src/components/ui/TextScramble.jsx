import React, { useEffect, useRef } from 'react';

const TextScramble = ({ text, className = '' }) => {
    const ref = useRef(null);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let frameRequest;
        let frame = 0;
        let queue = [];

        const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

        const setText = (newText) => {
            const oldText = el.innerText;
            const length = Math.max(oldText.length, newText.length);
            queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(frameRequest);
            frame = 0;
            update();
        };

        const update = () => {
            let output = '';
            let complete = 0;
            for (let i = 0, n = queue.length; i < n; i++) {
                let { from, to, start, end, char } = queue[i];
                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = randomChar();
                        queue[i].char = char;
                    }
                    output += `<span class="opacity-50">${char}</span>`;
                } else {
                    output += from;
                }
            }
            el.innerHTML = output;
            if (complete === queue.length) {
                // Done
            } else {
                frameRequest = requestAnimationFrame(update);
                frame++;
            }
        };

        // Trigger on intersection
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setText(text);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(el);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frameRequest);
        };
    }, [text]);

    return <div ref={ref} className={`text-scramble ${className}`}>{text}</div>;
};

export default TextScramble;
