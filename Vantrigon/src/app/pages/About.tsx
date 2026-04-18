import { motion } from 'motion/react';
import { ArrowRight, BrainCircuit, Cloud, Code2, ShieldCheck } from 'lucide-react';

const values = [
  {
    title: 'Engineering with intent',
    description: 'Every build starts with the business goal, then moves into clean architecture, maintainable code, and reliable delivery.',
    icon: Code2,
  },
  {
    title: 'AI that earns its place',
    description: 'We use automation and AI where they make products faster, smarter, and easier to operate.',
    icon: BrainCircuit,
  },
  {
    title: 'Cloud-ready foundations',
    description: 'From APIs to deployment pipelines, we shape systems that can grow without becoming fragile.',
    icon: Cloud,
  },
  {
    title: 'Trust in the details',
    description: 'Security, observability, and practical documentation stay close to the work from day one.',
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <main className="relative min-h-screen pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(14,165,233,0.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.14),transparent_30%),radial-gradient(circle_at_55%_85%,rgba(34,197,94,0.12),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.5)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="inline-flex px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary">
              About Vantrigon Tech
            </p>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                We build practical software for ambitious teams.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                Vantrigon Tech helps founders, startups, and growing companies turn ideas into dependable digital products. We specialize in backend systems, AI-powered workflows, and cloud platforms that are built to be understood, operated, and improved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background/40 hover:bg-muted/60 transition-colors"
              >
                View Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              ['3+', 'Core service areas'],
              ['24/7', 'Production mindset'],
              ['AI', 'Workflow acceleration'],
              ['Cloud', 'Scalable delivery'],
            ].map(([stat, label]) => (
              <div key={stat} className="rounded-lg border border-border bg-background/55 backdrop-blur-xl p-6 min-h-36 flex flex-col justify-end">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat}</div>
                <div className="mt-2 text-sm text-foreground/65">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-background/45 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How we work</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We keep teams close to the product, make tradeoffs visible, and ship in focused cycles. The result is software that feels clear on launch day and stays workable after it grows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-lg border border-border bg-card/60 p-6 min-h-64"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/65 leading-relaxed">{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Built for long-term momentum.</h2>
        <p className="text-lg text-foreground/70 leading-relaxed">
          Whether you need a FastAPI backend, an AI assistant, a cloud deployment, or a full product foundation, Vantrigon Tech brings the structure and execution to move from concept to launch.
        </p>
      </section>
    </main>
  );
}
