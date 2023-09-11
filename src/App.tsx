import Header from '@/components/header/Header.tsx'
import Footer from '@/components/footer/Footer.tsx'
import PokemonList from '@/components/pokemonList/PokemonList.tsx'
import PokemonCard from '@/components/pokemonCard/PokemonCard.tsx'
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner.tsx'

import { PokemonListInterface } from '@/models/pokemon.ts'

import { usePokemonDetail } from '@/hooks/usePokemonDetail.ts'

import '@/App.scss'

const App = () => {
  const { data: pokemonDetails, loading, setId, id } = usePokemonDetail()
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
                  setId(undefined)
                }}
              />
            )
          )}
        </div>
      )}
      <PokemonList setSelectedPokemon={(pokemonName: PokemonListInterface['name']) => setId(pokemonName)} />
      <Footer />
    </>
  )
}

export default App
