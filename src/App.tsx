/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  BadgeCheck, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Zap, 
  Scale, 
  Lock,
  ExternalLink,
  Mail,
  Clock,
  Award,
  Wrench,
  Star
} from 'lucide-react';

// --- Config ---
// Single source of truth for the funnel links.
const CHECKOUT_URL = 'https://go.klikwork.com/checkout/ai-literacy-for-recruiters';
const ENGINEER_STARTER_URL = 'https://www.klikwork.com/training/starter';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Klikwork" className="h-[84px]" />
      </div>
      <a 
        href="#pricing" 
        className="bg-klikwork-orange hover:bg-klikwork-orange/90 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]"
      >
        Get certified
      </a>
    </div>
  </nav>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-klikwork-orange transition-colors group"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-klikwork-orange' : 'text-brand-gray'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-gray leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen selection:bg-klikwork-orange selection:text-white">
      <Navbar />

      <main>
        {/* SECTION 1: Hero */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-klikwork-orange/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

              {/* Left: copy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-klikwork-orange/30 bg-klikwork-orange/10 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-klikwork-orange opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-klikwork-orange" />
                  </span>
                  The obligation already applies · Enforcement starts 2 August 2026
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-gradient">
                  Provably AI literate <br />
                  <span className="text-klikwork-orange">in 30 minutes.</span>
                </h1>
                <p className="text-xl md:text-2xl text-brand-gray mb-10 leading-relaxed max-w-2xl">
                  The EU AI Act requires recruiters who work with AI to demonstrate AI literacy. Three modules, one exam, an official watermarked certificate — finished today.
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6 text-sm text-brand-gray">
                  <div><span className="text-white font-bold">250+</span> recruiters certified</div>
                  <div className="hidden sm:block w-px h-4 bg-white/10" />
                  <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-klikwork-orange" /> 30 minutes, start to certificate</div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <a
                    href="#pricing"
                    className="bg-klikwork-orange hover:bg-klikwork-orange/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-klikwork-orange/20 hover:shadow-klikwork-orange/40"
                  >
                    Get certified
                  </a>
                  <div className="text-sm text-brand-gray">
                    No subscription. One payment. <br />
                    Certificate valid for one year.
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t border-white/5 max-w-2xl">
                  <p className="text-brand-gray leading-relaxed">
                    The EU AI Act requires anyone who works with AI to demonstrate AI literacy. This training covers everything a recruiter needs to know: how AI works, where bias hides, what GDPR and the AI Act require, and how to use AI tools responsibly in your daily work.
                  </p>
                </div>
              </motion.div>

              {/* Right: certificate mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="hidden lg:block flex-shrink-0 mt-12 lg:mt-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-klikwork-orange/20 blur-3xl rounded-2xl scale-90 translate-y-4" />
                  <img
                    src="/certificate.png"
                    alt="AI Literacy for Recruiters certificate sample with name, signature and watermark"
                    className="relative w-72 xl:w-80 rounded-2xl shadow-2xl shadow-black/50"
                  />
                  <p className="relative mt-6 text-sm text-brand-gray text-center max-w-72 xl:max-w-80">
                    The certificate that shows you take AI seriously.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 2: What you get */}
        <section className="py-24 px-6 bg-brand-card/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Play className="w-6 h-6 text-klikwork-orange" />,
                  title: "Three modules",
                  text: "30 minutes of focused video training. Watch at your own pace, on any device."
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-klikwork-orange" />,
                  title: "10-question test",
                  text: "Drawn from five categories. Pass with 8 out of 10 to receive your certificate."
                },
                {
                  icon: <BadgeCheck className="w-6 h-6 text-klikwork-orange" />,
                  title: "Digital certificate",
                  text: "Share directly on LinkedIn. Valid for one year. Verifiable by your employer or clients."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="glass-card p-10 rounded-3xl group hover:border-klikwork-orange/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-klikwork-orange/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: What the training covers */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-16">
              <h2 className="text-4xl font-bold mb-4">What the AI literacy training covers</h2>
              <div className="h-1 w-20 bg-klikwork-orange rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {[
                { title: "1. How AI works", desc: "Understand what LLMs, Machine Learning, Neural Networks, and AI agents actually are, explained through practical analogies.", icon: <Zap className="w-5 h-5" /> },
                { title: "2. The tools landscape", desc: "Navigate ChatGPT, Claude, Gemini, Copilot, and Perplexity without being overwhelmed by choice.", icon: <Users className="w-5 h-5" /> },
                { title: "3. Bias and ethics", desc: "Recognise bias in AI output, know what to do about it, and understand your responsibility as the final filter.", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "4. Privacy and GDPR", desc: "Know exactly what you can and cannot share with AI tools, and what the GDPR requires when AI processes candidate data.", icon: <Lock className="w-5 h-5" /> },
                { title: "5. The EU AI Act", desc: "Understand which AI tools are prohibited, which are high-risk, and what Article 4 requires of you personally.", icon: <Scale className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-8 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="text-klikwork-orange">{item.icon}</div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <p className="text-brand-gray flex-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: For whom */}
        <section className="py-24 px-6 bg-brand-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div {...fadeIn} className="glass-card p-12 rounded-3xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <CheckCircle2 className="text-klikwork-orange" />
                  This training is for you if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You use AI tools in your daily recruitment work",
                    "Your employer asks you to demonstrate AI literacy",
                    "You want a certificate that confirms you understand your legal obligations",
                    "You want to stand out as a recruiter who takes AI seriously"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-gray">
                      <div className="w-1.5 h-1.5 rounded-full bg-klikwork-orange mt-2.5 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeIn} className="glass-card p-12 rounded-3xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Users className="text-klikwork-orange" />
                  And for your team if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You manage a recruitment team and need to document compliance",
                    "Your organisation uses AI tools in your recruitment process",
                    "You want all your recruiters certified before the end of the year",
                    "You want easy access without a lot of administration"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-gray">
                      <div className="w-1.5 h-1.5 rounded-full bg-klikwork-orange mt-2.5 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Pricing */}
        <section id="pricing" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get your AI literacy certificate</h2>
              <p className="text-brand-gray text-lg mb-4">Each person receives their own personal access link and certificate.</p>
              <p className="text-klikwork-orange font-medium">Built only for recruiters — not a generic AI course. 30 focused minutes, 47 euro, and a certificate that goes straight onto your LinkedIn.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  badge: "Individual",
                  label: "Individual recruiter",
                  price: "47",
                  vat: "excl. VAT — 56.87 incl.",
                  desc: "One license. Pay by iDEAL or card, start immediately. Certificate today.",
                  cta: "Get my certificate for 47 euro"
                },
                {
                  badge: "Teams of 10+",
                  label: "Team license",
                  price: "from 27",
                  vat: "per seat, excl. VAT",
                  desc: "10–24 seats: 37 euro each. 25+ seats: 27 euro each. Order on invoice or request a quote first.",
                  cta: "Get my team certified"
                }
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-10 rounded-3xl flex flex-col ${i === 0 ? 'border-klikwork-orange/50 ring-1 ring-klikwork-orange/20' : ''}`}
                >
                  <div className="text-sm font-bold text-klikwork-orange uppercase tracking-wider mb-2">
                    {tier.badge}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{tier.label}</h4>
                  <p className="text-brand-gray mb-8">{tier.desc}</p>
                  <div className="mb-8 mt-auto">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className="text-brand-gray ml-2 text-xl">euro</span>
                    <div className="text-sm text-brand-gray mt-2">{tier.vat}</div>
                  </div>
                  <a
                    href={CHECKOUT_URL}
                    className={`w-full py-5 rounded-full text-center font-bold transition-all duration-300 transform active:scale-95 text-lg hover:scale-[1.02] ${i === 0 ? 'bg-klikwork-orange text-white hover:bg-klikwork-orange/90 hover:shadow-[0_0_25px_rgba(255,85,0,0.3)]' : 'bg-transparent border-2 border-klikwork-orange text-klikwork-orange hover:bg-klikwork-orange/10'}`}
                  >
                    {tier.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Testimonials */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Trusted by recruiters</h2>
              <p className="text-brand-gray">What recent graduates say about the training.</p>
            </motion.div>
            <motion.div {...fadeIn} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Well-structured training, packed with engaging examples. The final exam and certificate make it genuinely useful, especially with the AI Act on the horizon.",
                  name: "Frank Bax",
                  role: "Senior Recruiter, NLR",
                  photo: "/testimonial-frank-bax.jpeg"
                },
                {
                  quote: "A clear, sharp training on responsible AI in recruitment. Loved the AI-avatar format. Really put me back on my toes. Glad I passed!",
                  name: "Esther van der Hoorn",
                  role: "Manager, Happy Talent",
                  photo: "/testimonial-esther-van-der-hoorn.jpeg"
                },
                {
                  quote: "Clear, easy to follow, including the exam. You'll have your certificate in no time.",
                  name: "Patricia Voogd",
                  role: "Corporate Recruiter, BrabantZorg",
                  photo: "/testimonial-patricia-voogd.jpeg"
                }
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="bg-brand-card rounded-2xl p-8 border border-white/5 flex flex-col"
                >
                  <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-klikwork-orange text-klikwork-orange" />
                    ))}
                  </div>
                  <p className="text-brand-gray leading-relaxed mb-6 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-brand-gray">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 6: About Klikwork */}
        <section className="py-24 px-6 bg-brand-card/30">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-8 text-center">Klikwork trains recruiters on AI.</h2>
              <div className="space-y-6 text-brand-gray leading-relaxed text-lg text-center">
                <p>
                  Founded by Marcel van der Meer, Klikwork has trained 5,000+ recruiters at 500+ companies across Europe and beyond.
                </p>
                <p>
                  This training was developed because the EU AI Act creates a real compliance requirement, and most existing AI training is either too generic or too technical for practicing recruiters. We built something that is direct, practical, and testable.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION: Next step — AI Recruitment Engineer Starter */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              {...fadeIn}
              className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-klikwork-orange/10 blur-[100px] rounded-full -z-0" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-gray">
                    <Award className="w-4 h-4 text-klikwork-orange" /> After your certificate
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Certified? This is your next step.
                  </h2>
                  <p className="text-brand-gray leading-relaxed mb-6 text-lg">
                    AI literacy proves you understand AI. The <span className="text-white font-semibold">AI Recruitment Engineer Starter</span> teaches you to build with it — a self-paced course of seven modules and micro-lessons that hands you a working recruitment AI plugin you can use from day one.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Go from understanding AI to building your own recruitment workflows",
                      "Seven modules plus micro-lessons, self-paced, 60 days of access",
                      "Includes a ready-to-use recruitment plugin — 297 euro, worldwide"
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-gray">
                        <Wrench className="w-4 h-4 text-klikwork-orange mt-1 shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={ENGINEER_STARTER_URL}
                    className="inline-flex items-center gap-2 border-2 border-klikwork-orange text-klikwork-orange hover:bg-klikwork-orange hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
                  >
                    Explore the AI Recruitment Engineer Starter
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently asked questions about AI literacy for recruiters</h2>
              <p className="text-brand-gray">Everything you need to know about the training and certificate.</p>
            </motion.div>

            <div className="space-y-2">
              <FAQItem 
                question="How long does the training take?" 
                answer="30 minutes total across three modules. You can complete it in one sitting or spread it across multiple sessions."
              />
              <FAQItem 
                question="What happens after I pay?" 
                answer="You receive an email within a few minutes with your personal access link. Click it and you can start immediately. No account creation required."
              />
              <FAQItem 
                question="What score do I need to pass?" 
                answer="8 out of 10 on the knowledge test. If you do not pass the first time, you can retry as many times as you need. There is no penalty for retrying."
              />
              <FAQItem 
                question="Is the certificate recognised?" 
                answer="The certificate demonstrates AI literacy as required under Article 4 of the EU AI Act. It is issued by Klikwork BV and includes a public verification link you can share with your employer. It is valid for one year."
              />
              <FAQItem
                question="Can I buy licenses for my whole team?"
                answer="Yes. Teams of 10 or more get seat pricing: 37 euro per seat for 10 to 24 seats, 27 euro per seat for 25 or more, and you can order on invoice or request a quote first. You automatically receive a dashboard where you can invite your team members. Each person gets their own magic link, completes the training independently, and receives their own certificate on passing."
              />
              <FAQItem 
                question="Can I do the training on my phone?" 
                answer="Yes. The training works on any device — desktop, tablet, or mobile. Watch the modules and complete the test wherever it suits you."
              />
              <FAQItem 
                question="Are subtitles available?" 
                answer="Yes. All three video modules include subtitles so you can follow along in any environment, with or without sound."
              />
              <FAQItem 
                question="In what language is the training?" 
                answer="English. The training is designed for international recruitment professionals and uses straightforward business English throughout."
              />
            </div>
          </div>
        </section>

        {/* SECTION 8: Footer CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-klikwork-orange/10 -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Ready to get certified?</h2>
              <p className="text-xl text-brand-gray mb-12">30 minutes. One payment. A certificate you can share on LinkedIn today.</p>
              <a 
                href="#pricing" 
                className="inline-flex items-center gap-3 bg-klikwork-orange hover:bg-klikwork-orange/90 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-klikwork-orange/40 hover:shadow-klikwork-orange/60"
              >
                Get certified
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* SECTION 9: Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="Klikwork" className="h-[84px]" />
              </div>
              <p className="text-brand-gray max-w-sm leading-relaxed">
                Klikwork trains recruiters on AI. We teach people how to use tools well, ethically, and legally.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-gray">Links</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="https://klikwork.com" className="hover:text-klikwork-orange transition-colors flex items-center gap-1">klikwork.com <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href={ENGINEER_STARTER_URL} className="hover:text-klikwork-orange transition-colors">AI Recruitment Engineer Starter</a></li>
                <li><a href="https://www.klikwork.com/privacy-policy" className="hover:text-klikwork-orange transition-colors">Privacy policy</a></li>
                <li><a href="https://www.klikwork.com/terms-and-condition" className="hover:text-klikwork-orange transition-colors">Terms and conditions</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-gray">Contact</h5>
              <p className="text-sm text-brand-gray leading-relaxed">
                Klikwork BV<br />
                Assendorperdijk 1<br />
                8012 EG Zwolle<br />
                Netherlands
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-sm text-brand-gray flex flex-col md:flex-row justify-between gap-4">
            <p>© 2026 Klikwork BV. All rights reserved.</p>
            <p>Designed for recruiters who lead.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
