import { FC, useState } from 'react'
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner.tsx'

interface PokemonImageProps {
  url: string
  className?: string
}

const PokemonImage: FC<PokemonImageProps> = ({ url, className }) => {
  const [loaded, setLoaded] = useState(false)
  const image = new Image()
  image.src = url
  image.onload = () => {
    setLoaded(true)
  }

  return loaded ? <img src={url} alt="Pokemon image" className={className} /> : <LoadingSpinner />
}

export default PokemonImage
