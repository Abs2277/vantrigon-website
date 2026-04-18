import { motion } from 'motion/react';
import { ArrowRight, Brain, Code2, Layers3, Shield } from 'lucide-react';
import { Link } from 'react-router';
import abdullahImage from '../../imports/team/abdullah-bin-shahab.jpeg';
import muhammadAliImage from '../../imports/team/muhammad-ali.jpeg';
import asadSabirImage from '../../imports/team/asad-sabir.jpeg';
import muhammadUmerImage from '../../imports/team/muhammad-umer.jpeg';
import ahmadShahzadImage from '../../imports/team/ahmad-shahzad.jpeg';

const teamMembers = [
  {
    name: 'Abdullah Bin Shahab',
    role: 'Senior Full Stack Developer',
    focus: 'Builds scalable, high-performance applications across the stack, delivering seamless user experiences with robust backend systems.',
    image: abdullahImage,
    imagePosition: 'center center',
    icon: Layers3,
  },
  {
    name: 'Muhammad Ali',
    role: 'Full Stack Developer (Angular + .NET)',
    focus: 'Develops modern web applications using Angular and .NET, delivering responsive interfaces backed by secure and scalable backend systems.',
    image: muhammadAliImage,
    imagePosition: 'center 22%',
    icon: Code2,
  },
  {
    name: 'Asad Sabir',
    role: 'Full Stack & Automation Engineer',
    focus: 'Builds scalable full-stack applications and intelligent automation systems, integrating modern web technologies with AI-driven workflows.',
    image: asadSabirImage,
    imagePosition: 'center 18%',
    icon: Brain,
  },
  {
    name: 'Muhammad Umer',
    role: 'Workflow Automation Engineer',
    focus: 'Designs and implements automated workflows using n8n, streamlining business processes through seamless system integrations.',
    image: muhammadUmerImage,
    imagePosition: 'center 20%',
    icon: Brain,
  },
  {
    name: 'Ahmad Shahzad',
    role: 'Associate Software Engineer',
    focus: 'An emerging developer passionate about Python, actively contributing to real-world projects while growing expertise in software development.',
    image: ahmadShahzadImage,
    imagePosition: 'center 18%',
    icon: Code2,
  },
];

const principles = [
  { label: 'Clean Architecture', icon: Code2 },
  { label: 'Reliable Delivery', icon: Shield },
  { label: 'AI-Ready Thinking', icon: Brain },
];

export function Team() {
  return (
    <main className="relative min-h-screen pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.12),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.5)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="inline-flex px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary mb-8">
            Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            The people behind Vantrigon Tech.
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-3xl">
            We are builders, system thinkers, and product partners who care about clean execution. Our team brings backend engineering, AI strategy, cloud delivery, and interface craft into one focused workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg border border-border bg-background/55 backdrop-blur-xl px-5 py-4 flex items-center gap-3"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="font-medium">{principle.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/70 bg-background/45 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group rounded-lg border border-border bg-card/60 overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-background/80 backdrop-blur-md text-primary flex items-center justify-center border border-border">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-foreground/65 leading-relaxed">{member.focus}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Work with a team that ships with care.</h2>
        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
          Bring us your product idea, automation goal, or platform problem. We will help shape the path from first conversation to production.
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Talk to the Team
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
