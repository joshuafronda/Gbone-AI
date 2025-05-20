import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'

const RecentUploads = ({ images, onSelect }) => {
  if (!images.length) return null
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16"
    >
      <div className="flex items-center mb-4">
        <FiClock className="text-zinc-500 mr-2" />
        <h3 className="text-xl font-medium text-zinc-100">Recent Uploads</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-zinc-800/50 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group border border-zinc-700"
            onClick={() => onSelect(image)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={image.processed} 
                alt={image.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                <span className="text-xs text-white font-medium">View & Edit</span>
              </div>
            </div>
            <div className="p-2">
              <p className="text-xs text-zinc-400 truncate">{image.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RecentUploads