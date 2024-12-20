import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/tharuun12',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tharuun/',
    label: 'LinkedIn'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/tharuun__/profilecard/',
    label: 'Instagram'
  }
];

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg ">
      <div className="max-w-10xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Center - Copyright */}
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Algorithm Visualizer. All rights reserved.
          </div>

          {/* Right side - Contact Link */}
          <Link 
      to="/contact" 
      className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-base font-semibold text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
    >
      Contact Me
      <svg 
        className="h-5 w-5" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
    </Link>

        </div>
      </div>
    </footer>
  );
}