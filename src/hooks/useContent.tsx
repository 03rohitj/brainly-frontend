import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent(showData){
    const [contents, setContents] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            let data;
            console.log("ShowData : "+showData);
            if(showData === "youtube")
                data = response.data.Content.filter((item:any) => item.type === "youtube");
            else if(showData === "twitter")
                data = response.data.Content.filter((item:any) => item.type === "twitter");
            else
                data = response.data.Content
            setContents(data);
        });
    }
    
    // useEffect(() => {
    //      refresh();
    //      let interval = setInterval(() => {
    //         refresh();
    //      }, 10 * 1000);

    //      return () => {
    //         clearInterval(interval);
    //      }
    // }, []);

    return {contents, refresh, setContents};
}