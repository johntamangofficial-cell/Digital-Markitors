import { motion } from "motion/react";
import { Search, Share2, BarChart3, Globe, PenTool, ShieldCheck, Headphones, MousePointer2, Zap } from "lucide-react";

const services = [
  {
    title: "SEO Mastery",
    desc: "Dominate search engine results with our data-driven organic strategies.",
    icon: <Search className="text-brand-primary" />,
    size: "col-span-1 md:col-span-2",
    color: "bg-brand-primary/10"
  },
  {
    title: "Social Media",
    desc: "Build community and buzz through strategic content and engagement.",
    icon: <Share2 className="text-brand-secondary" />,
    size: "col-span-1",
    color: "bg-brand-secondary/10"
  },
  {
    title: "Performance Ads",
    desc: "High-ROI PPC campaigns that scale your business rapidly.",
    icon: <Zap className="text-orange-400" />,
    size: "col-span-1",
    color: "bg-orange-400/10"
  },
  {
    title: "Web Design",
    desc: "Stunning, high-conversion websites tailored for modern brands.",
    icon: <Globe className="text-blue-400" />,
    size: "col-span-1 md:col-span-2",
    color: "bg-blue-400/10"
  },
  {
    title: "Content Marketing",
    desc: "Strategic storytelling that captures attention and builds trust.",
    icon: <PenTool className="text-emerald-400" />,
    size: "col-span-1",
    color: "bg-emerald-400/10"
  },
  {
    title: "ORM & Listening",
    desc: "Protect your reputation with 24/7 monitoring and strategic response.",
    icon: <ShieldCheck className="text-red-400" />,
    size: "col-span-1",
    color: "bg-red-400/10"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
            >
              STOP GUESSING.<br />
              <span className="text-white/50">START GROWING.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-lg"
            >
              Our ecosystem of digital services is designed to track, analyze, scale, and repeat. 
              We don't just provide services; we build growth engines.
            </motion.p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-3xl font-display font-bold">9+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Core Verticals</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-right">
              <p className="text-3xl font-display font-bold">190%</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Avg. Organic Growth</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${service.size} group relative p-8 glass rounded-[2.5rem] overflow-hidden transition-all hover:bg-white/10`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                <MousePointer2 className="text-brand-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
