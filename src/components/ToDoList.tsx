import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelecotr, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // const [toDo, setTodo] = useState("");
  // const [toDoError, setError] = useState("");
  // //TS에서만 EVENT의 타입 명시
  // function onchange(event: React.FormEvent<HTMLInputElement>) {
  //   const {
  //     currentTarget: { value },
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //    } = event;
  //   setTodo(value);
  // }
  //  if (toDo.length < 10) {
  //     console.log("에러!");
  //     return setError("Write Sholud be longer");
  //   }
  // };
  //const toDos = useRecoilValue(toDoState);
  const todos = useRecoilValue(toDoSelecotr);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />

      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>

      <CreateToDo />
      {todos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
// interface Iform {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
// }

// function ToDoList() {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<Iform>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });

//   const onValid = (data: any) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "write here",
//             validate: {
//               noNico: (value) =>
//                 value.includes("Nicolas") ? "no nicos allowed" : true,
//               noNick: (value) =>
//                 value.includes("Nick") ? "no nick allowed" : true,
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span>{errors?.firstName?.message}</span>
//         <input {...register("lastName")} placeholder="lastName" />
//         <input
//           {...register("username", { required: "write here", minLength: 10 })}
//           placeholder="username"
//         />
//         <input
//           {...register("password", { required: "write here", minLength: 5 })}
//           placeholder="password"
//         />
//         <input
//           {...register("password1", { required: "password is required" })}
//           placeholder="password1"
//         />
//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
