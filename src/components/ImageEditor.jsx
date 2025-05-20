import { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { FiDownload, FiSave, FiArrowLeft, FiSliders } from 'react-icons/fi'
import toast from 'react-hot-toast'

const ImageEditor = ({ currentImage, processedImage, isProcessing, onReset }) => {
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [showAdjustments, setShowAdjustments] = useState(false)

  const handleDownload = () => {
    if (!processedImage) return
    
    const link = document.createElement('a')
    link.href = processedImage
    link.download = `bgone-${currentImage.name || 'image'}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    toast.success('Image downloaded successfully!')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="flex-1">
          <div className="bg-zinc-800 rounded-xl overflow-hidden relative">
            {isProcessing ? (
              <div className="aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-zinc-300">Processing your image...</p>
                </div>
              </div>
            ) : (
              <ReactCompareSlider
                className="aspect-square md:aspect-auto md:h-[400px] w-full object-contain"
                itemOne={
                  <ReactCompareSliderImage
                    src={currentImage.url}
                    alt="Original image"
                    style={{ 
                      objectFit: 'contain',
                      filter: `brightness(${brightness}%) contrast(${contrast}%)` 
                    }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={processedImage || currentImage.url}
                    alt="Processed image"
                    style={{ 
                      objectFit: 'contain',
                      filter: `brightness(${brightness}%) contrast(${contrast}%)` 
                    }}
                  />
                }
              />
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={onReset}
              className="btn btn-outline flex items-center gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              <FiArrowLeft /> Back
            </button>
            
            <button
              onClick={() => setShowAdjustments(!showAdjustments)}
              className={`btn ${showAdjustments ? 'btn-accent' : 'btn-outline border-zinc-700 text-zinc-300 hover:bg-zinc-800'} flex items-center gap-2`}
            >
              <FiSliders /> Adjustments
            </button>
            
            <div className="flex-1"></div>
            
            <button
              onClick={handleDownload}
              disabled={isProcessing || !processedImage}
              className="btn btn-primary flex items-center gap-2"
            >
              <FiDownload /> Download
            </button>
          </div>
          
          {showAdjustments && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700"
            >
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-zinc-400">Brightness: {brightness}%</label>
                  <button 
                    onClick={() => setBrightness(100)}
                    className="text-xs text-primary-400 hover:underline"
                  >
                    Reset
                  </button>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={brightness}
                  onChange={(e) => setBrightness(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-zinc-400">Contrast: {contrast}%</label>
                  <button 
                    onClick={() => setContrast(100)}
                    className="text-xs text-primary-400 hover:underline"
                  >
                    Reset
                  </button>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={contrast}
                  onChange={(e) => setContrast(e.target.value)}
                  className="w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="w-full md:w-64 bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
          <h3 className="font-medium text-lg mb-4 text-zinc-100">Image Details</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs text-zinc-500">Filename</p>
              <p className="text-sm text-zinc-300 truncate">{currentImage.name || 'Untitled'}</p>
            </div>
            
            {currentImage.size && (
              <div>
                <p className="text-xs text-zinc-500">Size</p>
                <p className="text-sm text-zinc-300">{formatBytes(currentImage.size)}</p>
              </div>
            )}
            
            {currentImage.type && (
              <div>
                <p className="text-xs text-zinc-500">Type</p>
                <p className="text-sm text-zinc-300">{currentImage.type}</p>
              </div>
            )}
            
            {currentImage.uploadedAt && (
              <div>
                <p className="text-xs text-zinc-500">Uploaded</p>
                <p className="text-sm text-zinc-300">{currentImage.uploadedAt.toLocaleString()}</p>
              </div>
            )}
            
            <div className="pt-2">
              <p className="text-xs text-zinc-500 mb-2">Save options</p>
              <div className="space-y-2">
                <button
                  disabled={isProcessing || !processedImage}
                  className="btn btn-outline w-full text-sm justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  <span className="mr-2">PNG</span>
                  <span className="text-xs text-zinc-500">(Transparent)</span>
                </button>
                <button
                  disabled={isProcessing || !processedImage}
                  className="btn btn-outline w-full text-sm justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  <span className="mr-2">JPG</span>
                  <span className="text-xs text-zinc-500">(White BG)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export default ImageEditor