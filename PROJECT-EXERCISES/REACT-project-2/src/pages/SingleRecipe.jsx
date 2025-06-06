import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const recipe = data?.find((recipe) => params.id == recipe.id);
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      description: recipe?.description,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
      category: recipe?.category,
      chef: recipe?.chef,
    },
  });
    useEffect(() => {

  }, [favorite])

  if (!data || !Array.isArray(data)) {
    return <div>No recipes available</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => String(params.id) === String(r.id));
    if (index === -1) {
      toast.error("Recipe not found!");
      return;
    }

    const copyData = [...data];
    copyData[index] = {
      ...copyData[index],
      ...updatedRecipe,
    };

    setData(copyData);
    localStorage.setItem("recipe", JSON.stringify(copyData));
    toast.success("Recipe Updated!");
  };

  const deleteHander = () => {
    const filterData = data.filter((r) => String(r.id) !== String(params.id));
    setData(filterData);
    localStorage.setItem("recipe", JSON.stringify(filterData));
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };




  const addToFavHandler = () => {
    const copyFav = [...favorite];
    copyFav.push(recipe);
    setfavorite(copyFav);
    localStorage.setItem("fav", JSON.stringify(copyFav));
  };
  const removeFromFavHandler = () => {
    const filteredfavorite = favorite.filter((f) => f.id !== recipe?.id);
    setfavorite(filteredfavorite)
    localStorage.setItem("fav", JSON.stringify(filteredfavorite));
    
  };


  return recipe ? (
    <div className="w-full flex">
      <div className="relative left w-1/2 p-10">
        {favorite.find((f) => f.id == recipe.id) ? (
          <i
            onClick={removeFromFavHandler}
            className="right-[10%] absolute text-3xl text-red-500 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={addToFavHandler}
            className="right-[10%] absolute text-3xl text-red-500 ri-heart-line"
          ></i>
        )}
        <h1 className="text-5xl font-black font-thin">{recipe.title} </h1>
        <img className="h-[20vh] object-cover" src={recipe.image} alt="" />
      </div>

      <div className="right w-1/2 p-2">
        <form
          className="my-10 flex flex-col text-white"
          onSubmit={handleSubmit(updateHandler)}
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
  ) : (
    <h1>Loading</h1>
  );
};

export default SingleRecipe;
