import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {MyWorks} from "./components/MyWorks/MyWorks";
import {RemoteWork} from "./components/RemoteWork/RemoteWork";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

