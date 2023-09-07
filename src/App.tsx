import Header from '@/components/header/Header.tsx'
import Footer from '@/components/footer/Footer.tsx'
import { Button, ColumnDefs, Table } from 'juanjomartin95-lib'
import { usePokemonList } from '@/hooks/usePokemonList.ts'
import { BUTTON_NEXT, BUTTON_PREV, BUTTON_SEE_MORE, TABLE_ACTIONS, TABLE_POKEMON_NAME } from '@/constants/texts.ts'
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner.tsx'

function App() {
  const { data: listData, loading: listLoading, increaseOffset, decreaseOffset } = usePokemonList()
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
          action: (rowElement: any) => {
            console.log(rowElement)
          },
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {listLoading ? <LoadingSpinner /> : listData && <Table columns={tableColumns} data={listData} />}
        <div className="button-wrapper">
          <Button onClick={() => decreaseOffset()}>{BUTTON_PREV}</Button>
          <Button onClick={() => increaseOffset()}>{BUTTON_NEXT}</Button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
