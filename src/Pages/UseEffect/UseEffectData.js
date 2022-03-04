import UseEffectOne from "./UseEffectOne";
import UseEffectTwo from "./UseEffectTwo";

const useeffects = [
  { id: 1, name: "Example One", element: <UseEffectOne /> },
  { id: 2, name: "Example Two", element: <UseEffectTwo /> },
];

export function getUseEffects() {
  return useeffects;
}

export const getUseEffect = (id) => {
  return useeffects.find((data) => data.id === id);
};
