import MockMan from 'mockman-js';
import { Home, Quiz, QuizCategory, Result } from "pages"
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
        path: "/quiz/:quizId",
        element: <Quiz />,
    },
    {
        path: "/result",
        element: <Result />,
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },
]

export { routes }