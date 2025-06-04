import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "./Wrapper";

const Create = () => {
  const [todos, setTodos] = useContext(todoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const newTodo = {
      id: nanoid(),
      title: data.title,
      isCompleted: Boolean(data.isCompleted),
      priority: data.priority || "Low",
    };

    setTodos([...todos, newTodo]);
    toast.success(`${data.title} Created`);
    reset();
  };

  return (
    <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-[45%] p-6 bg-zinc-800 rounded-lg shadow-lg">
      <h1 className="text-center text-4xl md:text-5xl font-thin text-white mb-4">
        {" "}
        Create Task{" "}
      </h1>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          {...register("title", { required: "Title cannot be empty" })}
          className="p-3 border-b border-zinc-600 bg-zinc-700 font-thin text-xl outline-none rounded text-white placeholder-zinc-400"
          type="text"
          placeholder="Add Task"
        />
        <small className="text-red-500 hover:text-red-400 transition-colors duration-300 text-xs">
          {errors?.title?.message}
        </small>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-3 bg-zinc-700 rounded">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isCompleted"
              {...register("isCompleted")}
              className="w-5 h-5 accent-green-500"
            />
            <label htmlFor="isCompleted" className="text-white">
              Completed
            </label>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="priority" className="text-white">
              Priority:
            </label>
            <select
              {...register("priority")}
              className="bg-zinc-600 text-white p-2 rounded outline-none border border-zinc-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-xl px-5 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 rounded-lg mt-5 font-medium"
        >
          Create ToDo
        </button>
      </form>
    </div>
  );
};

export default Create;
