import {h} from 'preact';
import {useEffect} from "preact/hooks";
import { gsap } from 'gsap';
import useStore from "../store/store.js";
export function BackgroundSvgWave (){

    const {activeMenu} = useStore();
    // CSS target of 1st group of svg
    const svgPathGroup1 = "#visual g:nth-of-type(1) path"
    // CSS target of 2nd group of svg
    const svgPathGroup2 = "#visual g:nth-of-type(2) path"

    // Custom object for optimize animation creation
    const paramAnimSvg = (x, y, options = {}) => {
        return {
            opacity: 0,
            scale: 0,
            xPercent: x,
            yPercent: y,
            duration: 1,
            stagger: 0.3,
            ease: 'elastic(2, -2)',
            ...options
        };
    };
    function animatedSvg(target){
        let gl = gsap.timeline({
            repeat: -1,
            yoyo: true
        });
        gl.to(target, {
            scale: 1.03,
            duration:2,
            stagger:0.2,
            ease: "sine.inOut",
        });
        gl.to(target, {
            scale: 1,
            duration:2,
            stagger:0.2,
            ease: "sine.inOut",
        });
    }

    // Animation when launching the server
    useEffect(() => {
        //Animation of 1st SVG
        gsap.from(
            svgPathGroup1,paramAnimSvg(100,-100,
                {
                    onComplete: () => {
                        gsap.killTweensOf("#visual g path");
                        animatedSvg("#visual g:nth-of-type(1) path");
                        animatedSvg("#visual g:nth-of-type(2) path");
                }})
        );

        //Animation of 2nd SVG
        gsap.from(
            svgPathGroup2,
            paramAnimSvg(-100, 100))

    },[]);

    return(
        <div className={`absolute top-0 left-0 w-[100vw] h-[100vh] svg-background`}>
            <svg
                id="visual"
                viewBox="0 0 900 600"
                width="900"
                height="600"
                preserveAspectRatio="none"
                className={`w-full h-full`}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1">
                <defs>
                    <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
                        <stop offset="20%" stop-color="#41daba" stop-opacity="1"></stop>
                        <stop offset="80%" stop-color="#41daba" stop-opacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="grad1_1" x1="33.3%" y1="0%" x2="100%" y2="100%">
                        <stop offset="20%" stop-color="#41daba" stop-opacity="1"></stop>
                        <stop offset="80%" stop-color="#006e81" stop-opacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="grad1_2" x1="33.3%" y1="0%" x2="100%" y2="100%">
                        <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop>
                        <stop offset="80%" stop-color="#006e81" stop-opacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
                        <stop offset="20%" stop-color="#41daba" stop-opacity="1"></stop>
                        <stop offset="80%" stop-color="#41daba" stop-opacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="grad2_1" x1="0%" y1="0%" x2="66.7%" y2="100%">
                        <stop offset="20%" stop-color="#006e81" stop-opacity="1"></stop>
                        <stop offset="80%" stop-color="#41daba" stop-opacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="grad2_2" x1="0%" y1="0%" x2="66.7%" y2="100%">
                        <stop offset="20%" stop-color="#006e81" stop-opacity="1"></stop>
                        <stop offset="80%" stop-color="#001220" stop-opacity="1"></stop>
                    </linearGradient>
                </defs>
                <g transform="translate(900, 0)">
                    <path
                        d="M0 432.7C-32.1 378.4 -64.2 324.1 -95.8 294.8C-127.4 265.5 -158.4 261.2 -176.9 243.5C-195.4 225.9 -201.3 194.9 -245.9 178.7C-290.6 162.5 -373.9 161 -411.5 133.7C-449.1 106.4 -440.9 53.2 -432.7 0L0 0Z"
                        className={`path-1`}
                        id='g1-path1'
                        fill="#003d52"></path>
                    <path
                        d="M0 288.4C-21.4 252.3 -42.8 216.1 -63.9 196.6C-84.9 177 -105.6 174.1 -117.9 162.3C-130.3 150.6 -134.2 129.9 -164 119.1C-193.7 108.3 -249.3 107.3 -274.3 89.1C-299.4 70.9 -293.9 35.5 -288.4 0L0 0Z"
                        className={`path-2`}
                        id='g1-path2'
                        fill="#00a3a4"></path>
                    <path
                        d="M0 144.2C-10.7 126.1 -21.4 108 -31.9 98.3C-42.5 88.5 -52.8 87.1 -59 81.2C-65.1 75.3 -67.1 65 -82 59.6C-96.9 54.2 -124.6 53.7 -137.2 44.6C-149.7 35.5 -147 17.7 -144.2 0L0 0Z"
                        className={`path-3`}
                        id='g1-path3'
                        fill="#41daba"></path>
                </g>
                <g transform="translate(0, 600)">
                    <path
                        d="M0 -432.7C51.2 -439.3 102.5 -446 133.7 -411.5C164.9 -377 176.1 -301.4 184 -253.2C191.8 -205.1 196.4 -184.4 236.2 -171.6C276.1 -158.9 351.3 -154 389.9 -126.7C428.6 -99.4 430.6 -49.7 432.7 0L0 0Z"
                        className={`path-1`}
                        id='g2-path1'
                        fill="#003d52"></path>
                    <path
                        d="M0 -288.4C34.2 -292.9 68.3 -297.3 89.1 -274.3C109.9 -251.3 117.4 -200.9 122.7 -168.8C127.9 -136.7 130.9 -122.9 157.5 -114.4C184.1 -105.9 234.2 -102.7 260 -84.5C285.7 -66.3 287.1 -33.1 288.4 0L0 0Z"
                        className={`path-2`}
                        id='g2-path2'
                        fill="#00a3a4"></path>
                    <path
                        d="M0 -144.2C17.1 -146.4 34.2 -148.7 44.6 -137.2C55 -125.7 58.7 -100.5 61.3 -84.4C63.9 -68.4 65.5 -61.5 78.7 -57.2C92 -53 117.1 -51.3 130 -42.2C142.9 -33.1 143.5 -16.6 144.2 0L0 0Z"
                        className={`path-3`}
                        id='g2-path3'
                        fill="#41daba"></path>
                </g>
            </svg>

        </div>
    )
}