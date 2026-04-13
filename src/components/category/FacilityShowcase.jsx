export default function FacilityShowcase({ facility }) {
    if (!facility) return null
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
                <p className="text-xl font-bold text-white/90 leading-relaxed border-l-4 border-blue-500 pl-8">
                    {facility.description}
                </p>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Location</p>
                        <p className="text-lg font-black text-white">{facility.location}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Facility Size</p>
                        <p className="text-lg font-black text-white">{facility.size}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Key Infrastructure</p>
                    <div className="flex flex-wrap gap-3">
                        {facility.equipment.map((item, i) => (
                            <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/70">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-x-8 inset-y-8 border border-dashed border-white/20 rounded-2xl z-10 pointer-events-none" />
                <img 
                    src={facility.image} 
                    alt="Manufacturing Facility"
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
            </div>
        </div>
    )
}
