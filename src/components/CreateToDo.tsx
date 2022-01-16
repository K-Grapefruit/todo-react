import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { json } from "stream/consumers";
import styled from "styled-components";
import { categoryState, toDoState } from "../atom";

const Input = styled.input`
  height: 50px;
  background-color: #8c7ae6;
  border: none;
  font-size: large;
  text-align: center;
  color: white;
  ::placeholder {
    color: white;
  }
`;

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
    if (toDo.length < 10) {
      setToDos((oldvalue) => [
        { text: toDo, id: Date.now(), category },
        ...oldvalue,
      ]);
      setValue("toDo", "");
    } else {
      setValue("toDo", "10자 이내로 입력하시오");
    }
  };
  localStorage.setItem(TODOS_KEY, JSON.stringify(currentvalue));
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <Input
          style={{ color: "white" }}
          {...register("toDo", {
            required: true,
            min: 4,
            validate: {
              noJerk: (value) => (value.includes("Jerk") ? "Never" : true),
            },
          })}
          placeholder="Write a to do"
        />
      </form>
    </div>
  );
}

export default CreateToDo;
