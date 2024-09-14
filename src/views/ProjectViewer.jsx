import {h} from 'preact';
import useStore from "../store/store.js";
import {useEffect, useState} from "preact/hooks";
import {MoveLeftArrow} from "../assets/svg/MoveLeftArrow.jsx";
import {MoveRightArrow} from "../assets/svg/MoveRightArrow.jsx";
import {ExternalLink} from "../assets/svg/ExternalLink.jsx";
import {projects} from "../customFunctions/dataProjects.js";
export function ProjectViewer () {

    const {dataProject, setDataProject} = useStore();
    const [keyTranslation, setKeyTranslation] = useState(dataProject.key);
    const translation = useStore(state => state.translations);
    const goBack = () => {
        window.history.back();
    };
    const nextProject = projects[(projects.findIndex(el => el.id === dataProject.id) + 1) % projects.length];

    useEffect(() => {
        setKeyTranslation(dataProject.key);
    }, [dataProject]);

    const next =
        <h3>
            <span onClick={() => {setDataProject(nextProject.data)}} className={`flex justify-end items-center gap-x-1`}>
                {nextProject.title}
                <MoveRightArrow/>
            </span>
        </h3>

    const goBackRoute =
        <h3>
            <span onClick={() => goBack()} className={`flex items-center gap-x-1 mt-[-2%]`}>
                <MoveLeftArrow/>
                {translation.back}
            </span>
        </h3>

    return (
        <div className={`container-content md:items-center px-[5%]`}>
            <div className={`w-full md:w-[50%] h-[100vh] flex flex-col justify-center gap-y-3`}>

                {goBackRoute}

                <h1>{dataProject.name}</h1>
                <p className={`text-control`}>{translation[keyTranslation]?.description}</p>

                <h3>TECHNOLOGIES</h3>
                <ul className={`flex flex-wrap gap-y-1 gap-x-2`}>
                    {dataProject.technologies.map(technology => (
                        <li key={technology.index}
                            className={`w-fit h-fit font-medium rounded-[20px] bg-features px-[20px] pb-[2px]`}>
                            {technology}
                        </li>
                    ))}
                </ul>

                <h3>FRAMEWORK</h3>
                <ul className={`flex flex-wrap gap-y-1 gap-x-2`}>
                    {dataProject.frameworks.map(framework => (
                        <li key={framework.index}
                            className={`w-fit h-fit font-medium rounded-[20px] bg-features-2 px-[20px] pb-[2px]`}>
                            {framework}
                        </li>
                    ))}
                </ul>
                <div className={`flex`}>
                    {
                        dataProject.link ?
                                <a href={dataProject.link} className={`font-normal flex items-center`}>
                                    <ExternalLink/>
                                    <h3>LINK&nbsp;</h3>
                                </a>
                             : <div></div>
                    }
                    {
                        dataProject.github ?
                                <a href={dataProject.github} className={`font-normal flex items-center`}>
                                    <ExternalLink/>
                                    <h3>GITHUB&nbsp;</h3>
                                </a>
                             : <div></div>
                    }
                </div>
                {next}
            </div>
        </div>
    )
}