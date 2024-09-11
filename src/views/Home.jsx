import {h} from 'preact';
import {CustomLink} from "../customFunctions/CustomLink.jsx";
import useStore from "../store/store.js";
import {useEffect} from "preact/hooks";
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

export function Home() {
    gsap.registerPlugin(TextPlugin);
    const translation = useStore(state => state.translations);
    const content = translation.home;
    useEffect(() => {
        gsap.to('#name',{duration: 2, text:'ANAS JIYAR', delay:0.8, ease:'power1.inOut'})
    }, [])

    return (
        <div className="container-content items-center lg:pt-0 home-title-animation">
                    <span className="animate-title flex flex-col justify-center items-center">
                        <h2>{content.title_line_1}<span id='name'></span></h2>
                        <h2>{content.title_line_2}</h2>
                        <h4>{content.subtitle}</h4>
                    </span>

                    <section className="flex flex-row gap-x-3 md:gap-x-9 mt-4 text-center animate-title">
                        <CustomLink to="/project-list">
                           <span className="text-lg md:text-[1.25rem] hover-underline group">
                                <div className={`flex`}>
                                    {translation.home.project_link}
                                    <p className="arrow duration-300 group-hover:scale-125 ml-2">➡</p>
                                </div>
                            </span>
                        </CustomLink>
                        <CustomLink to="/about">
                            <span className="text-lg md:text-[1.25rem] hover-underline group">
                                <div className={`flex`}>
                                    {translation.home.about_link}
                                    <p className="arrow duration-300 group-hover:scale-125 ml-2">➡</p>
                                </div>
                            </span>
                        </CustomLink>
                    </section>
        </div>
    );
}
