import '@/components/header/Header.scss'
import logo from '@/assets/images/pokemon_logo.png'
import { ALT_POKEMON_LOGO } from '@/constants/texts.ts'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header data-testid='header'>
      <img src={logo} alt={ALT_POKEMON_LOGO} />
    </header>
  )
}

export default Header
