import { useEffect, useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const payload = {
      full_name: formData.get('fullName'),
      company_name: formData.get('companyName') || "Not provided",
      email: formData.get('email'),
      contact_number: formData.get('contactNumber'),
      requirement: formData.get('requirement'),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/iot/sgi/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Inquiry Sent Successfully! We'll get back to you soon.");
        e.target.reset();
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Connect With Us</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Let's Discuss Your Project</h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
            Our technical engineers are ready to help you optimize your production line with the right machine configurations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">Physical Address</h4>
              <p className="text-slate-900 font-bold leading-relaxed text-lg">
                Plot No. 43, Satvabhumi Industrial Estate,<br />
                Near Kathvada G.I.D.C., Bakrol,<br />
                Ahmedabad – 382 430,<br />
                Gujarat, India
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">Call / WhatsApp</h4>
              <div className="space-y-6">
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-tighter mb-1">Sales Inquiry</span>
                    <a href="tel:+918154935437" className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tight">+91 81549 35437</a>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-tighter mb-1">Support</span>
                    <a href="tel:+919712905437" className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tight">+91 97129 05437</a>
                 </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">Official Email</h4>
              <a href="mailto:info@shreegayatriindustries.co.in" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all">
                info@shreegayatriindustries.co.in
              </a>
            </div>

            <div className="pt-8 border-t border-slate-100">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Follow Us</h4>
               <div className="flex gap-4">
                  {['FB', 'LI', 'IG', 'IN'].map(social => (
                     <div key={social} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer">
                        {social}
                     </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#f8fafc] rounded-sm p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-900/5">
              <h4 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Quick Inquiry Form</h4>
              <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Full Name</label>
                  <input name="fullName" required type="text" className="w-full px-6 py-4 rounded-sm bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm font-medium transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Company Name</label>
                  <input name="companyName" type="text" className="w-full px-6 py-4 rounded-sm bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm font-medium transition-all" placeholder="Industry Ltd." />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Email Address</label>
                  <input name="email" required type="email" className="w-full px-6 py-4 rounded-sm bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm font-medium transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Contact Number</label>
                  <input name="contactNumber" required type="tel" className="w-full px-6 py-4 rounded-sm bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm font-medium transition-all" placeholder="+91 0000 000000" />
                </div>
                <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Tell us about your requirement</label>
                   <textarea name="requirement" required className="w-full px-6 py-4 rounded-sm bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm font-medium transition-all h-36" placeholder="I need a customized roll forming machine for..."></textarea>
                </div>
                 <div className="md:col-span-2">
                    <button disabled={loading} type="submit" className="w-full py-5 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-200 hover:bg-blue-800 hover:scale-[1.02] transition-all duration-300 disabled:opacity-75 disabled:hover:scale-100 disabled:cursor-not-allowed">
                       {loading ? 'Dispatching...' : 'Dispatch Message'}
                    </button>
                 </div>
              </form>
            </div>

            {/* Google Map */}
            <div className="mt-12 w-full h-80 rounded-sm overflow-hidden border border-slate-100 shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.258167!2d72.7384789!3d22.9836299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e62cb2b0421b5%3A0x9f3b1509cea5b998!2sSHREE%20GAYATRI%20AUTOMATION!5e0!3m2!1sen!2sin!4v1713017500000!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
               </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
