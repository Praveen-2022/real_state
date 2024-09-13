import Image from 'next/image'
import React from 'react'

const ProjectOne = () => {
  return (
    <>
<div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden flex items-center justify-center">
  {/* High-quality image */}
  <Image
    src="/header/06.jpg" // Replace with your static image path
    alt="Static Image"
    width={2000} // High resolution
    height={2000} // High resolution
    quality={100} // Highest quality for the image
    priority // Load with high priority for faster rendering
    className="object-cover w-full h-full"
  />

  {/* Dark overlay only on image */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

  {/* Static text over the image */}
  <div className="absolute z-10 text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-center px-4">
    Parasnath Nagri
  </div>
</div>

    </>
  )
}

export default ProjectOne