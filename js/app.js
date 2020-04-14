import React, { Component, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

// STYLES
import '../scss/main.scss';

// DATA
import GameDataset from './data/dataset';

// CONTEXTS
import LevelContextProvider from './contexts/LevelContext';
import AnswerContextProvider from './contexts/AnswerContext';

// COMPONENTS
import GameEngine from './components/GameEngine';

// APP
const App = () => {
    return (
        <LevelContextProvider dataset={GameDataset}>
            <AnswerContextProvider>
                <GameEngine dataset={GameDataset}/>
            </AnswerContextProvider>
        </LevelContextProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
