import { useState } from 'react'

import Header from '@/components/header/Header.tsx'
import Footer from '@/components/footer/Footer.tsx'
import PokemonList from '@/components/pokemonList/PokemonList.tsx'

import { PokemonListInterface } from '@/models/pokemon.ts'

import '@/App.scss'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string>()
  return (
    <>
      <Header />
      {selectedPokemon}
      <PokemonList setSelectedPokemon={(pokemonName: PokemonListInterface['name']) => setSelectedPokemon(pokemonName)}/>
      <Footer />
    </>
  )
}

export default App
