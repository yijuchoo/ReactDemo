import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { HelloWorld } from "./components/HelloWorld";
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/helloworld',
        element: <HelloWorld />
    }
];

export default AppRoutes;
