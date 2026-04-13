export const BLOGS = [
  {
    id: 1,
    slug: 'benefits-of-roll-forming',
    title: 'Top 5 Benefits of Cold Roll Forming in Manufacturing',
    excerpt: 'Discover why cold roll forming is the most efficient method for producing continuous cross-section profiles across heavy machinery and construction industries.',
    content: `Cold roll forming is a continuous bending operation where a long strip of metal is passed through consecutive sets of rolls, each performing an incremental part of the bend. This process is inherently efficient and cost-effective for large-volume production runs.

    One of the greatest benefits is the incredible speed of production combined with high dimensional consistency. From automotive parts to construction profiles, roll-formed parts exhibit excellent structural integrity. They allow the use of thinner materials to achieve the same strength as much heavier press-braked counterparts.
    
    Overall, investing in high-quality roll forming machinery like those from Shree Gayatri Industries guarantees long-term productivity and ROI for your manufacturing plant.`,
    author: 'Shree Gayatri Industries Technical Team',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1565439399-f2c90c52bb8a?q=80&w=1000&auto=format&fit=crop',
    readTime: '3 min read',
  },
  {
    id: 2,
    slug: 'maintaining-shutter-motors',
    title: 'Essential Maintenance Tips for Rolling Shutter Motors',
    excerpt: 'Extend the lifespan of your rolling shutter motors with these preventative maintenance and lubrication tips.',
    content: `Rolling shutter motors form the backbone of security and operation in both industrial and retail environments. Ignoring their maintenance is a recipe for sudden downtime and costly emergency repairs.
    
    Key tips include regularly checking the limit switches, listening for unusual grinding noises which may indicate worn-out gears, and ensuring that the electrical connections remain tight and free of corrosion. Lubricating the guiding tracks and occasionally the gear assemblies (if exposed) can drastically reduce the strain on the motor itself.
    
    Remember, an efficiently running motor draws less current and operates cooler. Schedule a quarterly check-up for all heavy-use shutters.`,
    author: 'Shree Gayatri Industries Maintenance',
    date: 'April 5, 2026',
    image: 'https://images.unsplash.com/photo-1580983568864-7585ab11aadc?q=80&w=1000&auto=format&fit=crop',
    readTime: '4 min read',
  },
  {
    id: 3,
    slug: 'future-of-automated-machining',
    title: 'The Future of Automated Machining and PLC Systems',
    excerpt: 'How advanced PLC and HMI controls are revolutionizing precision roll forming and lowering operator fatigue.',
    content: `The modern manufacturing floor is unrecognisable from a decade ago. With the integration of advanced programmable logic controllers (PLCs) and intuitive touch-screen Human-Machine Interfaces (HMIs), operating heavy machinery has never been safer or more predictable.
    
    In the context of roll forming, PLCs can precisely coordinate servo motors to execute cut-to-length orders with millimetre accuracy. This directly translates to less material waste and faster changeover times.
    
    We at Shree Gayatri Industries are constantly integrating these state-of-the-art automation features into our custom machines to ensure our clients stay ahead of the competitive curve.`,
    author: 'Shree Gayatri Industries Engineering',
    date: 'March 28, 2026',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    readTime: '5 min read',
  }
];

export function getBlogBySlug(slug) {
  return BLOGS.find((b) => b.slug === slug) || null;
}
