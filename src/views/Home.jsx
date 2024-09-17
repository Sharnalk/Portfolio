import {h} from 'preact';
import {CustomLink} from "../customFunctions/CustomLink.jsx";
import {MoveRightArrow} from "../assets/svg/MoveRightArrow.jsx";
import useStore from "../store/store.js";
import {useLayoutEffect} from "preact/hooks";
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import {Wave} from "../assets/svg/Wave.jsx";
import {useState} from "preact/hooks";

export function Home() {
    gsap.registerPlugin(TextPlugin);
    const translation = useStore(state => state.translations);
    const content = translation.home;
    useLayoutEffect(() => {
        gsap.to('#name',{duration: 2, text:'ANAS JIYAR', delay:0.8, ease:'power1.inOut'})
    }, [])
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="container-content items-center lg:pt-0 home-title-animation">
            <span className="animate-title flex flex-col justify-center items-center"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
            >
                <h2>{content.title_line_1}<span id='name'></span></h2>
                <h2>{content.title_line_2}</h2>
                <div className={`flex items-center w-full`}>
                    <Wave trigger={isHover}/>
                    <h4 className={`whitespace-nowrap mx-1 z-10`}>{content.subtitle}</h4>
                    <Wave trigger={isHover}/>
                </div>
            </span>

            <section className="flex flex-row gap-x-3 md:gap-x-9 mt-4 text-center animate-title">
                <CustomLink to="/project-list">
                    <span className="text-lg md:text-[1.25rem] hover-underline group">
                        <div className={`flex`}>
                            {translation.home.project_link}
                            <p className="arrow duration-300 group-hover:translate-x-0.5 ml-2"><MoveRightArrow/></p>
                        </div>
                    </span>
                </CustomLink>
                <CustomLink to="/about">
                    <span className="text-lg md:text-[1.25rem] hover-underline group">
                        <div className={`flex`}>
                            {translation.home.about_link}
                            <p className="arrow duration-300 group-hover:translate-x-0.5 ml-2"><MoveRightArrow/></p>
                        </div>
                    </span>
                </CustomLink>
            </section>
        </div>
    );
}
