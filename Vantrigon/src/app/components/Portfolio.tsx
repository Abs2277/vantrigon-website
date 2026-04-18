import { motion, useMotionValue, useTransform } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'FinTech Platform',
      category: 'Financial Technology',
      description: 'AI-powered investment platform processing $2B+ in transactions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'Node.js', 'AI/ML'],
      color: '#06b6d4',
    },
    {
      title: 'Healthcare AI',
      category: 'Medical Technology',
      description: 'Diagnostic assistant serving 50K+ patients globally',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      tags: ['Python', 'TensorFlow', 'Cloud'],
      color: '#a855f7',
    },
    {
      title: 'E-Commerce Suite',
      category: 'Retail Technology',
      description: 'Omnichannel platform handling 1M+ daily transactions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Next.js', 'GraphQL', 'AWS'],
      color: '#3b82f6',
    },
    {
      title: 'IoT Platform',
      category: 'Smart Infrastructure',
      description: 'Real-time monitoring system for 10K+ connected devices',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
      tags: ['IoT', 'Edge Computing', 'Azure'],
      color: '#10b981',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Business Intelligence',
      description: 'Analytics platform empowering 500+ enterprise clients',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
      color: '#f59e0b',
    },
    {
      title: 'Mobile Banking',
      category: 'Mobile Technology',
      description: 'Secure banking app with 2M+ active users',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
      tags: ['React Native', 'Blockchain', 'Security'],
      color: '#ec4899',
    },
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 relative inline-block"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7, #ec4899, #06b6d4)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Featured Projects
            </motion.span>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Transforming ideas into impactful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Holographic Border */}
              <motion.div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, ${project.color}00, ${project.color}, ${project.color}00)`,
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: activeIndex === index ? ['200% 0', '-200% 0'] : '0% 0',
                }}
                transition={{ duration: 2, repeat: activeIndex === index ? Infinity : 0 }}
              />

              <motion.div
                className="relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Container with Parallax */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: activeIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Dynamic Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40 0%, transparent 60%)`,
                    }}
                    animate={{
                      opacity: activeIndex === index ? 0.8 : 0.4,
                    }}
                  />

                  {/* Scanline Effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(0deg, transparent 50%, rgba(255,255,255,0.05) 51%, transparent 52%)',
                      backgroundSize: '100% 4px',
                    }}
                    animate={{
                      y: activeIndex === index ? [0, 256] : 0,
                    }}
                    transition={{ duration: 2, repeat: activeIndex === index ? Infinity : 0, ease: 'linear' }}
                  />

                  {/* CTA Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <motion.button
                      className="px-6 py-3 rounded-xl backdrop-blur-xl border flex items-center space-x-2"
                      style={{
                        backgroundColor: `${project.color}20`,
                        borderColor: `${project.color}60`,
                        color: project.color,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium">View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  <motion.div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: project.color }}
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'top' }}
                  />

                  <motion.div
                    className="text-sm font-medium mb-2"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full backdrop-blur-sm border"
                        style={{
                          backgroundColor: `${project.color}15`,
                          borderColor: `${project.color}30`,
                          color: project.color,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: `${project.color}25`,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner Glow */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.color}40, transparent)`,
                  }}
                  animate={{
                    scale: activeIndex === index ? [1, 1.3, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="group relative px-10 py-4 rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                ],
                backgroundPosition: ['200% 0', '-200% 0'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            />
            <span className="relative flex items-center space-x-2 text-white font-medium">
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
