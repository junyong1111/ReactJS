import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-btn";



export default function Login(){
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        if(name ==="email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value);
        }
    };
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || email ==="" || password ==="") return;
        try {
            // cretae an account
            // set the name of the user
            // redirect to the home page
            setLoading(true);
            await signInWithEmailAndPassword(
                auth, 
                email, 
                password
                );
            
            navigate("/");
        } catch (error) {
            if(error instanceof FirebaseError){
                setError(error.message)
            }
        } finally{
            setLoading(false);
        }
    };
    return (
        <Wrapper>
            <Title>Login to 🖐</Title>
        <Form onSubmit={onSubmit}>
            <Input 
            onChange={onChange}
            name="email" 
            value={email} 
            placeholder="Email" 
            type="email" 
            required
            />
            <Input 
            onChange={onChange}
            name="password"
            value={password}
            placeholder="Password" 
            type="password" 
            required
            />
            <Input type="submit" 
            value={isLoading ? "Loading..." : "Login"}
            style={{backgroundColor: '#1d9bf0', fontSize: '20px', fontWeight: '50px', color:'white'}}
            />
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
            Don't have an account? {" "}
            <Link to ="/create-account"> Create one &rarr;</Link>
        </Switcher>
        <GithubButton/>
        </Wrapper>
    )
}