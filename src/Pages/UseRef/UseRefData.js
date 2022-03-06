import UseRefOne from "./UseRefOne";
import UseRefTwo from "./UseRefTwo";

const userefs = [
  { id: 1, name: "Example One", element: <UseRefOne /> },
  { id: 2, name: "Example Two", element: <UseRefTwo /> },
];

export const getUseRefs = () => userefs;

export const getUseRef = (id) => userefs.find((data) => data.id === id);
