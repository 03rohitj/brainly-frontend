import { ShareIcon } from "../../icons/ShareIcon"

interface CardProps{
    type : "article" | "twitter" | "youtube",
    title: string,
    link: string
}

export function Card ({title, link, type} : CardProps) {
    return <div>
        <div className="p-4 bg-white rounded-md border border-gray-300 max-w-72 min-h-48">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="pr-3 text-gray-500">
                        <ShareIcon size="md"/>
                    </div>
                    {title}
                </div>

                <div className="flex items-center">
                    <div className="pr-3 text-gray-500">
                        <a href={link} target="_blank"/>
                        <ShareIcon size="md"/>
                    </div>
                    <div className="text-gray-500">     
                        <ShareIcon size="md"/>
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