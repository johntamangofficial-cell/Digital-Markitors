import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-bold tracking-tighter mb-6">
              DM<span className="text-brand-primary">.</span>REIMAGINED
            </h2>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              A futuristic reimagining of Digital Markitors. Scaling brands through data-driven precision and radical creativity. 
              Based in Delhi NCR, operating worldwide.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-white/40">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Case Studies", "About Us", "Insights", "Contact"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-brand-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-white/40">Quick Links</h4>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Careers", "FAQs"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-brand-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            © 2026 DIGITAL MARKITORS REIMAGINED. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest">Back to Top</span>
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
