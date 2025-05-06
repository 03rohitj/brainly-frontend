import { ArticleIcon } from "./ArticleIcon";
import { TwitterIcon } from "./TwitterIcon";
import { YoutubeIcon } from "./YoutubeIcon";

//parent file for all indices

type IconSize = "sm" | "md" | "lg";
type IconType = "youtube" | "twitter" | "article";

export interface IconProps { 
    size?: IconSize;
    contentType?: IconType;
    id?: string;
}

export const iconSizeVariants = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-6"
};

export const iconContentType: Record<IconType, React.FC<{ size?: IconSize }>> = {
    "youtube" : YoutubeIcon,
    "twitter" : TwitterIcon,
    "article" : ArticleIcon,
};


