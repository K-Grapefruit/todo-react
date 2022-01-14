import React from "react";
import { useSetRecoilState } from "recoil";
import { Category, IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setTodos = useSetRecoilState(toDoState);
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

  return (
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
    </li>
  );
}

export default ToDo;
