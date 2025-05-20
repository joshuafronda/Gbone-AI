import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import { FiUploadCloud, FiImage } from 'react-icons/fi'
import toast from 'react-hot-toast'

const ImageUploader = ({ onImageUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    
    if (!file) return
    
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file')
      return
    }
    
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size too large (max 10MB)')
      return
    }
    
    onImageUpload(file)
  }, [onImageUpload])
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">
          Remove Image Backgrounds Instantly
        </h2>
        <p className="text-zinc-300 max-w-xl mx-auto">
          Upload your image and our AI will remove the background in seconds. 
          Get perfect cutouts every time with our powerful technology.
        </p>
      </div>

      <div 
        {...getRootProps()} 
        className={`
          glass-card group
          border-2 border-dashed rounded-xl
          flex flex-col items-center justify-center
          py-16 px-6 cursor-pointer
          transition-all duration-300
          ${isDragActive 
            ? 'border-primary-400 bg-primary-900/30' 
            : 'border-zinc-700 hover:border-primary-400 hover:bg-primary-900/20'
          }
        `}
      >
        <input {...getInputProps()} />
        
        <motion.div
          animate={{ 
            y: isDragActive ? [-8, 0, -8] : 0,
          }}
          transition={{
            repeat: isDragActive ? Infinity : 0,
            duration: isDragActive ? 2 : 0.5
          }}
          className="mb-4 text-zinc-500 group-hover:text-primary-400"
        >
          {isDragActive ? (
            <FiImage size={64} className="text-primary-400" />
          ) : (
            <FiUploadCloud size={64} />
          )}
        </motion.div>
        
        <div className="text-center">
          <p className="text-lg font-medium text-zinc-300 mb-1">
            {isDragActive ? 'Drop your image here' : 'Drag & drop your image here'}
          </p>
          <p className="text-zinc-400 mb-4">
            or <span className="text-primary-400">browse files</span>
          </p>
          <p className="text-xs text-zinc-500">
            Supported formats: JPG, PNG, WEBP, GIF (max 10MB)
          </p>
        </div>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<FiUploadCloud />}
          title="Easy Upload"
          description="Simply drag & drop or browse your files. No sign-up required."
        />
        <FeatureCard 
          icon={<span className="text-xl">⚡</span>}
          title="Instant Processing"
          description="Our AI removes backgrounds in seconds with high accuracy."
        />
        <FeatureCard 
          icon={<span className="text-xl">📥</span>}
          title="Quick Download"
          description="Download your image with transparent background ready to use."
        />
      </div>
    </motion.div>
  )
}

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="card bg-zinc-800/50 p-6 flex flex-col items-center text-center border-zinc-700"
  >
    <div className="w-12 h-12 bg-primary-900/50 text-primary-400 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-medium text-lg mb-2 text-zinc-100">{title}</h3>
    <p className="text-zinc-400 text-sm">{description}</p>
  </motion.div>
)

export default ImageUploader