import MockMan from 'mockman-js';
import { Home, Quiz, QuizCategory, Result, Login, Signup } from "pages"
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
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
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