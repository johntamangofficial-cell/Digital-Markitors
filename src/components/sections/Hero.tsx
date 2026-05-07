import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Decor */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full" 
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-secondary/10 blur-[150px] rounded-full" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase glass rounded-full text-brand-primary">
              The Value of Visibility
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
          >
            DOMINATE THE <br />
            <span className="text-gradient">DIGITAL SKYLINE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We are Digital Markitors. A results-driven powerhouse in Delhi NCR dedicated to scaling your brand through data, creativity, and precision execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Book Strategy Call</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
            </button>
            <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Image Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] w-32 h-32 md:w-48 md:h-48 glass rounded-3xl overflow-hidden hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
      >
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop" 
          alt="Abstract 3D" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] w-24 h-24 md:w-40 md:h-40 glass rounded-3xl overflow-hidden hidden lg:block opacity-30 hover:opacity-100 transition-opacity"
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Earth" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
