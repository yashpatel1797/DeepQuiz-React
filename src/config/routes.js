import MockMan from 'mockman-js';
import { Home, QuizCategory, Rules } from "pages"
const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/category",
        element: <QuizCategory />,
    },
    {
        path: "/rules",
        element: <Rules />,
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },
]

export { routes }