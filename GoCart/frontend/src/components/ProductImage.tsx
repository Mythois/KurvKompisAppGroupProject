import { useState } from 'react'

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
      setImageWidth('w-1/3 mx-auto')
    } else {
      setImageWidth('w-4/5 mx-auto')
    }
  }
  return (
    <div>
      <img src={src} alt={alt} className={`productImage ${imageWidth}`} />
    </div>
  )
}

export default ProductImage
