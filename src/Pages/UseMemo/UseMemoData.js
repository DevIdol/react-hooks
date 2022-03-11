import UseMemoOne from "./UseMemoOne";
import UseMemoTwo from "./UseMemoTwo";

const usememos = [
    {id: 1, name: "Example One", element: <UseMemoOne/>},
    {id: 2, name: "Example Two", element: <UseMemoTwo/>},
]

export const getUseMemos = () => usememos;

export const getUseMemo = (id) => usememos.find(data => data.id === id);