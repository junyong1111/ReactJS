import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import PostTweetFrom from "../components/post-tweet-form";
import styled from "styled-components";

const Wrapper = styled.div``;
export default function Home(){
    const navigate = useNavigate()
    const logOut = () => {
        auth.signOut();
        console.log("logout")
        navigate("/login")
    }

    return(
        <>
        <Wrapper>
        <PostTweetFrom/>
        </Wrapper>
        </>
    )
    
}