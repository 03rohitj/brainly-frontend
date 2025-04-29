import { BrainlyLogo } from "../../icons/BrainlyLogo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white fixed top-0 left-0 min-w-72 w-72 block border-2 border-solid pl-6">
        <div className="flex text-2xl pt-4 items-center gap-2 p-2 border-b border-gray-200  cursor-pointer">
            <div>
                <BrainlyLogo/>
            </div>
            <div>Brainly</div>
        </div>
        <div className="pt-4">
            <SidebarItem icon={<TwitterIcon size="lg"/>} text="Tweets/Posts"/>
            <SidebarItem icon={<YoutubeIcon size="lg"/>} text="Videos"/>
        </div>
    </div>
}