import UseCallbackOne from "./UseCallbackOne";
import UseCallbackTwo from "./UseCallbackTwo";

const usecallbacks = [
    {id: 1, name: "Example One", element: <UseCallbackOne/>},
    {id: 2, name: "Example Two", element: <UseCallbackTwo/>},
]

export const getUseCallbacks = () => usecallbacks;

export const getUseCallback = (id) => usecallbacks.find(data => data.id === id);