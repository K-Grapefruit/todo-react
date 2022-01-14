import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
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
