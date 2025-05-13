export const YoutubeCard = ({title, link} : {link:string, title:string}) => {
    return <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    /*Link can be shared directly from url, so we need to replace watch with embed */
}