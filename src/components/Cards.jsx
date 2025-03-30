import React, { useEffect } from "react";
import Card from "./Card";

function Cards({ users, handleRemove, setisactive }) {
  setisactive(false);
  return (
    <div className="w-full max-h-96 h-96 overflow-auto p-4 rounded-lg bg-sky-200 flex justify-center gap-4 flex-wrap">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            user={item}
            id={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
