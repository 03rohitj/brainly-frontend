import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";

export function VerifyDeleteModal({open, onClose}){

    const [curContentId, setCurContentId] = useState(null);

    //Delete record when confirm button is clicked
    function deleteRecord(){
        alert("Record delete called");

        onClose();
    }

    return (<div>
        {open && <div>
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

                        <div className="pt-2">Are you sure you want to delete this record?</div>

                        <div className="flex justify-center gap-2 pt-4">
                            <Button size="md" text="Confirm" variant="primary" onClick={deleteRecord}/>
                            <Button size="md" text="Discard" variant="secondary" onClick={onClose}/>

                        </div>
                    </span>
                </div>
            </div>
        </div>}
    </div>)
}