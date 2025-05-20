import { useState } from 'react'
import Header from './components/Header'
import ImageUploader from './components/ImageUploader'
import ImageEditor from './components/ImageEditor'
import RecentUploads from './components/RecentUploads'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [currentImage, setCurrentImage] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [recentImages, setRecentImages] = useState([])

  const handleImageUpload = (imageFile) => {
    const imageUrl = URL.createObjectURL(imageFile)
    setCurrentImage({
      file: imageFile,
      url: imageUrl,
      name: imageFile.name,
      size: imageFile.size,
      type: imageFile.type,
      uploadedAt: new Date(),
    })
    setProcessedImage(null)
    setIsProcessing(true)
    
    setTimeout(() => {
      setIsProcessing(false)
      setProcessedImage(imageUrl)
      
      setRecentImages(prev => {
        const updated = [{ original: imageUrl, processed: imageUrl, name: imageFile.name }, ...prev]
        return updated.slice(0, 5)
      })
    }, 1500)
  }

  const handleReset = () => {
    setCurrentImage(null)
    setProcessedImage(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-900 to-zinc-800">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <AnimatePresence mode="wait">
          {!currentImage ? (
            <ImageUploader onImageUpload={handleImageUpload} key="uploader" />
          ) : (
            <ImageEditor 
              currentImage={currentImage}
              processedImage={processedImage}
              isProcessing={isProcessing}
              onReset={handleReset}
              key="editor"
            />
          )}
        </AnimatePresence>

        {recentImages.length > 0 && !currentImage && (
          <RecentUploads 
            images={recentImages} 
            onSelect={(img) => {
              setCurrentImage({
                url: img.original,
                name: img.name,
                uploadedAt: new Date(),
              })
              setProcessedImage(img.processed)
            }}
          />
        )}
      </main>
    </div>
  )
}

export default App