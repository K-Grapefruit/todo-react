import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Iform {
  Todo: string;
}
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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Iform>();

  const handleValid = (data: Iform) => {
    console.log("Todo? ", data.Todo);
    setValue("Todo", "");
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("Todo", {
            required: true,
            validate: {
              noJerk: (value) => (value.includes("Jerk") ? "Never" : true),
            },
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
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
