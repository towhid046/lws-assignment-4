import React from 'react'

const ImageCard = ({image}) => {
    return (
        <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
            <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-image-down-icon lucide-image-down"
                >
                    <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                    <path d="m14 19 3 3v-5.5" />
                    <path d="m17 22 3-3" />
                    <circle cx={9} cy={9} r={2} />
                </svg>
            </div>
            <img
                src={image}
                alt="Anime character in kimono"
                className="w-full h-48 object-cover"
            />
        </div>
    )
}

export default ImageCard