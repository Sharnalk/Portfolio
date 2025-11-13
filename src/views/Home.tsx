import {CustomLink} from "../customFunctions/CustomLink";
import {MoveRightArrow} from "../assets/svg/MoveRightArrow.js";
import useStore from "../store/store";
import {useLayoutEffect} from "preact/hooks";
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { Wave } from "../assets/svg/Wave";
import {useState} from "preact/hooks";

export function Home() {
    gsap.registerPlugin(TextPlugin);
    
    const translation = useStore(state => state.translations);
    const content = translation.home;
    const [isHover, setIsHover] = useState(false);

    const links = [
        {id:1, to:"/project-list", text:translation.home.project_link},
        {id:2, to:"/about", text:translation.home.about_link},
    ];
    useLayoutEffect(() => {
        gsap.to('#name',
            {
                duration: 2,
                text:'ANAS JIYAR',
                delay:0.8,
                ease:'power1.inOut'
            })
    }, []);

    return (
        <div className="container-content items-center lg:pt-0 home-title-animation">
            <span className="animate-title flex flex-col justify-center items-center"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
            >
                <h1>{content.title_line_1}<span id='name'></span></h1>
                <h1>{content.title_line_2}</h1>
                <div className={`flex items-center w-full`}>
                    <Wave trigger={isHover}/>
                    <h4 className={`whitespace-nowrap mx-1 z-10`}>{content.subtitle}</h4>
                    <Wave trigger={isHover}/>
                </div>
            </span>

            <section className="flex flex-row gap-x-3 md:gap-x-9 mt-4 text-center animate-title">
                {
                    links.map(element => (
                        <CustomLink key={element.id} to={element.to}>
                            <span className="text-lg md:text-[1.25rem] hover-underline group">
                                <div className={`flex`}>
                                    {element.text}
                                    <p className="arrow duration-300 group-hover:translate-x-0.5 ml-2"><MoveRightArrow/></p>
                                </div>
                            </span>
                        </CustomLink>
                    ))
                }
            
            </section>
        </div>
    );
}
