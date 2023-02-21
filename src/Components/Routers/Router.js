import Home from "../Home/Home";
import SignInPage from "../SignIn/SignIn";
import SignUpPage from "../SignUp/SignUp";


const RouterApi = [
    {
        id:1,
        path:"/",
        element:<Home/>
    },
    {
        id:2,
        path:"/login",
        element:<SignInPage/>
    },
    {
        id:3,
        path:"/register",
        element:<SignUpPage/>,
    },

] 

export default RouterApi

