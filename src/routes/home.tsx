import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home(){
    const navigate = useNavigate()
    const logOut = () => {
        auth.signOut();
        console.log("logout")
        navigate("/login")
    }
    return <h1>
        <button onClick={logOut}>Logout</button>
            </h1>;
}