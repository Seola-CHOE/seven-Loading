import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import LoadingPage from "../pages/LoadingPage.tsx";

const TodoIndexPage = lazy(() => import("../pages/todo/TodoIndexPage.tsx"))
const TodoList = lazy(() => import("../pages/todo/TodoListPage.tsx"))

const Loading = <LoadingPage/>


const todoRouter = {

    path: "/todo",
        element: <Suspense fallback={Loading}><TodoIndexPage/></Suspense>,
    children: [
    {
        path: "list",
        element: <Suspense fallback={Loading}><TodoList/></Suspense>
    },
    {
        path: "",
        element: <Navigate to='list' replace={true}></Navigate>
    }
    ]

}

export default todoRouter