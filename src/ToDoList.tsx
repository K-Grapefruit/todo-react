import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDoError, setError] = useState("");
//   //TS에서만 EVENT의 타입 명시
//   function onchange(event: React.FormEvent<HTMLInputElement>) {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   }
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       console.log("에러!");
//       return setError("Write Sholud be longer");
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={toDo} onChange={onchange} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(register);
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("pswd")} placeholder="Email" />
        <input {...register("pswd1")} placeholder="Email" />
        <input {...register("pswd2")} placeholder="Email" />
        <input {...register("pswd3")} placeholder="Email" />
        <input {...register("pswd4")} placeholder="Email" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
