import { useParams } from "react-router-dom"
import { useSharedBrain } from "../hooks/useSharedBrain";
import { Card } from "../components/ui/Card";

type ShareBrainParams = {
    shareId: string;
}

export function ShareBrain(){
    const {shareId} = useParams<ShareBrainParams>();
    const safeShareId:string = shareId || "";       //Use Param can return null also
    const { sharedContents } = useSharedBrain(safeShareId);
    return (<div className='flex bg-gray-100'>
        <div className="w-screen min-h-screen flex flex-wrap gap-4 p-4">

            <div className='flex gap-4 p-4 flex-wrap'>
                    {sharedContents.map(({link, type, title}) =>  <Card type={type} link={link} title={title}/>
                )}
                    
            </div>

        </div>
    </div>)
}