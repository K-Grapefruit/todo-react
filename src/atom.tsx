import { atom, selector } from "recoil";

const TODOS_KEY = "todos";

const gettodo = localStorage.getItem(TODOS_KEY);
const parsetodo = JSON.parse(gettodo as any);
console.log(parsetodo);
export enum Category {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Category;
}

export const categoryState = atom<Category>({
  key: "category",
  default: Category.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: parsetodo !== null ? parsetodo : [],
});

export const toDoSelecotr = selector({
  key: "toDoSeletor",
  get: ({ get }) => {
    //get함수로 todoState atom을 들고오면서 이 값을 주시하게 됨
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
    // return [
    //   //   toDos.filter((toDo) => toDo.category === "TO_DO"),
    //   //   toDos.filter((toDo) => toDo.category === "DOING"),
    //   //   toDos.filter((toDo) => toDo.category === "DONE"),
    // ];
  },
});
