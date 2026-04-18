import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../imports/image.png';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)',
              'radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.3) 0px, transparent 50%)',
              'radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.3) 0px, transparent 50%)',
              'radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)',
              'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -500],
              x: [null, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-24 w-[min(760px,88vw)] -translate-x-1/2 pointer-events-none"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
        >
          <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/15 to-purple-500/20 blur-3xl" />
          <motion.img
            src={logo}
            alt=""
            aria-hidden="true"
            className="relative w-full select-none opacity-[0.13] mix-blend-screen"
            animate={{
              filter: [
                'drop-shadow(0 0 14px rgba(34,211,238,0.18))',
                'drop-shadow(0 0 28px rgba(168,85,247,0.24))',
                'drop-shadow(0 0 14px rgba(34,211,238,0.18))',
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Interactive Light Follow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -z-5"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center space-y-8">
          {/* Holographic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-gradient" />
            <div className="absolute inset-0 border border-primary/30" style={{ borderRadius: '9999px' }} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm text-foreground/90 relative z-10 font-medium">
              Next-Gen Technology Platform
            </span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>

          {/* 3D Transformed Title */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <motion.span
                className="block mb-4"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #60A5FA, #A78BFA, #EC4899, #60A5FA)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We Build
              </motion.span>

              <motion.span
                className="block relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-30" />
                <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Scalable Software
                </span>
              </motion.span>

              <motion.span
                className="block mt-4"
                animate={{
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #EC4899, #A78BFA, #60A5FA, #EC4899)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                & AI Solutions
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            Transform your vision into reality with cutting-edge technology,
            innovative design, and world-class engineering expertise.
          </motion.p>

          {/* Futuristic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                  ],
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              />
              <span className="relative flex items-center space-x-2 text-white text-lg font-medium">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-5 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-background/50 backdrop-blur-xl" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl group-hover:border-primary/60 transition-colors" />
              <span className="relative text-lg font-medium">View Our Work</span>
            </motion.button>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-20"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center"
            >
              <span className="text-sm text-foreground/50 mb-4">Discover More</span>
              <div className="relative">
                <motion.div
                  className="w-[2px] h-16 bg-gradient-to-b from-primary via-purple-500 to-transparent"
                  animate={{ scaleY: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transformOrigin: 'top' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rotate-45 rounded-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-purple-500/20 rotate-12 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-cyan-500/20 -rotate-12" />
      </div>
    </section>
  );
}
