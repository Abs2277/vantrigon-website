import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../imports/image.png';

export function Footer() {
  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    Services: [
      { label: 'Web Development', href: '/#services' },
      { label: 'Mobile Apps', href: '/#services' },
      { label: 'Cloud Solutions', href: '/#services' },
      { label: 'AI/ML', href: '/#services' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '/#portfolio' },
      { label: 'API Reference', href: 'http://127.0.0.1:8000/docs' },
      { label: 'Community', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={logo}
                  alt="Vantrigon Tech"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Vantrigon Tech
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Building the future of technology, one innovation at a time. Transform your vision into reality with our world-class engineering team.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-foreground/70 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">123 Tech Street, Silicon Valley, CA 94025</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">hello@vantrigon.tech</span>
                </div>
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-foreground/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-foreground/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Vantrigon Tech. All rights reserved.
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-foreground/50">
              Crafted with <span className="text-red-500">♥</span> by Vantrigon Tech Team
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}
