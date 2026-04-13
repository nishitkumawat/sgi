import { motion } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'

export default function ApplicationsGrid({ applications = [] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all flex flex-col items-start border-b-4 border-b-slate-100 hover:border-b-blue-600"
                >
                    <div className="w-full aspect-video relative overflow-hidden bg-slate-100">
                        <img 
                            src={app.image} 
                            alt={app.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                            <LayoutGrid className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div className="p-8">
                        <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{app.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{app.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
