import { BrainlyLogo } from "../../icons/BrainlyLogo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps{
    setShowData:any,
    setYTData:any,
    setTwitterData:any,
    allData:any
}

export function Sidebar(props: SidebarProps){

    function youtubeData(){
        //const ytData = props.allData.filter((item:any) => item.type === "youtube");
        props.setYTData(true);
        props.setShowData("youtube");
        // alert("Youtube data selected : "+ JSON.stringify(ytData));

    }

    function twitterData(){
        //const twitterData = props.allData.filter((item:any) => item.type === "twitter");
        props.setTwitterData(true);
        props.setShowData("twitter");
        // alert("Twitter data selected : "+ JSON.stringify(twitterData));
    }

    return <div className="h-screen bg-white fixed top-0 left-0 min-w-72 w-72 block border-2 border-solid pl-6">
        <div className="flex text-2xl pt-4 items-center gap-2 p-2 border-b border-gray-200  cursor-pointer" onClick={() => { props.setShowData("all")}}>
            <div>
                <BrainlyLogo/>
            </div>
            <div >Brainly</div>
        </div>
        <div className="pt-4">
            <SidebarItem icon={<TwitterIcon size="lg"/>} text="Tweets/Posts" dataFilter={twitterData}/>
            <SidebarItem icon={<YoutubeIcon size="lg"/>} text="Videos" dataFilter={youtubeData}/>
        </div>
    </div>
}