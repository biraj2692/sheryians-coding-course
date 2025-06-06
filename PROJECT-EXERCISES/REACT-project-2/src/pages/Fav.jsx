import React from 'react'
import RecipeCard from '../components/RecipeCard';

const Fav = () => {
  const fav = JSON.parse(localStorage.getItem("fav") || []);
  const renderRecipe = fav.map((recipe) => 
    <RecipeCard key={recipe.id} 
      recipe = {recipe}
    />
    )
  return (
    <div className='flex flex-wrap'>{fav.length > 0 ? renderRecipe : "No Favourites Found"}</div>
  )
}

export default Fav