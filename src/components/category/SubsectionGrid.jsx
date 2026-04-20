import { Box, Sun, HardHat, Cog, Workflow } from 'lucide-react'

const ICONS = {
    metric: Cog,
    solar: Sun,
    structural: HardHat,
    custom: Workflow,
    electric: Workflow,
    gear: Cog,
    remote: Box
}

export default function SubsectionGrid({ subsections = [] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {subsections.map((sub, i) => {
                const Icon = ICONS[sub.icon] || Box
                return (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:bg-white hover:shadow-xl transition-all group group-hover:-translate-y-1">
                        {(sub.image || sub.customSvg) && (
                            <div className="aspect-square bg-slate-200 relative overflow-hidden flex items-center justify-center">
                                {sub.customSvg ? (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-8">
                                        {sub.customSvg}
                                    </div>
                                ) : (
                                    <img 
                                        src={sub.image} 
                                        alt={sub.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <Icon className="w-4 h-4 text-slate-700" />
                                </div>
                            </div>
                        )}
                        <div className="p-6">
                            {(!sub.image && !sub.customSvg) && <Icon className="w-6 h-6 text-slate-400 mb-4 group-hover:text-blue-600 transition-colors" />}
                            <h4 className="text-[12px] font-black text-slate-900 tracking-tight leading-tight uppercase">{sub.title}</h4>
                            <div className="mt-3 w-4 h-1 bg-slate-200 group-hover:w-8 group-hover:bg-blue-600 transition-all duration-500" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
