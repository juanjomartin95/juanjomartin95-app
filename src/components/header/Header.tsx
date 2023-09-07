import '@/components/header/Header.scss'
import logo from '@/assets/images/pokemon_logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Pokemon logo" />
    </header>
  )
}

export default Header
