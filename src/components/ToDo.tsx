import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Category, IToDo, toDoState } from "../atom";
import img1 from "./work.png";
import img2 from "./check.png";
import img3 from "./delete.png";
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

  const Li = styled.li`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
  `;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Li>
        <div style={{ width: "30%" }}>
          <span style={{ marginRight: "30px", textOverflow: "ellipsis" }}>
            {text}
          </span>
        </div>
        <div>
          {category !== Category.TO_DO && (
            <button name={Category.TO_DO + ""} onClick={onClick}>
              ToDo
            </button>
          )}
          {category !== Category.DOING && (
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              name={Category.DOING + ""}
              onClick={onClick}
            >
              <img src={img1} />
            </button>
          )}
          {category !== Category.DONE && (
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              name={Category.DONE + ""}
              onClick={onClick}
            >
              <img src={img2} />
            </button>
          )}
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            name={id as any}
            onClick={deleteTodo}
          >
            <img src={img3} />
          </button>
        </div>
      </Li>
    </div>
  );
}

export default ToDo;
