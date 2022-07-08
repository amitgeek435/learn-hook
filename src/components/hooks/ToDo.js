import React, { memo } from "react";

const ToDo = ({ todo, addNewTodo }) => {
  //   console.log("call child todo comp");
  //   console.log(todo);
  //   console.log(addNewTodo);

  return (
    <div>
      <p className="text-success h5 mb-0 pb-0 mt-3">ToDo</p>
    </div>
  );
};

export default memo(ToDo);
