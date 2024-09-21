import {create} from "zustand";
import translations from "../assets/lang/translation.js";

const useStore = create((set, get) =>({
    lang: 'fr',
    translations: translations['fr'],
    setLang:(lang) => {
        set({
            lang: lang,
            translations: translations[lang],
        })
    },
    activeMenu: false,
    setActiveMenu: (activeMenu) => set({activeMenu}),
    screenSize: document.documentElement.clientWidth,
    setScreenSize: (item) => set({item}),
    dataProject: JSON.parse(sessionStorage.getItem('dataProject')) || {
        name: '',
        description: '',
        technologies: [],
        frameworks: []
    },
    setDataProject: (item) => {
        set({ dataProject: item });
        sessionStorage.clear()
        sessionStorage.setItem('dataProject', JSON.stringify(item));
    }}));
export default useStore;