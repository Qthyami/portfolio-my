import './App.css';

import {Header} from "./layout/header/Header";
import { Element } from 'react-scroll';
import {Projects} from "./layout/sections/projects";
import {Contact} from "./layout/sections/Contact";
import {Skills} from "./layout/sections/skills/Skills";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";


function App() {

    return (
        <div className="App">
            <Header />

            <Element name="home" >
                <Main/>
            </Element>
            <Element name="about" >
                <About/>
            </Element>
            <Element name="skills">
                <Skills/>
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    );
}

export default App;

