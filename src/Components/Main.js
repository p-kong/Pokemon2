import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


export default function Main() {

  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [nextPageUrl, setNextPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  const retrieveData = async () => {
    setLoading(true)
    const res = await axios.get(currentUrl)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    getIndividualPokemon(res.data.results)
    setLoading(false)
    console.log('res', res.data)
  }

  const getIndividualPokemon = async(res) => {
    res.map(async(singlePokemon)=> {
      const result = await axios.get(singlePokemon.url)
      setPokemon(state => {
        state = [...state, result.data]
        state.sort((a,b) => a.id - b.id)
        return state
      })
    })
  }

  useEffect(() => {
    setLoading(true)
    retrieveData()
    setLoading(false)
  },[currentUrl])

  return (
    <div>
      <div className="container">
        {pokemon.map((p)=> (
          <Card pokemon={p} key={p.id}/>
        ))}
          <div className="btn-group">
            {prevPageUrl && <button onClick= {()=> {
              setPokemon([])
              setCurrentUrl(prevPageUrl)
            }}>Previous</button>}

          {nextPageUrl && <button onClick= {()=> {
              setPokemon([])
              setCurrentUrl(nextPageUrl)
            }}>Next</button>}

          </div>
      </div>

    </div>
  )
}
