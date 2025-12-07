'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaShieldAlt, FaNetworkWired, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 glass-card border border-red-500/30 rounded-2xl">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full"
              />
              <span className="text-red-400 text-sm font-medium">Security Researcher & Ethical Hacker</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-orange-600 bg-clip-text text-transparent">
              Piwi
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Cybersecurity researcher specializing in network security, exploit development, and defensive security.
            <br className="hidden md:block" />
            Creator of KrakenNet and TikTok visibility tools.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg shadow-red-500/25"
              >
                <div className="flex items-center justify-center space-x-3">
                  <FaNetworkWired className="w-5 h-5" />
                  <span>View Projects</span>
                </div>
              </motion.div>
            </Link>
            
            <Link href="/guides">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card border-2 border-gray-600/50 text-gray-300 font-semibold rounded-2xl hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-3">
                  <FaShieldAlt className="w-5 h-5" />
                  <span>Security Guides</span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-16" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Lemophile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
