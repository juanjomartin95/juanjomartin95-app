import { useEffect, useState } from 'react'
import { POKEMON_BASE_URL } from '@/constants/endpoints.ts'
import { Pokemon } from '@/models/pokemon.ts'

export const usePokemonDetail = () => {
  const [id, setId] = useState<string | null>()
  const [data, setData] = useState<Pokemon>()
  const [error, setError] = useState()
  const [loading, setLoading] = useState<boolean>(false)

  const setPokemonId = (id: string | null) => {
    setId(id)
  }

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
    }
  }, [id])

  return { data, error, loading, setPokemonId, id }
}
