import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { json } from "stream/consumers";
import { categoryState, toDoState } from "../atom";

interface Iform {
  toDo: string;
}

const TODOS_KEY = "todos";

function CreateToDo() {
  const currentvalue = useRecoilValue(toDoState);
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { handleSubmit, register, setValue } = useForm<Iform>();
  const handleValid = ({ toDo }: Iform) => {
    setToDos((oldvalue) => [
      { text: toDo, id: Date.now(), category },
      ...oldvalue,
    ]);
    setValue("toDo", "");
  };
  localStorage.setItem(TODOS_KEY, JSON.stringify(currentvalue));
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: true,
          validate: {
            noJerk: (value) => (value.includes("Jerk") ? "Never" : true),
          },
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
