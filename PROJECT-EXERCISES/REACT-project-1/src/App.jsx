import Read from "./components/Read";
import Create from "./components/Create";
import { useState } from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-thin text-center mb-8 text-green-400">
          Todo Manager
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <Create />
          <Read />
        </div>
      </div>
    </div>
  );
};

export default App;
