import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ id, name, types, image, color }) => {
    return (
        <Link to={`/${name}`}>
            <div className={`cursor-pointer hover:shadow-2xl py-4 px-8 rounded-lg ${color}`}>
                <h1 className="text-2xl font-bold text-right opacity-20">{id}</h1>
                <img className="w-24 h-24" src={image} alt={name} />
                <h3 className="text-1xl font-bold text-center">{name}</h3>
                <div className="mt-2 text text-center">
                    {types[0].type.name}
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard
