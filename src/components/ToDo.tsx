import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Category, IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setTodos = useSetRecoilState(toDoState);
  const val = useRecoilValue(toDoState);
  console.log(val);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    //Category 수정
    setTodos((oldTodo) => {
      const TargetIndex = oldTodo.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldTodo.slice(0, TargetIndex),
        newToDo,
        ...oldTodo.slice(TargetIndex + 1),
      ];
    });
  };
  const deleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    const namenum = JSON.parse(name);
    setTodos((oldtodos) => {
      const TargetIndex = oldtodos.findIndex(
        (todo) => todo.id === (namenum as any)
      );
      console.log(typeof namenum);

      const filtervalue = oldtodos.filter(
        (todo) => todo.id !== (namenum as any)
      );
      console.log(filtervalue);
      return [...filtervalue];
    });
  };

  return (
    <>
      <li>
        <span>{text}</span>
        {category !== Category.TO_DO && (
          <button name={Category.TO_DO + ""} onClick={onClick}>
            ToDo
          </button>
        )}
        {category !== Category.DOING && (
          <button name={Category.DOING + ""} onClick={onClick}>
            Doing
          </button>
        )}
        {category !== Category.DONE && (
          <button name={Category.DONE + ""} onClick={onClick}>
            Done
          </button>
        )}
        <button name={id as any} onClick={deleteTodo}>
          delete
        </button>
      </li>
    </>
  );
}

export default ToDo;
