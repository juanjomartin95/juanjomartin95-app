import { useState } from 'react'

import Header from '@/components/header/Header.tsx'
import Footer from '@/components/footer/Footer.tsx'
import PokemonList from '@/components/pokemonList/PokemonList.tsx'
import PokemonCard from '@/components/pokemonCard/PokemonCard.tsx'

import { PokemonListInterface } from '@/models/pokemon.ts'

import '@/App.scss'

import data from '@/mocks/bulbasaur.json'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string>()

  return (
    <>
      <Header />
      {selectedPokemon}
      <div className="full-overlay">
        <PokemonCard
          data={data}
          closeModal={() => {
            console.log('close modal')
          }}
        />
      </div>
      <PokemonList setSelectedPokemon={(pokemonName: PokemonListInterface['name']) => setSelectedPokemon(pokemonName)} />
      <Footer />
    </>
  )
}

export default App
