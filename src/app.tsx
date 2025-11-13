import { Header } from "./components/Header";
import { Route, Router } from 'wouter';
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { ProjectList } from "./views/ProjectList";
import { useEffect } from "preact/hooks";
import useStore from "./store/store";
import { BackgroundSvgWave } from "./components/BackgroundSvgWave";
import { Cursor } from "./components/Cursor";
import './customFunctions/gsapEffect';

export function App() {
    const { screenSize, setScreenSize } = useStore();

    useEffect(() => {
        console.log("TYPESCRIPT VERSION IS RUNNING ✅");
        // Here we check the X screen size for disabling cursor class on screen < 800px
        const handleResize = () => {
            setScreenSize(document.documentElement.clientWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const onDomContentLoaded = () => {
            // Event for menu burger
            const dots = document.querySelector(".dots");
            if (dots) {
                dots.addEventListener("click", function (e) {
                    return (e.currentTarget as HTMLElement).classList.toggle("on");
                });
            }
        };
        document.addEventListener("DOMContentLoaded", onDomContentLoaded);
        return () => document.removeEventListener("DOMContentLoaded", onDomContentLoaded);
    }, []);

    return (
        <div className={`flex flex-col min-h-[100vh] overflow-hidden z-0 mainTheme transition-all duration-200`}>
            <Cursor />
            <Header />
            <BackgroundSvgWave />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/project-list" component={ProjectList}/>
            </Router>
        </div>
    );
}
