import { POKEMON_BASE_URL } from '@/constants/endpoints.ts'

interface PokemonDetailService {
  id: string
}

const getPokemonDetail = ({ id }: PokemonDetailService) => {
  return fetch(`${POKEMON_BASE_URL}${id}`, { method: 'GET' })
    .then(async response => {
      return await response.json()
    })
    .then(results => results)
    .catch(error => error)
}

export default getPokemonDetail