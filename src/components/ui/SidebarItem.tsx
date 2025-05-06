import { ReactElement } from "react";

export function SidebarItem({text, icon, dataFilter}:{
    text:string;
    icon:ReactElement;
    dataFilter:() => void;
}){
    return <div className="flex text-gray-700 gap-2 p-2 pl-8 items-center cursor-pointer hover:bg-slate-200 transition-all delay-100 rounded max-w-48" onClick={dataFilter}>
        <div>{icon}</div>
        <div>{text}</div>
    </div>
}