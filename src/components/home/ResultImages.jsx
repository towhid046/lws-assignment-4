import React from 'react'
import ImageCard from '@/components/shared/ImageCard'

import aiImage1 from '@/assets/images/ai-image-1.jpeg'
import aiImage2 from '@/assets/images/ai-image-2.jpeg'
import aiImage3 from '@/assets/images/ai-image-3.jpeg'
import aiImage4 from '@/assets/images/ai-image-4.jpeg'
import aiImage5 from '@/assets/images/ai-image-5.jpeg'
import aiImage6 from '@/assets/images/ai-image-6.jpeg'

const images = [
    aiImage1,
    aiImage2,
    aiImage3,
    aiImage4,
    aiImage5,
    aiImage6
]

const ResultImages = () => {
    return (
        <div>
            <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <ImageCard image={image} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ResultImages