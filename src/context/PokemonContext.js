import { React, createContext, useState } from 'react'

export const PokemonContext = createContext(null)
export const PokemonProvider = ({ children }) => {

  const [pokemons, setPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [loading, setLoading] = useState(false)

  // get Pokemon data
  const getPokemon = async () => {
    setLoading(true)
    const res = await fetch(loadMore)
    const data = await res.json()
    
    //update the loadMore state with the next page url to fetch data when the user scrolls to the bottom of the page 
    setLoadMore(data.next)

    // since the first api is getting the name and url for more details only, we need to get the details of the pokemon
    function createPokemonData(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        // update the pokemon state with the new data
        setPokemon((prevState) => [...prevState, data])
      });

    }

    createPokemonData(data.results)

    setLoading(false)
  }

  const getPokemonByName = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    return data
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons, setPokemon,
        loadMore, setLoadMore,
        loading, setLoading,
        getPokemon, getPokemonByName
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
