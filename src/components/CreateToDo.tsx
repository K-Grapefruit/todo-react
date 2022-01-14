import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface Iform {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { handleSubmit, register, setValue } = useForm<Iform>();
  const handleValid = ({ toDo }: Iform) => {
    setToDos((oldvalue) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldvalue,
    ]);
    setValue("toDo", "");
  };
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
