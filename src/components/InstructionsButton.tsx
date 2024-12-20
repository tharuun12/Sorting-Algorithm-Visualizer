import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstructionsButton() {
  // State for button visibility and scroll position
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldBeVisible = currentScrollY <= lastScrollY || currentScrollY <= 100;
      
      setIsVisible(shouldBeVisible);
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup scroll event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Link 
      to="/instructions" 
      className={`
        fixed top-10 right-10
        flex items-center gap-3
        px-5 py-2.5
        bg-white 
        rounded-lg
        shadow-lg hover:shadow-xl
        text-indigo-600 hover:text-indigo-700
        transition-all duration-300 ease-in-out
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-24 opacity-0 pointer-events-none'
        }
      `}
      aria-label="View Instructions"
    >
      <BookOpen className="w-5 h-5" strokeWidth={2} />
      <span className="font-semibold">Instructions</span>
    </Link>
  );
}