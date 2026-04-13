export default function IndustrialSection({ title, subtitle, children, dark = false, gradient = false }) {
    return (
        <section className={`py-24 px-6 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${gradient ? 'bg-gradient-to-b from-white to-slate-50' : ''} border-y border-slate-100 relative overflow-hidden`}>
            {dark && <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48" />}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>{subtitle}</h2>
                    <p className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</p>
                </div>
                {children}
            </div>
        </section>
    )
}
