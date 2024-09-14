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
    activeMenu:false,
    setActiveMenu: (activeMenu) => set({activeMenu}),
    testAnimRoute: false,
    setTestAnimRoute: (item) => set({item}),
    screenSize: document.documentElement.clientWidth,
    setScreenSize: (item) => set({item}),
    dataProject: JSON.parse(localStorage.getItem('dataProject')) || {
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