import React, { Component, useState, useEffect, useContext } from "react";

// SECTION LEFT
const SectionLeft = () => {
    return (
        <section className="section-left">
            <Counter/>
            <Game/>
        </section>
    )
}

const Counter = () => {
    return (
        <div className="counter">
            <div id="counter-prev"></div>
            <div id="counter-level">Level 4 of 10</div>
            <div id="counter-next"></div>
        </div>
    )
}

const Game = () => {
    return (
        <div className="game">
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
            <SingleElement/>
        </div>
    )
}

const SingleElement = () => {
    return <div className="el"></div>
}

const Tooltip = () => {
    return 
}

export default SectionLeft;