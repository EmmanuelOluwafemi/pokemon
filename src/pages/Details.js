import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router'
import { PokemonContext } from '../context/PokemonContext';
import { colorPicker } from '../utils';

const Details = () => {

    const { name } = useParams();

    const {getPokemonByName} = useContext(PokemonContext);
    const [detail, setDetail] = useState([]);
    const [color, setColor] = useState('');

    useEffect(() => {
        getPokemonByName(name).then(data => {
            setDetail(data);
            setColor(colorPicker(data.types[0].type.name));
        })
    }, [getPokemonByName, name])

    if (!detail) return;

    return (
        <div className=" h-60 max-w-screen-lg mx-auto flex flex-col md:grid md:grid-cols-3 gap-4">
            <div className={`h-full w-full flex items-center justify-center py-12 px-6 max-h-96 rounded-md ${color}`}>
                {detail && detail.sprites && detail.sprites.other &&
                    <img src={detail.sprites.other.dream_world.front_default} alt="pokemon" />
                }
            </div>
            <div className="p-3 md:col-start-2 col-end-4">
                <h1 className="text-3xl font-bold">{detail.name}</h1>

                <h4 className="text-xl mt-4">Ability</h4>
                <div className="flex items-center gap-2 mt-4">
                    {detail.abilities && detail.abilities.map(ability => {
                        return (
                            <p className="text-sm px-2 py-1 bg-gray-100 rounded-sm" key={ability.ability.name}>{ability.ability.name}</p>
                            )
                        })}
                </div>
                <h4 className="text-xl mt-4">Moves</h4>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                    {detail.moves && detail.moves.map(move => {
                        return (
                            <p className="text-sm px-2 py-1 bg-gray-100 rounded-sm" key={move.move.name}>{move.move.name}</p>
                        )
                    })}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Details