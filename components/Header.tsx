'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaShieldAlt, FaNetworkWired, FaBook, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Projects', href: '/projects', icon: FaNetworkWired },
    { name: 'Security Guides', href: '/guides', icon: FaShieldAlt },
    { name: 'Contact', href: '/contact', icon: FaEnvelope }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Lemophile', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaShieldAlt className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
                Piwi
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="relative group"
                >
                  <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-600 rounded-full"
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 bg-gray-800/50 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <FaTimes key="close" className="w-6 h-6" />
              ) : (
                <FaBars key="menu" className="w-6 h-6" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-800/50"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-200"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center space-x-4 pt-4 border-t border-gray-800/50"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
