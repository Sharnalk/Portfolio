import {h} from 'preact';
import {MenuDialogContent} from "./MenuDialogContent.jsx";
import useStore from "../store/store.js";
import {useLayoutEffect} from "preact/hooks";
import {gsap} from "gsap";

export function Menu (){

    const {activeMenu, setActiveMenu} = useStore();

    useLayoutEffect(() => {
        if(activeMenu){
            const tl = gsap.timeline();
            tl.background('.menu', {})
            tl.listText('.menu-anim li', {})

        } else {
            const tl = gsap.timeline();
            tl.listText('.menu-anim li', {top: '-5vh', opacity: 0, ease: 'power4.out'})
            tl.background('.menu', {top: '-100vh'})
        }
    }, [activeMenu]);

    return(
        <>
            <span onClick={() => (setActiveMenu(!activeMenu))}>
                <button className={activeMenu ? "dots on" : "dots"}>
                    <span></span>
                </button>
            </span>
            <MenuDialogContent argSetter={setActiveMenu} trigger={activeMenu}/>
        </>
    )
}