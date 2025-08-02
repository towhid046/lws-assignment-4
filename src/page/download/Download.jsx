import React from 'react'
import aiImage1 from '@/assets/images/ai-image-1.jpeg'
import aiImage2 from '@/assets/images/ai-image-2.jpeg'
import aiImage3 from '@/assets/images/ai-image-3.jpeg'
import aiImage4 from '@/assets/images/ai-image-4.jpeg'
import aiImage5 from '@/assets/images/ai-image-5.jpeg'
import aiImage6 from '@/assets/images/ai-image-6.jpeg'
import ImageCard from '@/components/shared/ImageCard';

const images = [
  aiImage1,
  aiImage2,
  aiImage3,
  aiImage4,
  aiImage5,
  aiImage6

]

const DownloadPage = () => {
  return (
    <main className="relative z-10">
      {/* Welcome Message */}
      <h2 className="text-4xl font-bold mb-8">
        Downloaded <span className="text-2xl">👋</span>
      </h2>
      {/* Image Presets Section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default DownloadPage;