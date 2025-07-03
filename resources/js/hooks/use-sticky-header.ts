import { useEffect, useState } from 'react';

export function useStickyHeader(threshold = 30, delay = 10) {
    const [showHeader, setShowHeader] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > threshold);

            if (scrollTimeout) clearTimeout(scrollTimeout);

            const timeout = setTimeout(() => {
                if (currentScrollY < lastScrollY || currentScrollY < threshold) {
                    setShowHeader(true);
                } else {
                    setShowHeader(false);
                }
                setLastScrollY(currentScrollY);
            }, delay);

            setScrollTimeout(timeout);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [lastScrollY, threshold, delay, scrollTimeout]);

    return { showHeader, scrolled };
}
