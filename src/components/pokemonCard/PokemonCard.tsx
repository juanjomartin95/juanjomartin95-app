import '@/components/pokemonCard/PokemonCard.scss'
import { Button, Tag } from 'juanjomartin95-lib'
import { Pokemon } from '@/models/pokemon.ts'
import ArrowLeft from '@/assets/icons/ArrowLeft.tsx'
import PokemonImage from '@/components/pokemonImage.tsx'
import { FC, useMemo } from 'react'

interface PokemonCardProps {
  data: Pokemon,
  closeModal: () => void,
}

const PokemonCard: FC<PokemonCardProps> = ({ data, closeModal }) => {
  const colorClass = useMemo(() => {
    return data?.types
      .map(({ type }) => type.name)[0]
      .toString()
      .replace(',', ' ')
  }, [data])
  return (
    <section className={`pokemon-card ${colorClass}`}>
      <div className="info">
        <div className="close-info-wrapper">
          <Button onClick={closeModal} variant="text" className="close-button">
            <ArrowLeft />
          </Button>
          <span className="order">#{data?.order}</span>
        </div>
        <div className="presentation-wrapper">
          <div className="name">{data?.name}</div>
          <div className="types">{data?.types.map(({ type, slot }) => <Tag key={slot}>{type.name}</Tag>)}</div>
          <div className="image-wrapper">
            <PokemonImage url={data?.sprites.other.dream_world.front_default} className='pokemon-image'/>
          </div>
        </div>
      </div>
      <div className="details-wrapper">
        <div className="detail">
          <span>Experience</span>
          <span className="number">{data?.base_experience}</span>
        </div>
        <div className="detail">
          <span>Height</span>
          <span className="number">{data?.height}</span>
        </div>
        <div className="detail">
          <span>Weight</span>
          <span className="number">{data?.weight}</span>
        </div>
      </div>
    </section>
  )
}

export default PokemonCard
