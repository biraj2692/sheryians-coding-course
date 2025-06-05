// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { recipecontext } from "../context/RecipeContext";
// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// const SingleRecipe = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const { data, setData } = useContext(recipecontext);
//   const recipe = data.find((recipe) => String(params.id) === String(recipe.id));
//   const { register, handleSubmit, reset } = useForm({
//     defaultValues: {
//       title: recipe.title,
//       image: recipe.image,
//       description: recipe.description,
//       ingredients: recipe.ingredients,
//       instructions: recipe.instructions,
//       category: recipe.category,
//       chef: recipe.chef,
//     },
//   });

//   const submitHandler = (recipe) => {
//     const index = data.find((recipe) => params.id == recipe.id);
//     const copyData = [...data];
//     copyData[index] = { ...copyData[index], ...recipe };
//     setData(copyData);
//     toast.success("Recipe Updated!");
//     console.log(copyData);
//   };

//   const deleteHander = () => {
//     const filterData = data.filter((r) => r.id != params.id);
//     setData(filterData);
//     toast.success("Recipe Deleted!");
//     navigate("/recipes");
//   };

//   //   console.log(data, params.id);

//   return recipe ? (
//     <div className="w-full flex">
//       <div className="left w-1/2 p-2">
//         <h1 className="text-5xl font-black font-thin">{recipe.title} </h1>
//         <img className="h-[20vh] object-cover" src={recipe.image} alt="" />
//       </div>

//       <div className="right w-1/2 p-2">
//         <form
//           className="my-10 flex flex-col text-white"
//           onSubmit={handleSubmit(submitHandler)}
//         >
//           <input
//             className="border-b outline-0 p-2 mt-2"
//             {...register("image")}
//             type="url"
//             placeholder="Enter Image URL"
//           />
//           <input
//             className="border-b outline-0 p-2 mt-2"
//             {...register("title")}
//             type="text"
//             placeholder="Enter Title "
//           />
//           <small className="text-red-500">
//             This is how error will look alike
//           </small>
//           <textarea
//             className="border-b outline-0 p-2 mt-2"
//             {...register("description")}
//             placeholder="Enter Description"
//           ></textarea>
//           <textarea
//             className="border-b outline-0 p-2 mt-2"
//             {...register("ingredients")}
//             placeholder="Write Ingredients"
//           ></textarea>
//           <textarea
//             className="border-b outline-0 p-2 mt-2"
//             {...register("instructions")}
//             placeholder="Write Instructions"
//           ></textarea>
//           <select
//             className="border-b outline-0 p-2 mt-2"
//             {...register("category")}
//           >
//             <option value="breakfast">Breakfast</option>
//             <option value="lunch">Lunch</option>
//             <option value="dinner">Dinner</option>
//           </select>
//           <input
//             className="border-b outline-0 p-2 mt-2"
//             {...register("chef")}
//             type="text"
//             placeholder="Enter Chef Name"
//           />
//           <button className="w-fit px-4 py-2 rounded mt-5 bg-blue-900 items-center flex ">
//             Update Recipe
//           </button>
//           <button
//             onClick={deleteHander}
//             className="w-fit px-4 py-2 rounded mt-5 bg-red-900 items-center flex"
//           >
//             Delete Recipe
//           </button>
//         </form>
//       </div>
//     </div>
//   ) : (
//     "Loading"
//   );
// };

// export default SingleRecipe;
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  
  if (!data || !Array.isArray(data)) {
    return <div>No recipes available</div>;
  }
  
  const recipe = data.find((recipe) => String(params.id) === String(recipe.id));
  
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      category: recipe.category,
      chef: recipe.chef,
    },
  });

  const submitHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => String(params.id) === String(r.id));
    
    if (index === -1) {
      toast.error("Recipe not found!");
      return;
    }
    
    const copyData = [...data];
    copyData[index] = { 
      ...copyData[index],
      ...updatedRecipe
    };
    
    setData(copyData);
    toast.success("Recipe Updated!");
  };

  const deleteHander = () => {
    const filterData = data.filter((r) => String(r.id) !== String(params.id));
    setData(filterData);
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  return (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black font-thin">{recipe.title} </h1>
        <img className="h-[20vh] object-cover" src={recipe.image} alt="" />
      </div>

      <div className="right w-1/2 p-2">
        <form
          className="my-10 flex flex-col text-white"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            className="border-b outline-0 p-2 mt-2"
            {...register("image")}
            type="url"
            placeholder="Enter Image URL"
          />
          <input
            className="border-b outline-0 p-2 mt-2"
            {...register("title")}
            type="text"
            placeholder="Enter Title"
          />
          <textarea
            className="border-b outline-0 p-2 mt-2"
            {...register("description")}
            placeholder="Enter Description"
          ></textarea>
          <textarea
            className="border-b outline-0 p-2 mt-2"
            {...register("ingredients")}
            placeholder="Write Ingredients"
          ></textarea>
          <textarea
            className="border-b outline-0 p-2 mt-2"
            {...register("instructions")}
            placeholder="Write Instructions"
          ></textarea>
          <select
            className="border-b outline-0 p-2 mt-2"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <input
            className="border-b outline-0 p-2 mt-2"
            {...register("chef")}
            type="text"
            placeholder="Enter Chef Name"
          />
          <button 
            type="submit" 
            className="w-fit px-4 py-2 rounded mt-5 bg-blue-900 items-center flex"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={deleteHander}
            className="w-fit px-4 py-2 rounded mt-5 bg-red-900 items-center flex"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;