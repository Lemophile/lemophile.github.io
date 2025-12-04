import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating beautiful, 
              functional web applications. With expertise in modern web technologies, I bring ideas to 
              life through clean and efficient code.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in web development started several years ago, and since then, I've had the 
              opportunity to work on various projects that have honed my skills and expanded my knowledge.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                Problem Solving
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Education</h4>
              <p className="text-gray-600 text-sm">
                Degree in Computer Science with a focus on Web Technologies
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Experience</h4>
              <p className="text-gray-600 text-sm">
                X+ years of professional experience in web development
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Location</h4>
              <p className="text-gray-600 text-sm">
                Based in [Your Location], open to remote work
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Interests</h4>
              <p className="text-gray-600 text-sm">
                Web Technologies, Open Source, Photography
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
