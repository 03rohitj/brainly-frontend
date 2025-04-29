import { ReactElement } from "react";

export function SidebarItem({text, icon}:{
    text:string;
    icon:ReactElement;
}){
    return <div className="flex text-gray-700 gap-2 p-2 pl-8 items-center cursor-pointer hover:bg-slate-200 transition-all delay-100  rounded max-w-48">
        <div>{icon}</div>
        <div>{text}</div>
    </div>
}