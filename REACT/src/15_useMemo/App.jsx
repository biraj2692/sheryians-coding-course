import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

const App = () => {
  const inputref = useRef();
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(99);

  // const Title = styled.h1`
  //   font-size: 3rem;
  //   text-align: center;
  //   color: #bf4f74;
  //   background-color: ${(props) => props.bg}
  // `;

  const bg = "pink";

  const Title = styled.h1({
    fontSize: "3rem",
    textAlign: "center",
    color: "#bf4f74",
    backgroundColor: bg,
    marginBottom: "10px",
  });
  
  // const product = useMemo(() => {
  //   return add * 2;
  // }, [add]);

  const ingredients = useCallback(() => {
    console.log("Reciepe Ingredients");
  }, []);

  const watchHandler = () => {
    console.log(inputref.current.value);
    inputref.current.style.color = "blue";
  };

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
      <Recipe ing={ingredients} />

      <hr className="my-5" />
      <Title bg="pink">Let's Learn useRef</Title>
      <input
        type="text"
        ref={inputref}
        className="outline-0 text-black border-b p-2 text-5xl"
        placeholder="Enter here"
      />

      <button
        className="p-2 text-5xl border mx-2"
        onClick={watchHandler}
        type="button"
      >
        See Value
      </button>
    </div>
  );
};

export default App;
