import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[4rem] p-8 md:p-20 overflow-hidden relative">
          {/* Accent Blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 blur-[100px] -ml-48 -mb-48" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter"
              >
                LET'S BUILD <br />
                <span className="text-gradient">YOUR LEGACY.</span>
              </motion.h2>
              <p className="text-white/60 text-xl mb-12 max-w-md">
                Ready to take your brand to the next level? Our consultants are waiting to architect your growth path.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-medium">hello@digitalmarkitors.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-medium">+91 (991) 085 4110</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Office</p>
                    <p className="text-xl font-medium">Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem]"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-black/40 tracking-widest mb-2 block">Full Name</label>
                    <input type="text" className="w-full bg-black/5 border-none rounded-2xl p-4 text-black focus:ring-2 focus:ring-brand-primary outline-hidden" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-black/40 tracking-widest mb-2 block">Email Address</label>
                    <input type="email" className="w-full bg-black/5 border-none rounded-2xl p-4 text-black focus:ring-2 focus:ring-brand-primary outline-hidden" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-black/40 tracking-widest mb-2 block">Company / Website</label>
                  <input type="text" className="w-full bg-black/5 border-none rounded-2xl p-4 text-black focus:ring-2 focus:ring-brand-primary outline-hidden" placeholder="Your Brand" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-black/40 tracking-widest mb-2 block">Message</label>
                  <textarea rows={4} className="w-full bg-black/5 border-none rounded-2xl p-4 text-black focus:ring-2 focus:ring-brand-primary outline-hidden resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-brand-primary transition-colors flex items-center justify-center gap-2 group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
