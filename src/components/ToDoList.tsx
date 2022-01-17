import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Category, categoryState, toDoSelecotr, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fbc531;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  height: 90%;

  padding: 50px;
  box-shadow: 0;
  background-color: #8c7ae6;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Mainselect = styled.select`
  width: 70px;
  height: 50px;
  background-color: #8c7ae6;
  color: white;
  border: none;
  font-size: large;
  margin-right: 20px;
`;

const MainForm1 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 15px;
  color: #fbc531;
`;
const date = new Date();

const thisyear = date.getFullYear();
const thisMonth = String(date.getMonth() + 1).padStart(2, "0");
const today = String(date.getDate()).padStart(2, "0");

const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
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
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Main>
      <MainForm>
        <H1>ToDay Work!</H1>
        <MainForm1>
          <Mainselect value={category} onInput={onInput}>
            <option value={Category.TO_DO}>To Do</option>
            <option value={Category.DOING}>Doing</option>
            <option value={Category.DONE}>Done</option>
          </Mainselect>
          <CreateToDo />
        </MainForm1>

        {todos?.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </MainForm>
    </Main>
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
