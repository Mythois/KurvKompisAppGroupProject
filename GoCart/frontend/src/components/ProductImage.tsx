import React, { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
}

function ProductImage({ src, alt }: ProductImageProps) {
  const [imageWidth, setImageWidth] = useState('')

  const productImage = new Image()
  productImage.src = src

  productImage.onload = () => {
    if (productImage.width < productImage.height) {
      setImageWidth('w-1/2')
    } else {
      setImageWidth('w-3/4')
    }
  }
  return (
    <div>
      <img src={src} alt={alt} className={`productImage ${imageWidth}`} />
    </div>
  )
}

export default ProductImage
