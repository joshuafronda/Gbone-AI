import { motion } from 'framer-motion'

const Logo = ({ size = 40 }) => {
  return (
    <motion.div 
      className="relative"
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="absolute inset-0 bg-accent-500 rounded-lg"
        style={{ 
          clipPath: 'polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)'
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-primary-500 rounded-lg"
        style={{ 
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 60% 100%)'
        }}
      />
      <motion.div 
        className="absolute"
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)'
        }}
      >
        <svg 
          width={size * 0.5} 
          height={size * 0.5} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 8L10.6464 15.6464C11.1464 16.1464 12 16.1464 12.5 15.6464L20 8" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default Logo