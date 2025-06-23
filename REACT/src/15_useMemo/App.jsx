import { useCallback, useMemo, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(99);
  // const product = useMemo(() => {
  //   return add * 2;
  // }, [add]);

  const ingredients = useCallback(() => {
    console.log("Reciepe Ingredients");
    
  },[])
  return (
    <div className="bg-gray-800 text-white p-5 w-screen h-screen">
      {/* <h1 className="text-5xl m-5 p-5 ">{product}</h1> */}
      <div>
        <button
          onClick={() => setAdd(add + 1)}
          className="mr-5 text-5xl bg-green-500 rounded p-5"
        >
          {add}
        </button>
        {/* <span className="text-5xl  m-5 p-5">{add}</span> */}
        <button
          onClick={() => setSub(sub - 1)}
          className="mr-5 text-5xl bg-red-500 rounded p-5"
        >
          -
        </button>
        {/* <span className="text-5xl m-5 p-5">{sub}</span> */}
      </div>

      <br />
      <Recipe ing = {ingredients}/>
    </div>
  );
};

export default App;
