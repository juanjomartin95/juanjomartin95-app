import '@/components/pokemonCard/PokemonCard.scss'
import { Button, Tag } from 'juanjomartin95-lib'
import { Pokemon } from '@/models/pokemon.ts'
import ArrowLeft from '@/assets/icons/ArrowLeft.tsx'

interface PokemonCardProps {
  data: Pokemon,
  closeModal: () => void,
}

const PokemonCard = ({ data, closeModal }: PokemonCardProps) => {
  return (
    <section className="pokemon-card">
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
            <img src={data?.sprites.other.dream_world.front_default} alt="" className="pokemon-image" />
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
