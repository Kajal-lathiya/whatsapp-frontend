import ChatRoom from "../chatRoom/ChatRoom";
import Chat from "../chats/Chats";
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
    {
        id:4,
        path:"/chatRoom",
        element:<ChatRoom/>
    },
    {
        id:5,
        path:"/chat",
        element:<Chat/>
    }
] 

export default RouterApi

