import Header from '@/components/header/Header.tsx'
import Footer from '@/components/footer/Footer.tsx'
import PokemonList from '@/components/pokemonList/PokemonList.tsx'
import PokemonCard from '@/components/pokemonCard/PokemonCard.tsx'

import { PokemonListInterface } from '@/models/pokemon.ts'

import '@/App.scss'

import { usePokemonDetail } from '@/hooks/usePokemonDetail.ts'
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner.tsx'

function App() {
  const { data: pokemonDetails, loading, setPokemonId, id } = usePokemonDetail()
  return (
    <>
      <Header />
      {id && (
        <div className="full-overlay">
          {loading ? (
            <LoadingSpinner />
          ) : (
            pokemonDetails && (
              <PokemonCard
                data={pokemonDetails}
                closeModal={() => {
                  setPokemonId(null)
                }}
              />
            )
          )}
        </div>
      )}
      <PokemonList setSelectedPokemon={(pokemonName: PokemonListInterface['name']) => setPokemonId(pokemonName)} />
      <Footer />
    </>
  )
}

export default App
