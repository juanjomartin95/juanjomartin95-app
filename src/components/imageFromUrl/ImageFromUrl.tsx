import { FC, useState } from 'react'
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner.tsx'

interface ImageProps {
  src: string
  className?: string
  alt?: string
}

const ImageFromUrl: FC<ImageProps> = ({ ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const image = new Image()
  image.src = props.src
  image.onload = () => {
    setLoaded(true)
  }

  return loaded ? <img {...props} /> : <LoadingSpinner />
}

export default ImageFromUrl
