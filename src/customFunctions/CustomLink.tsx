import {Link, LinkProps} from "wouter";

export function CustomLink ({to, ...props}: LinkProps){
    return(<Link {...props} to={to} className={`custom-cursor`}/>)
} 