import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

const Header = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div>
              <h1 className="text-2xl font-bold text-primary-400">BGone AI</h1>
              <p className="text-xs text-zinc-400">Remove backgrounds instantly</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <button 
              onClick={() => setShowModal(true)}
              className="text-zinc-400 hover:text-primary-400 transition-colors text-sm hidden sm:block"
            >
              How it works
            </button>
          </motion.div>
        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-800 rounded-xl max-w-lg w-full p-6 relative border border-zinc-700"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <FiX size={24} />
            </button>

            <h2 className="text-2xl font-bold text-zinc-100 mb-4">How BGone AI Works</h2>
            
            <div className="space-y-4 text-zinc-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-zinc-100 mb-1">Upload Your Image</h3>
                  <p className="text-sm">Simply drag and drop your image or click to browse. We support JPG, PNG, WEBP, and GIF formats up to 10MB.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-zinc-100 mb-1">AI Processing</h3>
                  <p className="text-sm">Our advanced AI analyzes your image and removes the background while preserving the main subject with high precision.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-zinc-100 mb-1">Download & Use</h3>
                  <p className="text-sm">Download your image with a transparent background in PNG format, ready to use in any project.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-700">
              <p className="text-sm text-zinc-400">
                Our AI technology ensures high-quality results with smooth edges and accurate subject detection. No sign-up required - start removing backgrounds instantly!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Header