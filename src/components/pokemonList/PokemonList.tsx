import { Button, ColumnDefs, Table } from 'juanjomartin95-lib'
import { usePokemonList } from '@/hooks/usePokemonList.ts'
import { BUTTON_NEXT, BUTTON_PREV, BUTTON_SEE_MORE, TABLE_ACTIONS, TABLE_POKEMON_NAME } from '@/constants/texts.ts'
import '@/components/pokemonList/PokemonList.scss'
import { PokemonListInterface } from '@/models/pokemon.ts'

interface PokemonListProps {
  setSelectedPokemon: (name: PokemonListInterface['name']) => void
}

const PokemonList = ({setSelectedPokemon}: PokemonListProps) => {
  const { data: listData, increaseOffset, decreaseOffset, page } = usePokemonList()
  const tableColumns: ColumnDefs = [
    {
      field: 'name',
      headerName: TABLE_POKEMON_NAME,
    },
    {
      field: 'actions',
      headerName: TABLE_ACTIONS,
      type: 'actions',
      actions: [
        {
          key: 'see-more',
          label: BUTTON_SEE_MORE,
          action: (rowElement: PokemonListInterface) => {
            setSelectedPokemon(rowElement.name)
          },
        },
      ],
    },
  ]

  return (
    <>
      <div className="table-wrapper">{listData && <Table columns={tableColumns} data={listData} />}</div>
      <div className="pagination-wrapper">
        {page > 1 && <Button onClick={() => decreaseOffset()}>{BUTTON_PREV}</Button>}
        <span>Page: {page}</span>
        <Button onClick={() => increaseOffset()}>{BUTTON_NEXT}</Button>
      </div>
    </>
  )
}

export default PokemonList