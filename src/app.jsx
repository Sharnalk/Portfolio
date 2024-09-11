import {Header} from "./components/Header.jsx";
import {Route, Router} from 'wouter'
import {Home} from "./views/Home.jsx";
import {About} from "./views/About.jsx";
import {Contact} from "./views/Contact.jsx";
import {ProjectList} from "./views/ProjectList.jsx";
import {ProjectViewer} from "./views/ProjectViewer.jsx";
import {useEffect} from "preact/hooks";
import {cursorPosition, cursorScale} from "./customFunctions/CursorEventsListener.js";
import useStore from "./store/store.js";
import {BackgroundSvgWave} from "./components/BackgroundSvgWave.jsx";

export function App() {
    const {screenSize, setScreenSize} = useStore();

    useEffect(() => {
        // Here we check the X screen size for disabling cursor class on screen < 800px
        const handleResize = () => {
            setScreenSize(document.documentElement.clientWidth)};
        window.addEventListener('resize', handleResize);
        handleResize()
    }, [])

        document.addEventListener("DOMContentLoaded", () => {
            const cursor = document.querySelector('.cursor');

            if (cursor) {
                cursorPosition(cursor, 13.5);
                cursorScale(cursor);
            }
            // Event for menu burger
            document.querySelector(".dots").addEventListener("click", function(e) {
                return e.currentTarget.classList.toggle("on");
            });
        });
  return (
    <div className={`flex flex-col min-h-[100vh] overflow-hidden z-0 mainTheme transition-all duration-200`}>
        <div className={screenSize > 800 ? "cursor" : ""}></div>
        <Header/>
        <BackgroundSvgWave/>
        <Router>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/project-list" component={ProjectList}></Route>
            <Route path="/project" component={ProjectViewer}></Route>
        </Router>
    </div>
  )
}
