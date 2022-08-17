import { atom } from "recoil";

export interface IDiscussion {
  answer: object | null;
  author: string;
  avatarUrl: string;
  bodyHTML: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  url: string;
}

interface IKey {
  setSelf: Function;
  onSet: Function;
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: IKey) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: IDiscussion) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const discussionsState = atom<IDiscussion[]>({
  key: "discussions",
  default: [],
  effects: [localStorageEffect("discussions")],
});

export const inputNameState = atom({
  key: "inputName",
  default: "",
});

export const inputTitleState = atom({
  key: "inputTitle",
  default: "",
});

export const inputContentState = atom({
  key: "inputContent",
  default: "",
});
