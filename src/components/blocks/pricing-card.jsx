"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Check, ShieldCheck, Globe, Building2, UserCircle, Phone, Calendar } from "lucide-react";
import { Separator } from "../ui/separator";

export function PricingCard({
  title,
  description,
  price,
  features,
  buttonText = "Verify Credentials",
  onButtonClick,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      ref={containerRef}
      className="w-full"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className="relative mx-auto w-full max-w-5xl overflow-hidden border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] bg-white">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="relative z-10 grid lg:grid-cols-12">
          {/* Left Column: Essential Branding & CTA */}
          <div className="lg:col-span-4 p-8 lg:p-12 bg-slate-900 text-white flex flex-col justify-between">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-400 text-[9px] font-black tracking-widest uppercase rounded-full border border-blue-400/20 mb-8">
                <ShieldCheck className="w-3 h-3" />
                Verified Entity
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight leading-tight mb-4">
                {title}
              </h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div className="mt-12 space-y-8" variants={itemVariants}>
              <div className="space-y-1">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">GST Reference</p>
                 <p className="text-2xl font-mono font-bold text-blue-400 tracking-tight">{price}</p>
              </div>
              <Button 
                className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.1em] text-xs rounded-2xl shadow-xl shadow-blue-500/20" 
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </motion.div>
          </div>

          {/* Right Columns: Information Grid */}
          <div className="lg:col-span-8 p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {features.map((section, sIdx) => {
                const SectionIcon = sIdx === 0 ? Globe : UserCircle;
                return (
                  <motion.div key={sIdx} variants={itemVariants}>
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <SectionIcon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {section.items.map((item, iIdx) => (
                        <div key={iIdx} className="group">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-sm font-bold text-slate-700">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom Proof Strip */}
            <motion.div 
              className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              {[
                { label: 'Established', value: '2007', icon: Calendar },
                { label: 'Network', value: 'Pan-India', icon: Globe },
                { label: 'Status', value: 'Proprietary', icon: Building2 },
                { label: 'Contact', value: 'Available', icon: Phone },
              ].map((pill, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <pill.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter leading-none">{pill.label}</p>
                    <p className="text-[10px] font-bold text-slate-900 leading-none mt-1">{pill.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
