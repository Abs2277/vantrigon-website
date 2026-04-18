import { motion, useMotionValue, useTransform } from 'motion/react';
import { Database, Brain, Cloud, Code, Smartphone, Shield } from 'lucide-react';
import { useState } from 'react';

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust, scalable server architectures built with modern frameworks and best practices.',
      color: '#06b6d4',
      gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge machine learning and AI integration to transform your business intelligence.',
      color: '#a855f7',
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Enterprise-grade cloud infrastructure design, deployment, and optimization.',
      color: '#3b82f6',
      gradient: 'from-blue-500 via-indigo-500 to-blue-600',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with seamless integration and beautiful UX.',
      color: '#10b981',
      gradient: 'from-emerald-500 via-green-500 to-emerald-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      color: '#f59e0b',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
    },
    {
      icon: Shield,
      title: 'Security & DevOps',
      description: 'Comprehensive security audits and automated DevOps pipelines for reliable delivery.',
      color: '#ef4444',
      gradient: 'from-red-500 via-rose-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold relative">
              <motion.span
                className="relative z-10"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #60A5FA, #A78BFA, #EC4899, #F59E0B, #60A5FA)',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Services
              </motion.span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h2>
          </motion.div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Morphing Background Blob */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl"
                  animate={
                    hoveredIndex === index
                      ? {
                          background: [
                            `radial-gradient(circle at 0% 0%, ${service.color}40 0%, transparent 50%)`,
                            `radial-gradient(circle at 100% 100%, ${service.color}40 0%, transparent 50%)`,
                            `radial-gradient(circle at 0% 100%, ${service.color}40 0%, transparent 50%)`,
                            `radial-gradient(circle at 100% 0%, ${service.color}40 0%, transparent 50%)`,
                            `radial-gradient(circle at 0% 0%, ${service.color}40 0%, transparent 50%)`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="relative h-full p-8 bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(90deg, ${service.color}00, ${service.color}, ${service.color}00)`,
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: hoveredIndex === index ? ['200% 0', '-200% 0'] : '0% 0',
                    }}
                    transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />

                  <div className="relative z-10">
                    {/* Floating Icon */}
                    <motion.div
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl mb-6 relative`}
                      whileHover={{
                        scale: 1.1,
                        rotateZ: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                          boxShadow: [
                            `0 0 20px ${service.color}80`,
                            `0 0 40px ${service.color}ff`,
                            `0 0 20px ${service.color}80`,
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold mb-4"
                      animate={{
                        color: hoveredIndex === index ? service.color : 'currentColor',
                      }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Animated Arrow */}
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -10,
                      }}
                    >
                      <span className="text-sm font-medium" style={{ color: service.color }}>
                        Explore Service
                      </span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={service.color}
                        animate={{
                          x: hoveredIndex === index ? [0, 5, 0] : 0,
                        }}
                        transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 opacity-20"
                    style={{
                      background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                    }}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                      opacity: hoveredIndex === index ? [0.2, 0.4, 0.2] : 0.2,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
