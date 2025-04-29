import axios from "axios";
import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;        //If current value exists then only get value
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username, password
        });

        //Get the jwt token from response and store it in local
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        //navigate to dashboard page after success sign
        navigate("/dashboard");
       
    }
    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border border-slate-300 min-w-48 p-8 rounded-xl">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center pt-4">
                <Button variant="primary" onClick={signin} text="Signin" size="md" fullWidth={true} loading={false} />
            </div>
        </div>

    </div>
}