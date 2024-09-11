import {h} from 'preact';
import {Link} from "wouter";

export function CustomLink ({to, ...props}){
    return(
        <Link {...props} to={to} className={`custom-cursor`}>
        </Link>
    )
}