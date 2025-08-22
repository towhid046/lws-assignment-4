import React, { useEffect, useState } from 'react'
import ImageCard from '@/components/shared/ImageCard'

import aiImage1 from '@/assets/images/ai-image-1.jpeg'
import aiImage2 from '@/assets/images/ai-image-2.jpeg'
import aiImage3 from '@/assets/images/ai-image-3.jpeg'
import aiImage4 from '@/assets/images/ai-image-4.jpeg'
import aiImage5 from '@/assets/images/ai-image-5.jpeg'
import aiImage6 from '@/assets/images/ai-image-6.jpeg'
import { getImages } from '../../api/api'

// const images = [
//     aiImage1,
//     aiImage2,
//     aiImage3,
//     aiImage4,
//     aiImage5,
//     aiImage6
// ]

const ResultImages = ({ inputState }) => {
    const [images, setImages] = useState(localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = await getImages(inputState);
                const existImages = localStorage.getItem('images') || '[]';
                const parsedImages = JSON.parse(existImages);
                if (parsedImages.length >= 6) {
                    parsedImages.pop(); // Remove the oldest image
                }
                parsedImages.unshift(url); // Add the new image
                localStorage.setItem('images', JSON.stringify(parsedImages));
                setImages(parsedImages);
            } catch (error) {
                setError('Failed to fetch images', error);
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };
        if( inputState.prompt && inputState.prompt.trim() !== '') {
            fetchImages();
        }
    }, [inputState.prompt]);

    if (loading) {
        return <div className="text-zinc-200">Generating images...</div>;
    }
    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }
    if (!images.length) {
        return <div className="text-zinc-200">No images found. Please enter a prompt.</div>;
    }

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

export default ResultImages;