import React from "react";
import { ReactElement } from "react";

type Variants = "primary" | "secondary";

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyles = {
    "sm" : "px-2 py-1 text-sm",
    "md" : "px-4 py-2 text-md",
    "lg" : "px-6 py-3 text-lg"
}

interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement; //For now we are giving any but it is worst practice, we will improve it later
    endIcon?: ReactElement;   //startIcon and endIcon should be optional, so we are using ? here
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const defaultStyles = "rounded-md p-4 flex";

const defaultIconStyles = "pr-1 pl-1 flex items-center justify-center";
export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles}
        ${sizeStyles[props.size]} ${props.fullWidth ? " w-full flex justify-center" : ""} ${props.loading ? " opacity-50" : ""} `} disabled={props.loading}>
        {props.startIcon ? 
            <div className={defaultIconStyles}>{props.startIcon}</div> : null} 
        {props.text} 
        {props.endIcon ? 
            <div className={defaultIconStyles}>{props.endIcon}</div> : null}
    </button>
} 

//<Button variant="primary" size="md" text="ButtonX" startIcon={"+"} endIcon={"-"} onClick={() => {}}  />