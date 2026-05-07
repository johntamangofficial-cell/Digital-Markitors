import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Milan Deep",
    role: "Marketing Director",
    text: "Digital Markitors transformed our online presence. Their SEO expertise is truly world-class, leading to a massive spike in qualified leads.",
    avatar: "https://i.pravatar.cc/150?u=milan"
  },
  {
    name: "Nitin Arora",
    role: "CEO, Tech Corp",
    text: "The team is proactive, transparent, and results-oriented. They don't just talk about traffic; they talk about business growth.",
    avatar: "https://i.pravatar.cc/150?u=nitin"
  },
  {
    name: "Pawandeep Singh",
    role: "Founder, Rizaries",
    text: "Working with them was the best decision for our e-commerce brand. Our performance marketing results are at an all-time high.",
    avatar: "https://i.pravatar.cc/150?u=pawan"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-0 w-full whitespace-nowrap overflow-hidden -translate-y-1/2 pointer-events-none opacity-5">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[20vw] font-display font-black leading-none uppercase"
        >
          TRUSTED BY LEADERS • TRUSTED BY LEADERS • TRUSTED BY LEADERS •
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Quote className="text-brand-primary mx-auto mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-display font-bold">CLIENT VOICES</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-[3rem] relative flex flex-col justify-between"
            >
              <p className="text-xl text-white/80 leading-relaxed mb-10 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full grayscale hover:grayscale-0 transition-all border-2 border-white/10" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
