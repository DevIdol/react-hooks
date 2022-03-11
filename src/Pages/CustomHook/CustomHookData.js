import CustomHookOne from "./CustomHookOne";
import CustomHookTwo from "./CustomHookTwo";

const customhooks = [
  { id: 1, name: "Example One", element: <CustomHookOne /> },
  { id: 2, name: "Example Two", element: <CustomHookTwo /> },
];

export const getCustomHooks = () => customhooks;

export const getCustomHook = (id) => customhooks.find((data) => data.id === id);
