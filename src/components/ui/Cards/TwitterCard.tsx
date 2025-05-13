import { useEffect } from "react"

//Twitter post is being displayed only on hard page reload, sho running this script to ensure it loads.
export const TwitterCard = ( { link }: {link: string }) => {
    useEffect( () => {
        const twttr = (window as any).twttr;
        if (twttr && twttr.widgets && twttr.widgets.load) {
            twttr.widgets.load();
        }
    }, [link]);     //only run when link changes

    return (
        <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>
    );
};