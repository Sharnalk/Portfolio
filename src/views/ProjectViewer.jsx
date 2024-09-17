import { h } from 'preact';
import useStore from "../store/store.js";
import {useState, useLayoutEffect, useRef, useEffect} from "preact/hooks";
import { MoveLeftArrow } from "../assets/svg/MoveLeftArrow.jsx";
import { MoveRightArrow } from "../assets/svg/MoveRightArrow.jsx";
import { ExternalLink } from "../assets/svg/ExternalLink.jsx";
import { projects } from "../customFunctions/dataProjects.js";
import { gsap } from "gsap";

export function ProjectViewer() {
    const { dataProject, setDataProject } = useStore();
    const [keyTranslation, setKeyTranslation] = useState(dataProject.key);
    const translation = useStore((state) => state.translations);
    const goBack = () => {
        window.history.back();
    };
    const currentProject = projects.findIndex((el) => el.id === dataProject.id);
    const nextProject = projects[(currentProject + 1) % projects.length];

    useLayoutEffect(() => {
        gsap.from('.tech-list-anim, .fram-list-anim', {
            x: '-50px',
            opacity: 0,
            duration: 1,
            stagger: 0.02,
            ease: 'power2.inOut',
        })
    }, []);

    useEffect(() => {
        setKeyTranslation(dataProject.key);

    }, [dataProject]);

    const next = (
        <h3 className={`from-left-short`}>
            <span onClick={() => setDataProject(nextProject.data)}
                  className={`flex justify-end items-center gap-x-1`}>
                {nextProject.title}
                <MoveRightArrow />
            </span>
        </h3>
    );

    const goBackRoute = (
        <h3 className={`from-right-short`}>
            <span onClick={() => goBack()}
                  className={`flex items-center gap-x-1 mt-[-2%]`}>
                <MoveLeftArrow/>
                {translation.back}
            </span>
        </h3>
    );

    return (
        <div className={`container-content md:items-center px-[5%]`}>
            <div className={`w-full md:w-[50%] h-[100vh] flex flex-col justify-center gap-y-3`}>
                {goBackRoute}

                <h1 className={`fade-down`}>{dataProject.name}</h1>
                <p className={`text-control fade-down`}>{translation[keyTranslation]?.description}</p>

                <h3 className={`fade-down`}>TECHNOLOGIES</h3>
                <ul className={`flex flex-wrap gap-y-1 gap-x-2`}>
                    {dataProject.technologies.map((technology, index) => (
                        <li
                            key={index}
                            className={`tech-list-anim w-fit h-fit font-medium rounded-[20px] bg-features px-[20px] pb-[2px]`}
                        >
                            {technology}
                        </li>
                    ))}
                </ul>

                <h3 className={`fade-down`}>FRAMEWORK</h3>
                <ul className={`flex flex-wrap gap-y-1 gap-x-2`}>
                    {dataProject.frameworks.map((framework, index) => (
                        <li
                            key={index}
                            className={`fram-list-anim w-fit h-fit font-medium rounded-[20px] bg-features-2 px-[20px] pb-[2px]`}
                        >
                            {framework}
                        </li>
                    ))}
                </ul>

                <div className={`flex fade-down`}>
                    {dataProject.link ? (
                        <a href={dataProject.link} className={`font-normal flex items-center highlight-text`}>
                            <ExternalLink />
                            <h3>LINK&nbsp;</h3>
                        </a>
                    ) : (
                        <div></div>
                    )}
                    {dataProject.github ? (
                        <a href={dataProject.github} className={`font-normal flex items-center highlight-text`}>
                            <ExternalLink />
                            <h3>GITHUB&nbsp;</h3>
                        </a>
                    ) : (
                        <div></div>
                    )}
                </div>
                {next}
            </div>
        </div>
    );
}
