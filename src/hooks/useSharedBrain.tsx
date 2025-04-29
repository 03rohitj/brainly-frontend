import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useSharedBrain(shareId: string){
    const [sharedContents, setSharedContents] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`).then((response) => {
            setSharedContents(response.data.content);
        });
    }
    
    useEffect(() => {
         refresh();
         let interval = setInterval(() => {
            refresh();
         }, 10 * 1000);

         return () => {
            clearInterval(interval);
         }
    }, []);

    return {sharedContents, refresh};
}