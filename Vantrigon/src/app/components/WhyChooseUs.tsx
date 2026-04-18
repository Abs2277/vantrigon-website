import { motion } from 'motion/react';
import { Zap, Users, Award, TrendingUp, Clock, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Stat = {
  target: number;
  suffix: string;
  label: string;
  color: string;
};

interface AnimatedStatProps {
  stat: Stat;
  index: number;
  hoveredStat: number | null;
  setHoveredStat: (index: number | null) => void;
}

function AnimatedStat({ stat, index, hoveredStat, setHoveredStat }: AnimatedStatProps) {
  const statRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [animationRun, setAnimationRun] = useState(0);

  useEffect(() => {
    const element = statRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationRun((run) => run + 1);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animationRun === 0) return;

    let animationFrame = 0;
    let startTime: number | null = null;
    const delay = index * 90;
    const duration = 850;

    const timeout = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(stat.target * easedProgress));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [animationRun, index, stat.target]);

  return (
    <motion.div
      ref={statRef}
      className="text-center relative"
      onHoverStart={() => setHoveredStat(index)}
      onHoverEnd={() => setHoveredStat(null)}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        style={{
          background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)`,
        }}
        animate={{
          opacity: hoveredStat === index ? 1 : 0,
        }}
      />

      <motion.div
        className="text-5xl font-bold mb-2 relative tabular-nums"
        animate={{
          color: hoveredStat === index ? stat.color : 'currentColor',
          textShadow: hoveredStat === index ? `0 0 22px ${stat.color}80` : '0 0 0 transparent',
        }}
      >
        {count}
        {stat.suffix}
      </motion.div>

      <div className="text-foreground/70 text-sm">{stat.label}</div>

      <motion.div
        className="mt-3 h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: `${stat.color}20` }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: stat.color }}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.09 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const reasons = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Rapid development cycles with agile methodologies',
      color: '#f59e0b',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ engineers with 15+ years average experience',
      color: '#3b82f6',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '200+ successful projects across 30 countries',
      color: '#a855f7',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs',
      color: '#10b981',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Always available when you need us most',
      color: '#06b6d4',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise',
      color: '#ec4899',
    },
  ];

  const stats: Stat[] = [
    { target: 200, suffix: '+', label: 'Projects Delivered', color: '#06b6d4' },
    { target: 50, suffix: '+', label: 'Team Members', color: '#3b82f6' },
    { target: 98, suffix: '%', label: 'Client Satisfaction', color: '#a855f7' },
    { target: 15, suffix: '+', label: 'Years Experience', color: '#ec4899' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
              <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z"
            fill="url(#wave-gradient)"
            animate={{
              d: [
                'M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z',
                'M0,100 Q250,150 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z',
                'M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
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
                backgroundImage: 'linear-gradient(90deg, #f59e0b, #3b82f6, #a855f7, #ec4899, #f59e0b)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Why Choose Vantrigon
            </motion.span>
          </motion.h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Excellence, innovation, and reliability in every line of code
          </p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div
                  className="relative p-8 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden text-center"
                  whileHover={{
                    scale: 1.05,
                    rotateZ: 2,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${reason.color}20 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Orbit Ring */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 opacity-30"
                      style={{ borderColor: reason.color }}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />

                    <motion.div
                      className="relative p-5 rounded-2xl backdrop-blur-sm"
                      style={{
                        backgroundColor: `${reason.color}20`,
                        boxShadow: `0 0 30px ${reason.color}40`,
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8" style={{ color: reason.color }} />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 relative z-10">{reason.title}</h3>
                  <p className="text-foreground/70 leading-relaxed relative z-10">
                    {reason.description}
                  </p>

                  {/* Particle Effects */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{ backgroundColor: reason.color }}
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * -100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Futuristic Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />

          <div className="relative p-12 bg-card/20 backdrop-blur-2xl border border-border/50 rounded-3xl overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <AnimatedStat
                  key={stat.label}
                  stat={stat}
                  index={index}
                  hoveredStat={hoveredStat}
                  setHoveredStat={setHoveredStat}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
