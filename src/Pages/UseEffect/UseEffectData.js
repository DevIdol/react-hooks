import UseEffectFive from "./UseEffectFive";
import UseEffectFour from "./UseEffectFour";
import UseEffectOne from "./UseEffectOne";
import UseEffectThree from "./UseEffectThree";
import UseEffectTwo from "./UseEffectTwo";

const useeffects = [
  { id: 1, name: "Example One", element: <UseEffectOne /> },
  { id: 2, name: "Example Two", element: <UseEffectTwo /> },
  { id: 3, name: "Example Three", element: <UseEffectThree /> },
  { id: 4, name: "Example Four", element: <UseEffectFour /> },
  { id: 5, name: "Example Five", element: <UseEffectFive /> },
];

export function getUseEffects() {
  return useeffects;
}

export const getUseEffect = (id) => {
  return useeffects.find((data) => data.id === id);
};
