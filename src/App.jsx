import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);
  const [isactive, setisactive] = useState(true);
  console.log(isactive);

  const handleFormSubmit = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };
  return (
    <div className="w-full h-screen bg-zinc-400 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users} setisactive={setisactive} />
        <Form handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default App;
