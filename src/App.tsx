import './App.css';

import {Header} from "./layout/header/Header";
import { Element } from 'react-scroll';
import {Works} from "./layout/sections/works/works";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Skills} from "./layout/sections/skills/Skills";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Footer} from "./layout/footer/footer";


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
                <Works />
            </Element>
            <Element name="contact">
                <Contacts />
            </Element>
            <Element name="footer">
                <Footer />
            </Element>
        </div>
    );
}

export default App;

