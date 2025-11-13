import {useLayoutEffect, useState} from "preact/hooks";
import {Link} from "wouter";
import {gsap} from "gsap";
import useStore from "../store/store";
import {projects} from "../customFunctions/dataProjects";

export function ProjectList (){

    const [selectedProject, setSelectedProject] = useState({...projects[0]});
    const {screenSize, setDataProject} = useStore();
    const translation = useStore(state => state.translations);
    const content = translation.projects[selectedProject.id - 1];
    const title = translation.menu.projects;

    useLayoutEffect(() => {
        gsap.to('.project-list',{
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: 'power4.inOut',
            duration: 1
        }
        );
    }, [])

    return(
        <div className={`container-content pt-[20vh] md:pt-[28vh]`}>
            <div className={`h-[100%] w-full flex rounded-lg`}>
                {screenSize > 800 ?
                    <div className={`w-3/4 flex items-start`}>
                        <div className={`w-fit h-fit m-[5%] flex items-center justify-center`}>
                            {
                                selectedProject ?
                                    <div className={`flex flex-col gap-y-9`}>
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
                        <h2 className={`fade-down`}>{title}</h2>
                        <ul className={`w-full h-[70vh] md:h-[60vh] enable-overflow`}>
                            {
                                projects.map((project) => (
                                    <Link to={`/project`} key={project.id}>
                                        <li
                                            onMouseEnter={() => {
                                                setSelectedProject(project);
                                            }}
                                            onClick={() =>setDataProject(project.data)}
                                            className={`h-[100px] pt-3 grid grid-cols-2 text-center font-bold 
                                            hover:bg-gray-50/25 hover:bg-opacity-25 hover:backdrop-blur duration-150 opacity-0 translate-y-[-100%] project-list`}
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