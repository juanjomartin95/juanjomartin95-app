import { useEffect, useMemo, useState } from 'react'
import { pokemonBaseUrl } from '@/constants/endpoints.ts'

export const usePokemonList = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const increaseOffset = (): void => {
    setOffset(offset + 20)
  }

  const decreaseOffset = (): void => {
    if (offset > 0) {
      setOffset(offset - 20)
    }
  }

  const endpoint = useMemo(() => `${pokemonBaseUrl}?offset=${offset}&limit=20`, [offset])

  useEffect(() => {
    setLoading(true);
    fetch(endpoint, {method: 'GET'})
      .then(response => response.json())
      .then(({results}) => setData(results))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading, increaseOffset, decreaseOffset };
};
