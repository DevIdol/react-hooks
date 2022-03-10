import UseReducerOne from "./UseReducerOne";
import UseReducerThree from "./UseReducerThree";
import UseReducerTwo from "./UseReducerTwo";

const usereducers = [
  { id: 1, name: "Example One", element: <UseReducerOne /> },
  { id: 2, name: "Example Two", element: <UseReducerTwo /> },
  { id: 3, name: "Example Three", element: <UseReducerThree /> },
];

export const getUseReducers = () => usereducers;

export const getUseReducer = (id) => {
  return usereducers.find((data) => data.id === id);
};
