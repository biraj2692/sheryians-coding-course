import { nanoid } from 'nanoid/non-secure';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const navigate = useNavigate()
  const {data, setData}  = useContext(recipecontext);
  const {register, handleSubmit, reset} = useForm();
  
const submitHandler = (recipe) => {
  recipe.id = nanoid(); 
  const copyData = [...data];
  copyData.push(recipe);
  setData(copyData);
  localStorage.setItem("recipe", JSON.stringify(copyData)); // Fixed this line
  toast.success('New Recipe Created!')
  navigate(`/recipes/details/${recipe.id}`)
  reset();
}


  return (
    <form className='my-10 flex flex-col' onSubmit={handleSubmit(submitHandler)}>
      <input 
      className='border-b outline-0 p-2 mt-2'
      {...register("image")} 
      type="url" 
      placeholder='Enter Reciepe Image URL'
      />
      <input 
      className='border-b outline-0 p-2 mt-2'
      {...register("title")} 
      type="text" 
      placeholder='Enter Title ' 
      />
      <small>This is how error will look alike</small>
      <textarea 
      className='border-b outline-0 p-2 mt-2'
      {...register("description")} 
      placeholder='Enter Description' 
      ></textarea>
      <textarea 
      className='border-b outline-0 p-2 mt-2'
      {...register("ingredients")} 
      placeholder='Write Ingredients' 
      ></textarea>
      <textarea 
      className='border-b outline-0 p-2 mt-2'
      {...register("instructions")} 
      placeholder='Write Instructions' 
      ></textarea>
      <select 
      className='border-b outline-0 p-2 mt-2'
      {...register("category")} 
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <input 
      className='border-b outline-0 p-2 mt-2'
      {...register("chef")} 
      type="text" 
      placeholder='Enter Chef Name' 
      />
      <button className="w-fit px-4 py-2 rounded mt-5 bg-gray-900 items-center flex">Save Recipe</button>
    </form>
  )
}

export default Create