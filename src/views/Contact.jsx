import {h} from 'preact';
import useStore from "../store/store.js";
import {useEffect} from "preact/hooks";
import {gsap} from "gsap";

export function Contact (){

    const translation = useStore(state => state.translations);
    const content = translation.contact;

    useEffect(()=> {
        const tl = gsap.timeline();
        tl.to('.line', {x:0, duration:1, ease:"power1.inOut"})
        tl.to('.text-anim', {x:0, duration:1, ease:"power3.out"})
    })

    return(
        <div className={`container-content overflow-hidden `}>
            <div className={` overflow-hidden`}>
                <p className={`title-view fade-down`}>CONTACT</p>
                <hr className={`h-1/2 md:border-[1px] border-[--theme-color] translate-x-[-100vw] line`}/>
            </div>

            <div class="grid-cols-2 px-3 lg:px-0">
                <div className={`flex justify-between fade-down`}>
                    <p className={`font-bold md:text-xl text-anim`}>E-MAIL</p>
                    <span className={`text-left w-1/2 text-[15px] md:text-lg`}>
                        <p className={`hover-underline w-fit text-anim`}><a
                            href="mailto:anas.jiyar1@gmail.com">anas.jiyar1@gmail.com</a></p>
                    </span>
                </div>
                <div className={`flex justify-between fade-down`}>
                    <p className="font-bold md:text-xl">{content.social}</p>
                    <span className={`text-left w-1/2 text-[15px] md:text-lg`}>
                        <p className={`hover-underline w-fit`}><a
                            href="https://www.instagram.com/_kashiimo_/">Instagram</a></p>
                        <p className={`hover-underline w-fit`}><a
                            href="https://www.linkedin.com/in/anas-jiyar-7487b6238/">Linkedin</a></p>
                        <p className={`hover-underline w-fit`}><a
                            href="https://github.com/Sharnalk">GitHub</a></p>
                    </span>

                </div>
            </div>
        </div>
    )
}