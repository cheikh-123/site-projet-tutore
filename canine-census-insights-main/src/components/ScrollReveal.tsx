
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    once?: boolean;
}

const ScrollReveal = ({ children, className, once = true }: ScrollRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, { threshold: 0.1 });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={domRef}
            className={cn(
                'scroll-animate',
                isVisible && 'visible',
                className
            )}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
