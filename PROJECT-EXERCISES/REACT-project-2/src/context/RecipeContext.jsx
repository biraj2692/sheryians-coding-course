import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipe")) || [])
  },[]);
  
  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;

//   {
//     id: 1,  
//     image: "https://images.unsplash.com/photo-1604908177522-40242b2ee515",
//     title: "Spicy Masala Dosa",
//     description:
//       "A crispy South Indian crepe made with fermented rice and urad dal batter, filled with spicy mashed potatoes.",
//     ingredients: `- 1 cup rice  
//                   - 1/4 cup urad dal  
//                   - 1/2 tsp fenugreek seeds  
//                   - Salt to taste  
//                   - 3 potatoes, boiled and mashed  
//                   - 1 onion, sliced  
//                   - Mustard seeds, curry leaves, green chilies`,
//     instructions: `1. Soak rice, urad dal, and fenugreek seeds for 6 hours.  
//                    2. Grind to smooth batter and ferment overnight.  
//                    3. Spread batter on hot tawa and cook until crisp.  
//                    4. Prepare masala filling by sautéing onion and spices, mix with mashed potatoes.  
//                    5. Place filling inside dosa and serve with chutney.`,
//     category: "dinner",
//     chef: "Chef Ananya",
//   },
// ]);