import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Register from "../../Pages/Register/Register";
import ScretPage from "../../Pages/ScretPage/ScretPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,        
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader:  () => fetch(`http://localhost:5000/courses`)
            },            
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader:({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/scret/courses/:id',
                element: <PrivateRoute><ScretPage></ScretPage></PrivateRoute>,                
                loader:({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
        ]
    }
])