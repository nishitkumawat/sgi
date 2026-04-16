import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import CategoryLanding from './pages/CategoryLanding'
import SolarStructure from './pages/SolarStructure'
import machinesImg from './assets/machines_hero.png'
import solarImg from './assets/solar_hero.png'
import motorImg from './assets/motors_hero.png'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            
            {/* Specialized Pillars */}
            <Route path="/machines" element={
              <CategoryLanding 
                title="Roll Forming Machines" 
                description="Heavy-duty profile engineering and custom machinery designed for high-throughput industrial manufacturing."
                filterType="category"
                filterValue="roll-forming"
                image={machinesImg}
              />
            } />
            <Route path="/solar-structure" element={<SolarStructure />} />
            <Route path="/motors" element={
              <CategoryLanding 
                title="Rolling Shutter Motors" 
                description="Next-generation automation and high-torque motors for secure and reliable industrial shutter operation."
                filterType="category"
                filterValue={['shutter-motors', 'motor-accessories']}
                image={motorImg}
              />
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-24 text-center px-6">
      <p className="text-8xl mb-6">🔧</p>
      <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Page Not Found</h1>
      <p className="text-slate-500 mb-8 max-w-md">The page you're looking for doesn't exist. Let's get you back on track.</p>
      <a href="/" className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-200 hover:-translate-y-0.5 transition-all text-sm">
        Go to Homepage
      </a>
    </div>
  )
}

export default App
