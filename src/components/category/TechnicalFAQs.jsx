import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function TechnicalFAQs({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                    >
                        <span className="text-base font-black text-slate-900 tracking-tight">{faq.q}</span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                            {openIndex === i ? <Minus className="w-4 h-4 text-blue-600" /> : <Plus className="w-4 h-4 text-slate-400" />}
                        </div>
                    </button>
                    {openIndex === i && (
                        <div className="px-8 pb-8 text-sm text-slate-500 font-medium leading-relaxed animate-fadeup">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
