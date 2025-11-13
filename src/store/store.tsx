import {create} from "zustand";
import { translations, Lang, CurrentLang } from "../assets/lang/translation";

interface StoreState {
    lang: Lang;
    translations: CurrentLang;
    setLang: (lang: Lang) => void;

    activeMenu: boolean;
    setActiveMenu: (activeMenu: boolean) => void;

    screenSize: number;
    setScreenSize: (item: number) => void;

    dataProject: DataProject;
    setDataProject: (item: DataProject) => void;
}

interface DataProject{
    key: string;
    name: string;
    description: string;
    technologies: string[];
    frameworks: string[];
}

const useStore = create<StoreState>((set) =>({
    lang: 'en',
    translations: translations['en'],
    setLang:(lang) => {
        set({
            lang,
            translations: translations[lang]
        })
    },

    activeMenu: false,
    setActiveMenu: (activeMenu: boolean) => set({activeMenu}),

    screenSize: document.documentElement.clientWidth, // Initial screen size
    setScreenSize: (size) => set({screenSize: size}), 
    
    dataProject: JSON.parse(sessionStorage.getItem('dataProject') as string) || {
        name: '',
        description: '',
        technologies: [],
        frameworks: []
    },
    setDataProject: (item: DataProject) => {
        set({ dataProject: item });
        sessionStorage.clear()
        sessionStorage.setItem('dataProject', JSON.stringify(item));
    }}));

export default useStore;