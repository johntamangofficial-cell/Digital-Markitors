import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";

const cases = [
  {
    client: "DHI International",
    stats: "190% Growth",
    sub: "Organic Traffic Surge",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["SEO", "Strategy"]
  },
  {
    client: "Rizaries",
    stats: "613% Growth",
    sub: "Organic Traffic Milestone",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Analytics", "PPC"]
  },
  {
    client: "Moti Mahal Delux",
    stats: "100% Visibility",
    sub: "Keyword Dominance",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop",
    tags: ["Local SEO", "Content"]
  }
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="work" ref={containerRef} className="py-32 bg-white/2">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 italic"
          >
            REAL RESULTS<span className="text-brand-primary">.</span>
          </motion.h2>
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs">Excellence through data & creativity</p>
        </div>

        <div className="space-y-32">
          {cases.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={project.client} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-1 w-full"
                >
                  <div className="relative group overflow-hidden rounded-[3rem] aspect-video glass">
                    <img 
                      src={project.img} 
                      alt={project.client} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-8">
                       <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                        ))}
                       </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-1"
                >
                  <TrendingUp className="text-brand-primary mb-6" size={48} />
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">{project.client}</h3>
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-6xl font-display font-black text-gradient">{project.stats}</span>
                    <span className="text-white/40 uppercase tracking-widest text-xs">{project.sub}</span>
                  </div>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    By implementing a comprehensive SEO and Performance strategy, we achieved unprecedented growth for {project.client}, surpassing industry benchmarks.
                  </p>
                  <button className="flex items-center gap-2 text-brand-primary font-bold group">
                    Full Case Study <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
