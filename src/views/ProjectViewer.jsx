import {h} from 'preact';
import useStore from "../store/store.js";

export function ProjectViewer (){
    const {dataProject} = useStore();
    const translation = useStore(state => state.translations);

    return(
        <div className={`container-content items-center justify-center pt-[20vh] md:pt-[28vh]`}>
            <div className={`w-[100vw] md:w-[50vw] h-[100vh] z-10 `}>
                <h1>{dataProject.name}</h1>
                <p>{translation.cfa.description}</p>
                <h4>TECHNOLOGIES</h4>
                <ul className={`flex gap-x-2`}>
                    {dataProject.technologies.map(i => (
                        <li key={i.index} className={`bg-gray-50 rounded-3xl w-fit`}>
                            {i}
                        </li>
                    ))}
                </ul>
                <h4>FRAMEWORK</h4>
                <ul>
                    {}
                </ul>
                <h4>DETAILS</h4>
                <ul></ul>
            </div>
        </div>
    )
}