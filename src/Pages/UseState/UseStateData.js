import UseStateOne from "./UseStateOne";
import UseStateTwo from "./UseStateTwo";

const usestates = [
  { id: 1, name: "Example One", element: <UseStateOne /> },
  { id: 2, name: "Example Two", element: <UseStateTwo /> },
];

export const getUseStates = () => {
  return usestates;
};
export function getUseState(id) {
    return usestates.find(
      (data) => data.id === id
    );
  }