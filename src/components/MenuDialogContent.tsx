import {CustomLink} from "../customFunctions/CustomLink";
import useStore from "../store/store";

type ArgumentSetter = { argSetter: (value: boolean) => void };

export function MenuDialogContent({ argSetter }: ArgumentSetter) {
    const translation = useStore(state => state.translations);
    const content = translation.menu;

    const menuItems = [
        {id:1, item:"HOME", link:<CustomLink to={"/"}>{content.home}</CustomLink>},
        {id:2, item:"ABOUT", link:<CustomLink to={"/about"}>{content.about}</CustomLink>},
        {id:3, item:"CONTACT", link:<CustomLink to={"/contact"}>{content.contact}</CustomLink>},
        {id:4, item:"PROJECTS", link:<CustomLink to={"/project-list"}>{content.projects}</CustomLink>},
    ]

    return (
        <>
                <div className={`menu bg-menu`}>
                    <ul className={`h-full w-full flex flex-col justify-center px-[10%] font-bold`}>
                        <div className={`flex flex-col gap-y-2 w-fit menu-anim`}>
                            {
                                menuItems.map((menuItem) => (
                                    <li onClick={() => {argSetter(false)}}
                                        key={menuItem.id}
                                        className={`flex w-fit hover:tracking-widest duration-300 hover-underline`}
                                    >
                                        <p className={`md:text-xl text-lg tracking-wider`}>{menuItem.id}</p>
                                        <p className={`lg:text-7xl md:text-6xl text-5xl font-bold;`}>{menuItem.link}</p>
                                    </li>
                                ))
                            }
                        </div>

                    </ul>
                </div>
        </>
    );
}