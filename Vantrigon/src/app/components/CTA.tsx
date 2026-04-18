import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dynamic Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 800,
          }}
          animate={{
            y: [null, -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Holographic Border Effect */}
          <motion.div
            className="absolute -inset-1 rounded-[3rem] opacity-75"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7, #ec4899, #06b6d4)',
              backgroundSize: '400% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative p-12 md:p-16 lg:p-20 bg-card/60 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden">
            {/* Scanlines Effect */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.5) 2px, rgba(59, 130, 246, 0.5) 4px)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center relative z-10"
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-8 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl" />
                <div className="absolute inset-0 border border-primary/30 rounded-full" />

                <span className="relative flex h-3 w-3">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-green-400"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-lg shadow-green-400/50" />
                </span>

                <span className="text-sm font-medium text-foreground/90 relative z-10">
                  Available for new projects
                </span>

                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="block mb-3">Let's Build Something</span>
                <motion.span
                  className="block relative"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7, #ec4899, #06b6d4)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Great Together
                </motion.span>

                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.h2>

              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Ready to transform your vision into reality? Our team is standing by to discuss your next big idea.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      ],
                      x: ['-200%', '200%'],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />

                  <span className="relative flex items-center justify-center space-x-3 text-white font-medium text-lg">
                    <Mail className="w-5 h-5" />
                    <span>Start a Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-[#25D366]" />

                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      ],
                      x: ['-200%', '200%'],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                  />

                  <span className="relative flex items-center justify-center space-x-3 text-white font-medium text-lg">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </span>

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow: '0 0 40px rgba(37, 211, 102, 0.6)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 pt-12 border-t border-border/30"
              >
                <p className="text-sm text-foreground/50 mb-6 uppercase tracking-wider">
                  Trusted by industry leaders worldwide
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12">
                  {['Google', 'Microsoft', 'Amazon', 'Meta', 'Tesla'].map((company, index) => (
                    <motion.div
                      key={company}
                      className="text-2xl font-bold text-foreground/30"
                      whileHover={{
                        scale: 1.1,
                        color: 'currentColor',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
