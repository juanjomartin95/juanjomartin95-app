import { useEffect, useMemo, useState } from 'react'
import { OFFSET_MODIFIER, POKEMON_BASE_URL } from '@/constants/endpoints.ts'
import { PokemonListInterface } from '@/models/pokemon.ts'

export const usePokemonList = () => {
  const [data, setData] = useState<PokemonListInterface>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const increaseOffset = (): void => {
    setOffset(offset + OFFSET_MODIFIER)
  }

  const decreaseOffset = (): void => {
    if (offset > 0) {
      setOffset(offset - OFFSET_MODIFIER)
    }
  }

  const endpoint = useMemo(() => `${POKEMON_BASE_URL}?offset=${offset}&limit=20`, [offset])

  useEffect(() => {
    setLoading(true);
    fetch(endpoint, {method: 'GET'})
      .then(response => response.json())
      .then(({results}) => setData(results))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading, increaseOffset, decreaseOffset, page: offset / OFFSET_MODIFIER + 1 };
};
