import { useEffect, useState } from 'react'
import { Pokemon } from '@/models/pokemon.ts'
import getPokemonDetail from '@/services/getPokemonDetail.ts'

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
      getPokemonDetail({ id })
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    } else {
      setData(undefined)
    }
  }, [id])

  return { data, error, loading, setId, id }
}
