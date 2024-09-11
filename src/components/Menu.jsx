import {h} from 'preact';
import {MenuDialogContent} from "./MenuDialogContent.jsx";
import useStore from "../store/store.js";
import {useEffect} from "preact/hooks";
import {gsap} from "gsap";

export function Menu (){
    const {activeMenu, setActiveMenu} = useStore();
    const setMenuBackgroundAnimation = (tl, yBackgroundAnimationValue) => {
        return tl.to(".menu", {
                top: yBackgroundAnimationValue,
                duration: 0.4,
                ease: 'power2.inOut',
            });

    }
    const setMenuTextAnimation = (tl, yTextAnimationValue, isEntering) => {
        return tl.to('.menu-anim li', {
            top: yTextAnimationValue,
            opacity: isEntering ? 1 : 0,
            stagger: 0.08,
            ease: 'power4.' + isEntering ? 'in' : 'out',
            duration: 0.1
        });

    }

    useEffect(() => {
        if(activeMenu){
            const tl = gsap.timeline();
            setMenuBackgroundAnimation(tl, 0);
            setMenuTextAnimation(tl, 0, true);
        } else {
            const tl = gsap.timeline();
            setMenuTextAnimation(tl, '-5vh', false);
            setMenuBackgroundAnimation(tl, '-100vh');
        }
    }, [activeMenu]);

    return(
        <>
            <span className={`font-bold`} onClick={() => (setActiveMenu(!activeMenu))}>
                <button className={activeMenu ? "dots on" : "dots"}>
                    <span></span>
                </button>
            </span>
            <MenuDialogContent argSetter={setActiveMenu} trigger={activeMenu}/>
        </>
    )
}