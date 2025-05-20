import { motion } from 'framer-motion'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Logo size={40} />
          <div>
            <h1 className="text-2xl font-bold text-primary-400">BGone</h1>
            <p className="text-xs text-zinc-400">Remove backgrounds instantly</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >
          <a 
            href="#" 
            className="text-zinc-400 hover:text-primary-400 transition-colors text-sm hidden sm:block"
          >
            How it works
          </a>
          <a 
            href="#" 
            className="text-zinc-400 hover:text-primary-400 transition-colors text-sm hidden sm:block"
          >
            Pricing
          </a>
          <button className="btn btn-primary">
            Sign Up Free
          </button>
        </motion.div>
      </div>
    </header>
  )
}

export default Header