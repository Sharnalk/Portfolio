import {h} from 'preact';
import useStore from "../store/store.js";
import {useEffect, useState} from "preact/hooks";
import {moveLeftArrow} from "../assets/svg/moveLeftArrow.jsx";
import {moveRightArrow} from "../assets/svg/moveRightArrow.jsx";
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
                SUIVANT
                <moveRightArrow/>
            </span>
        </h3>

    const previous =
        <h3>
            <span onClick={() => goBack()} className={`flex items-center gap-x-1 mt-[-2%]`}>
                <moveLeftArrow/>
                RETOUR
            </span>
        </h3>

    return (
        <div className={`container-content md:items-center px-[5%]`}>
            <div className={`w-full md:w-[60%] h-[100vh] flex flex-col justify-center gap-y-3`}>

                {previous}

                <h1>{dataProject.name}</h1>
                <p className={`text-control`}>{translation[keyTranslation]?.description}</p>

                <h3>TECHNOLOGIES</h3>
                <ul className={`flex gap-x-2`}>
                    {dataProject.technologies.map(technology => (
                        <li key={technology.index}
                            className={`w-fit h-fit font-medium rounded-[20px] bg-features px-[20px] pb-[2px]`}>
                            {technology}
                        </li>
                    ))}
                </ul>

                <h3>FRAMEWORK</h3>
                <ul className={`flex gap-x-2`}>
                    {dataProject.frameworks.map(framework => (
                        <li key={framework.index}
                            className={`w-fit h-fit font-medium rounded-[20px] bg-features px-[20px] pb-[2px]`}>
                            {framework}
                        </li>
                    ))}
                </ul>
                <div className={`flex justify-between`}>
                    {
                        dataProject.link ?
                            <div className={`flex`}>
                                <h3>LINK :&nbsp;</h3>
                                <a href={dataProject.link} className={`font-normal truncate`}>
                                    <h3 className={`hover-underline`}>
                                        {dataProject.link}
                                    </h3>
                                </a>
                            </div> : <div></div>
                    }
                    {next}
                </div>

            </div>
        </div>
    )
}