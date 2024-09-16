import {h} from 'preact';
import useStore from "../store/store.js";
import {MoveDownArrow} from "../assets/svg/MoveDownArrow.jsx";

export function About (){

    const translation = useStore(state => state.translations);
    const content = translation.about;

    return(
        <div className={`container-content`}>
            <div className={`overflow-hidden`}>
                <p className={`title-view fade-down`}>{content.title}</p>
                <hr className={`h-1/2 md:border-[1px] border-[--theme-color] from-left`}/>
            </div>
            <div className={`flex flex-col fade-down`}>
                <p className={`text-[20px]`}>{content.bio}</p>
                <div className={`flex justify-end`}>
                    <p className={`text-lg`}>Anas Jiyar</p>
                </div>
                <span className={`text-xl flex items-center font-bold fade-down group`} >
                    <MoveDownArrow className={`group-hover:animate-bounce`}/>
                    <p className={`hover-underline`}><a href="/CV_Developpeur_Fullstack_Anas_JIYAR.pdf" download>Curriculum vitae</a></p>
                </span>
            </div>
        </div>
    )
}