import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from '../../App'
import { Login, Home } from '@pages'


const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login/>} />
                <Route path="home" element={<Home/>}/>
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default Index