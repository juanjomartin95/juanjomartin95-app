import { LIMIT_QUERY, POKEMON_BASE_URL } from '@/constants/endpoints.ts'

interface PokemonListService {
  offset?: number
}

const getPokemonList = ({ offset = 0 }: PokemonListService) => {
  return fetch(`${POKEMON_BASE_URL}?offset=${offset}&limit=${LIMIT_QUERY}`, { method: 'GET' })
    .then(response => response.json())
    .then(({ results }) => results)
    .catch(error => error)
}

export default getPokemonList