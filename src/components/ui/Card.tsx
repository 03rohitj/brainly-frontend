import { DeleteIcon } from "../../icons/DeleteIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { iconContentType } from "../../icons"
import { ArticleIcon } from "../../icons/ArticleIcon";
import axios from "axios";
import { BACKEND_URL } from "../../config";

type CardType = "article" | "twitter" | "youtube";

interface CardProps{
    type : CardType,
    title: string,
    link: string,
    id: string,
    reload: () => void
}

export function Card ({title, link, type, id, reload} : CardProps) {

    console.log("=====Card==",title,link,type,id)

    
    async function handleDelete(){
        const token = localStorage.getItem("token");

        const res = await axios.delete(`${BACKEND_URL}/api/v1/content`, {
            headers : {
                "Authorization" : token
            },
            data: {
                contentId : id
            }
        });

        alert(res.data.message);
        reload();       //Fetch fresh data upon delete
        
    }
    
    const IconType = iconContentType[type] || ArticleIcon;
    return <div id={id}>
        <div className="p-4 bg-white rounded-md border border-gray-300 max-w-72 min-h-48">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="mr-3 text-gray-500 transition hover:text-purple-600 hover:scale-110">
                        <IconType size="md"/>
                    </div>
                    {title}
                </div>

                <div className="flex items-center pl-2 gap-1">
                    <div className="mr-3 text-gray-500 cursor-pointer transition hover:text-purple-600 hover:scale-110">
                        <a href={link} target="_blank"/>
                        <ShareIcon size="md"/>
                    </div>
                    <div className="text-gray-500 cursor-pointer transition hover:text-purple-600 hover:scale-110" onClick={ () => {
                        handleDelete()
                    } }>     
                        <DeleteIcon id={id} size="md"/>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                { type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}        {/*Link can be shared directly from url, so we need to replace watch with embed */}

                { type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
        </div>
    </div>
}

