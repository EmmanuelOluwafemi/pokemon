import React, { useContext, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PokemonContext } from '../context/PokemonContext'

import { colorPicker } from '../utils/index'
import PokemonCard from './PokemonCard'

const PokemonWrapper = () => {

    const { getPokemon, pokemons } = useContext(PokemonContext)

    useEffect(() => {
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <InfiniteScroll
            dataLength={pokemons.length} //This is important field to render the next data
            next={getPokemon}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="grid grid-cols-2 md:flex w-full md:flex-wrap md:items-start md:justify-center gap-6">
                {pokemons.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        types={pokemon.types}
                        image={pokemon.sprites.other.dream_world.front_default}
                        color={colorPicker(pokemon.types[0].type.name)}
                    />
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default PokemonWrapper
