import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub', 
    href: 'https://github.com/Lemophile',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: FaLinkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: FaTwitter
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Piwi</h3>
            <p className="text-gray-300">
              Creating beautiful and functional web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Piwi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
