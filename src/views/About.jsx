import {h} from 'preact';
import useStore from "../store/store.js";
import {useEffect} from "preact/hooks";
import {gsap} from "gsap";

export function About (){

    const translation = useStore(state => state.translations);
    const content = translation.about;
    useEffect(()=> {
        const tl = gsap.timeline();
        tl.to('.line', {x:0, duration:1, ease:"power1.inOut"})
        tl.to('.text-anim', {x:0, opacity:1, duration:1, ease:"power3.out"})
    })
    return(
        <div className={`container-content`}>
            <p className={`title-view fade-down`}>{content.title}</p>
            <hr className={`h-1/2 md:border-[1px] border-[--theme-color] translate-x-[-100vw] line`}/>
            <div className={`flex flex-col fade-down`}>
                <p style="font-size: 20px">{content.bio}</p>
                <div className={`flex justify-end`}>
                    <p className={`text-lg`}>Anas Jiyar</p>
                </div>
                <span className={`text-xl flex items-center font-bold fade-down`} >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                            d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                    <p className={`hover-underline`}><a href="/CV_Developpeur_Fullstack_Anas_JIYAR.pdf" download>Curriculum vitae</a></p>
                </span>
            </div>
        </div>
    )
}