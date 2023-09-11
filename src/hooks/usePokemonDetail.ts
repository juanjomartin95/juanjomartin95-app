import { useEffect, useState } from 'react'
import { POKEMON_BASE_URL } from '@/constants/endpoints.ts'
import { Pokemon } from '@/models/pokemon.ts'

interface PokemonDetailInterface {
  data: Pokemon | undefined;
  error: Error | undefined;
  loading: boolean;
  setId: (id: string | undefined) => void;
  id: string | undefined;
}

export const usePokemonDetail = (): PokemonDetailInterface => {
  const [id, setId] = useState<string | undefined>()
  const [data, setData] = useState<Pokemon | undefined>()
  const [error, setError] = useState<Error | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      const endpoint = `${POKEMON_BASE_URL}${id}`
      fetch(endpoint, { method: 'GET' })
        .then(async response => {
          return await response.json()
        })
        .then(results => {
          setData(results)
        })
        .catch(setError)
        .finally(() => setLoading(false))
    } else {
      setData(undefined)
    }
  }, [id])

  return { data, error, loading, setId, id }
}
