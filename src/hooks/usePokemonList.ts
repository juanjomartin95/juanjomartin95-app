import { useEffect, useState } from 'react'
import { OFFSET_MODIFIER } from '@/constants/endpoints.ts'
import { PokemonListInterface } from '@/models/pokemon.ts'
import getPokemonList from '@/services/getPokemonList.ts'

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

  useEffect(() => {
    setLoading(true);
    getPokemonList({ offset })
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [offset]);

  return { data, error, loading, increaseOffset, decreaseOffset, page: offset / OFFSET_MODIFIER + 1 };
};
