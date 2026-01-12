'use client'

import { motion } from 'framer-motion'
import { 
  Code2, Server, Smartphone, Cpu, ArrowRight, Github, Linkedin, 
  Terminal, ShieldCheck, Zap, Database, Globe, CheckCircle2 
} from 'lucide-react'

// --- ANIMATION VARIANTS (DRY Principle) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// --- COMPONENTS ---

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
      {title} <span className="text-cyber-primary">.</span>
    </h2>
    <p className="text-cyber-muted max-w-2xl mx-auto text-lg">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mt-6 rounded-full" />
  </div>
)

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-4 py-2 rounded-lg bg-cyber-card border border-gray-800 text-sm font-mono text-cyber-accent hover:border-cyber-accent transition-colors cursor-default">
    {name}
  </span>
)

export default function TechPortfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyber-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-card border border-cyber-primary/30 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-accent"></span>
              </span>
              <span className="text-sm font-mono text-cyber-muted">Available for New Projects</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber-muted">Digital Excellence</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-cyber-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              An elite team of developers and architects building scalable backend systems, AI solutions, and high-performance web applications.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-cyber-accent/10 border border-cyber-accent text-cyber-accent rounded-lg font-semibold hover:bg-cyber-accent hover:text-cyber-bg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-cyber-card text-white rounded-lg font-semibold border border-gray-800 hover:border-gray-600 transition-all">
                View Our Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT WE DO (Services) */}
      <section className="py-24 bg-cyber-bg">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Expertise" 
            subtitle="We don't just write code. We architect solutions that scale with your business."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Web Applications", desc: "Next.js & React platforms optimized for SEO and speed." },
              { icon: Smartphone, title: "Mobile Development", desc: "Native-feel cross-platform apps using React Native." },
              { icon: Server, title: "Backend & API", desc: "Robust Node.js & Go architectures handling high concurrency." },
              { icon: Cpu, title: "DevOps & Cloud", desc: "AWS/Azure infrastructure with automated CI/CD pipelines." },
              { icon: Zap, title: "Automation & AI", desc: "Custom LLM integrations and workflow automation scripts." },
              { icon: Database, title: "Database Design", desc: "Optimized SQL & NoSQL schemas for massive datasets." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-cyber-card border border-gray-800 hover:border-cyber-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyber-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyber-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-cyber-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-cyber-muted leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECH STACK */}
      <section className="py-24 border-y border-gray-900 bg-[#0D121F]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Battle-Tested Stack</h2>
              <p className="text-cyber-muted mb-8">
                We select technologies based on performance requirements, not hype. Our stack ensures type safety, speed, and maintainability.
              </p>
              <div className="flex items-center gap-2 text-cyber-accent font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>v2026.1.0 Latest Standards</span>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Code2 className="w-4 h-4 text-cyber-primary"/> Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js 15', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'].map(t => <SkillBadge key={t} name={t} />)}
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Server className="w-4 h-4 text-cyber-primary"/> Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Go', 'GraphQL', 'gRPC'].map(t => <SkillBadge key={t} name={t} />)}
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Database className="w-4 h-4 text-cyber-primary"/> Data</h4>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Redis', 'MongoDB', 'Prisma'].map(t => <SkillBadge key={t} name={t} />)}
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Cpu className="w-4 h-4 text-cyber-primary"/> Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Kubernetes', 'AWS', 'Terraform'].map(t => <SkillBadge key={t} name={t} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (Case Studies) */}
      <section className="py-24 bg-cyber-bg">
        <div className="container mx-auto px-6">
          <SectionHeading title="Selected Work" subtitle="Solving complex problems with elegant code." />

          <div className="space-y-12">
            {[1, 2].map((item) => (
              <div key={item} className="group relative grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl bg-cyber-card border border-gray-800 hover:border-gray-700 transition-all">
                {/* Visual Placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 overflow-hidden group-hover:shadow-2xl transition-all">
                  <div className="text-cyber-muted font-mono">Project Preview UI</div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-cyber-accent text-sm font-mono tracking-wider">FINTECH</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="text-gray-500 text-sm">2025</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Crypto Payment Gateway</h3>
                  <p className="text-cyber-muted mb-6">
                    Reduced transaction latency by 40% using Go microservices. Implemented bank-grade security and automated reconciliation for over 50k daily users.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Go', 'gRPC', 'Postgres', 'React'].map(tag => (
                      <span key={tag} className="text-xs font-mono text-gray-400 border border-gray-700 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <button className="text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4 text-cyber-primary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="py-24 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <SectionHeading title="How We Work" subtitle="Transparent, agile, and milestone-driven." />
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10 -translate-y-1/2" />
            
            {[
              { step: "01", title: "Discovery" },
              { step: "02", title: "Planning" },
              { step: "03", title: "Build" },
              { step: "04", title: "Testing" },
              { step: "05", title: "Launch" },
            ].map((s) => (
              <div key={s.step} className="bg-cyber-bg p-4 flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-cyber-card border border-cyber-primary/50 text-white font-mono flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(109,40,217,0.3)]">
                  {s.step}
                </div>
                <h4 className="text-white font-bold">{s.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (Trust Signals) */}
      <section className="py-24 bg-gradient-to-b from-cyber-bg to-[#080b14]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Engineering Standards <br />
              <span className="text-cyber-accent">You Can Trust.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Clean Architecture", desc: "Modular, scalable codebases that don't accrue technical debt." },
                { title: "Security First", desc: "OWASP compliance and rigorous data protection protocols." },
                { title: "Performance Obsessed", desc: "Core Web Vitals optimized and server-side rendering standards." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyber-accent shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-cyber-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-cyber-primary/20 blur-[80px] rounded-full" />
             <div className="relative bg-cyber-card border border-gray-800 p-8 rounded-2xl">
                <div className="font-mono text-sm text-gray-400 mb-4 border-b border-gray-800 pb-2 flex justify-between">
                   <span>Performance Audit</span>
                   <span className="text-green-400">PASSED</span>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-white">Performance</span>
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                         <div className="w-[98%] h-full bg-green-500" />
                      </div>
                      <span className="text-green-500 font-mono">98%</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-white">Accessibility</span>
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                         <div className="w-[100%] h-full bg-green-500" />
                      </div>
                      <span className="text-green-500 font-mono">100%</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-white">SEO</span>
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                         <div className="w-[100%] h-full bg-green-500" />
                      </div>
                      <span className="text-green-500 font-mono">100%</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. CTA BLOCK */}
      <section className="py-24 px-6">
        <div className="container mx-auto relative rounded-3xl overflow-hidden bg-cyber-primary p-12 md:p-20 text-center">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[#0B0F1A] opacity-90" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to build the future?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
                Stop managing freelancers. Hire a dedicated engineering team that delivers on time and within budget.
              </p>
              <button className="px-10 py-5 bg-cyber-accent text-cyber-bg rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-1">
                Schedule Technical Consultation
              </button>
            </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-cyber-card border-t border-gray-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-display font-bold text-white mb-4 block">
                CYBER<span className="text-cyber-accent">TECH</span>
              </span>
              <p className="text-cyber-muted max-w-sm">
                A premium software engineering collective dedicated to building robust digital infrastructure for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-cyber-muted">
                <li className="hover:text-cyber-accent cursor-pointer">Web Development</li>
                <li className="hover:text-cyber-accent cursor-pointer">Mobile Apps</li>
                <li className="hover:text-cyber-accent cursor-pointer">Cloud Architecture</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-cyber-muted hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-cyber-muted hover:text-white cursor-pointer" />
                <TwitterIcon className="w-5 h-5 text-cyber-muted hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2026 CyberTech Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function TwitterIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-2.6-2.1-3-5.7-1.7-8.8m6.8-6.9c-1.3 2.1-2 4.9-2 6.7 0 0-4.5-5.2-12.9-7.5" />
    </svg>
  )
}