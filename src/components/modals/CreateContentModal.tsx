import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType{
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        });

        onClose();
    }

    return <div>
        {open && <div>
        
            {/* To make modal full opaque and rest of screen 60% opaque */}
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"> 

            </div>
            
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center ">
                    <span className="bg-white opacity-100 p-4 rounded-md">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon size="md"/>
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Title"}/>
                            <Input ref={linkRef} placeholder={"Link"}/>
                        </div>
                        <div className="p-4">
                            <h1>Type</h1>
                            <div className="flex justify-center p-1 gap-1">
                            <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} size="md" onClick={ () => {
                                setType(ContentType.Youtube);
                            }}/>
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} size="md" onClick={ () => {
                                setType(ContentType.Twitter);
                            }}/>
                        </div>
                        </div>
                        <div className="flex justify-center pt-2">
                            <Button size={"md"} variant="primary" text="Submit" onClick={addContent}/>
                        </div>
                    </span>
                </div>
            </div>    
        </div>
        }
    </div>
}

