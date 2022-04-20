import MockMan from 'mockman-js';
import { Home } from "pages"
const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },
]

export { routes }