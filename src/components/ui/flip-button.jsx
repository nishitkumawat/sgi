import { useState } from 'react'
import { motion } from 'framer-motion'

export function FlipButton({ text1, text2 }) {
  const [show, setShow] = useState(false)
  const flipVariants = {
    one: {
      rotateX: 0,
      backgroundColor: '#1d4ed8', // blue-700
      color: '#ffffff',
    },
    two: {
      rotateX: 180,
      backgroundColor: '#ffffff',
      color: '#1d4ed8', // blue-700
    },
  }

  return (
      <div className="w-[200px]">
        <motion.button
          className="w-full cursor-pointer px-6 py-4 font-bold uppercase tracking-widest text-sm shadow-xl shadow-blue-200 hover:shadow-2xl"
          style={{
            borderRadius: 999, // Pill shaped rounded
            transformStyle: 'preserve-3d',
            perspective: 1000
          }}
          onClick={(e) => {
             // For usage as a link wrapper, stop propagation or let the parent handle click
             e.preventDefault();
             setShow(!show);
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          animate={show ? 'two' : 'one'}
          variants={flipVariants}
          transition={{ duration: 0.6, type: 'spring' }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotateX: show ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {text1}
          </motion.div>
          <motion.div
            animate={{ rotateX: show ? 0 : -180 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="absolute inset-0 flex items-center justify-center font-bold"
            style={{ 
               backfaceVisibility: 'hidden', 
               transform: 'rotateX(-180deg)' // Fix for framer motion text flipping upside down initially if rendering
            }}
          >
            {show ? text2 : ''}
          </motion.div>
        </motion.button>
      </div>
  );
}
