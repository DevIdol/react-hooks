import UseContextOne from "./UseContextOne";
import UseContextThree from "./UseContextThree";
import UseContextTwo from "./UseContextTwo";

const usecontexts = [
  { id: 1, name: "Example One", element: <UseContextOne /> },
  { id: 2, name: "Example Two", element: <UseContextTwo /> },
  { id: 3, name: "Example Three", element: <UseContextThree /> },
];

export const getUseContexts = () => usecontexts;

export const getUseContext = (id) => usecontexts.find((data) => data.id === id);
