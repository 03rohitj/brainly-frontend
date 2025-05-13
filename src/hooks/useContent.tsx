import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent(showData : any){
    const [contents, setContents] = useState([]);

    function refresh(){
        try{
            axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }).then( (response) => {
                let data = response.data.Content;
                if(showData === "youtube")
                    data = data.filter((item:any) => item.type === "youtube");
                else if(showData === "twitter")
                    data = data.filter((item:any) => item.type === "twitter");

                console.log("====useContent : After data filter : ", data);
                setContents(data);
            });
            
        }catch( error ){
            console.error("Failed to fetch content : ", error);
        }
        // .then((response) => {
        //     let data;
        //     console.log("ShowData : "+showData);
        //     if(showData === "youtube")
        //         data = response.data.Content.filter((item:any) => item.type === "youtube");
        //     else if(showData === "twitter")
        //         data = response.data.Content.filter((item:any) => item.type === "twitter");
        //     else
        //         data = response.data.Content
        //     setContents(data);
        // });
    }
    
    // 
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