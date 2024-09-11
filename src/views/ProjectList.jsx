import {h} from 'preact';
import {useEffect, useState} from "preact/hooks";
import {Link} from "wouter";
import {gsap} from "gsap";
import useStore from "../store/store.js";
import {projects} from "../customFunctions/dataProjects.js";

export function ProjectList (){

    const [selectedProject, setSelectedProject] = useState({...projects[0]});
    const {screenSize, setDataProject} = useStore();
    const translation = useStore(state => state.translations);
    const content = translation.projects[selectedProject.id - 1];
    const title = translation.menu.projects;

    function animOpeningImage () {
        gsap.from('.animOpeningImage', {
            top: '-2vh',
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut"
        })
    }
    useEffect(() => {
        
    }, []);
    return(
        <div className={`container-content pt-[20vh] md:pt-[28vh]`}>
            <div className={`h-[100%] w-full flex rounded-lg`}>
                {screenSize > 800 ?
                    <div className={`w-3/4 flex items-start`}>
                        <div className={`w-fit h-fit m-[5%] flex items-center justify-center`}>
                            {
                                selectedProject ?
                                    <div className={`flex flex-col gap-y-9 animOpeningImage`}>
                                        <img src={selectedProject.img} alt="" className={`h-fit w-64 project-img`}/>
                                        <p className={`text-xl project-desc`}>{content.description}</p>
                                    </div>
                                    :
                                    <div>select a project</div>
                            }
                            </div>
                    </div>
                    :
                    <></>
                }

                    <div className={`flex w-full md:w-3/4 flex-col items-center gap-y-6 overflow-y-hidden`}>
                        <h2>{title}</h2>
                        <ul className={`w-full h-[70vh] md:h-[60vh] enable-overflow`}>
                            {
                                projects.map((project) => (
                                    <Link to={`/project`} key={project.id}>
                                        <li
                                            onMouseEnter={() => {
                                                setSelectedProject(project);
                                                animOpeningImage();
                                            }}
                                            onClick={() =>setDataProject(project.data)}
                                            className={`h-[100px] pt-3 grid grid-cols-2 text-center font-bold 
                                            hover:bg-gray-50/25 hover:bg-opacity-25 hover:backdrop-blur duration-150 project-list`}
                                            key={project.id}
                                        >
                                            <h4>{project.title}</h4>
                                            <h4>{project.category}</h4>
                                        </li>
                                    </Link>

                                ))
                            }
                        </ul>
                    </div>
                </div>
        </div>
    )
}