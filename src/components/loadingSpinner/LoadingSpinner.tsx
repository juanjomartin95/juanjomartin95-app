import pokeball from '@/assets/images/pokeball.png'
import '@/components/loadingSpinner/LoadingSpinner.scss'
import { ALT_POKEBALL_SPINNER } from '@/constants/texts.ts'
const LoadingSpinner = () => {
  return <img src={pokeball} alt={ALT_POKEBALL_SPINNER} className='loading-spinner'/>
}

export default LoadingSpinner