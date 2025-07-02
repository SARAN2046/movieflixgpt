import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { bgImage } from '../utils/Constants'
const GptSearch = () => {
  return (
    <div>
      <img alt='bgimage' className='absolute -z-10' src={bgImage} />
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch