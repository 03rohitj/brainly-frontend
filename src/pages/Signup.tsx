
import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function addContent(){
        const username = usernameRef.current?.value;        //If current value exists then only get value
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username, password
        });
        alert("Signup successful : "+username);
        
        //Clear Username and password field after signup
        if(usernameRef.current) 
            usernameRef.current.value = "";
        if(passwordRef.current) 
            passwordRef.current.value = "";
        
       //Navigate to signin page after success signup
       navigate("/signin");
    }
    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border border-slate-300 min-w-48 p-8 rounded-xl">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center pt-4">
                <Button variant="primary" onClick={addContent} text="Signup" size="md" fullWidth={true} loading={false} />
            </div>
        </div>

    </div>
}