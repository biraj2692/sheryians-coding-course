import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const{id, image, title, description, instruction, category, chef } = props.recipe ;
  return (
    <Link 
        to={`/recipes/details/${id}`}
        className='duration-100 hover:scale-105 mr-3 mt-3 block w-[30vh] rounded overflow-hidden shadow'>
        <img className='w-full h-[20vh] object-cover'  src={image} alt="Recipe Image" />
        <h1 className='px-2 '>{title}</h1>
        <small> {chef} </small>
        <p>
            {description.slice(0,100)} ...{""}
            <small className='text-blue-400'>More.</small>
        </p>
    </Link>
  )
}

export default RecipeCard