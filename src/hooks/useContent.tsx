import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent(){
    const [contents, setContents] = useState({youtube:[],twitter:[],all:[]});

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            // let data;
          
            // if(showData === "youtube")
            //     data = response.data.Content.filter((item:any) => item.type === "youtube");
            // else if(showData === "twitter")
            //     data = response.data.Content.filter((item:any) => item.type === "twitter");
            // else
            //     data = response.data.Content
           
            // console.log("ShowData : ",showData);

        //     console.log("Content : ", data);
                let data = response.data.Content.filter((item:any) => item.type === "youtube");
                let twitterData = response.data.Content.filter((item:any) => item.type === "twitter");

            setContents({youtube:data,twitter:twitterData,all:response.data.Content});
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