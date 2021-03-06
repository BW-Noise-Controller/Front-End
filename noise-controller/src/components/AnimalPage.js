import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Timer from "./Timer";

    const Screen = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    `;

    // fade animation for new animals
    const fadeIn = homePosition => keyframes`
    0%   {
        opacity: 0;
        font-size: 24rem;
        top: calc(50% - 12rem);
        left: calc(50% - 12rem);
    }
    50% {
        opacity: 1;
        font-size: 24rem;
        top: calc(50% - 12rem);
        left: calc(50% - 12rem);
    }
    100% {
        font-size: 15vh;
        left: ${homePosition[0]};
        top: ${homePosition[1]};
    }
    `;

    // bounce anim for both new and existing animals
    const bounce = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-50px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
    `;

    // scatter anim – not fully implemented yet
    const scatter = homePosition => keyframes`
    0%   {
        opacity: 1;
        font-size: 15vh;
        left: ${homePosition[0]};
        top: ${homePosition[1]};
    }
    100% {
        opacity: 0;
        font-size: 15vh;
        left: calc(50% - 15vh);
        top: -100px;
    }
    `;

    const animateScatter = props =>
    css`
        ${props => scatter(props.homePosition)} 1s ease;
    `;

    // animation rule for animals already on-screen
    const animateExisting = props =>
    css`
        ${bounce} ${2 +
        Math.random(3)}s cubic-bezier(0.28, 0.84, 0.42, 1) 2s infinite;
    `;

    // anim rules for the appearance of new animals
    // they fade in at large size, then shrink as they
    // move to their destination
    const animateNew = props =>
    css`
        ${props => fadeIn(props.homePosition)} 2s ease,
        ${bounce} ${2 +
        Math.random(3)}s cubic-bezier(0.28, 0.84, 0.42, 1) 2s infinite;
    `;

    // styled component for emoji animals
    const StyledEmoji = styled.span`
    z-index: 100;
    filter: drop-shadow(0 0 0.75rem black);
    user-select: none;
    position: absolute;
    font-size: 15vh;
    left: ${props => props.homePosition[0]};
    top: ${props => props.homePosition[1]};
    animation: ${props =>
        props.status === "scatter"
        ? animateScatter
        : props.status === "new"
        ? animateNew
        : animateExisting};
    animation-fill-mode: forwards;
    visibility: ${props => props.visible};
    `;

    function AnimalPage({ micSensitivity, animalChangeTime }) {
    const [visible, setVisible] = useState(0); // number of animals currently visible, passed through props to the Timer component for control
    const [scattering, sendEmScattering] = useState(false); // whether animals should currently be scattering, passed to Timer for control by its integrated microphone functions

    // animal properties, 15, 37.5
    const [animals, setAnimals] = useState([
        {
        label: "lion",
        symbol: "🦁",
        homePosition: ["calc(20% - 7.5vh)", "calc(30% - 7.5vh)"],
        status: "old",
        visibility: "hidden"
        },
        {
        label: "cat",
        symbol: "🐱",
        homePosition: ["calc(50% - 7.5vh)", "calc(30% - 7.5vh)"],
        status: "old",
        visibility: "hidden"
        },
        {
        label: "dog",
        symbol: "🐶",
        homePosition: ["calc(80% - 7.5vh)", "calc(30% - 7.5vh)"],
        status: "old",
        visibility: "hidden"
        },
        {
        label: "horse",
        symbol: "🐴",
        homePosition: ["calc(20% - 7.5vh)", "calc(55% - 7.5vh)"],
        status: "old",
        visibility: "hidden"
        },
        {
        label: "pig",
        symbol: "🐷",
        homePosition: ["calc(50% - 7.5vh)", "calc(55% - 7.5vh)"],
        status: "old",
        visibility: "hidden"
        },
        {
        label: "panda",
        symbol: "🐼",
        homePosition: ["calc(80% - 7.5vh)", "calc(55% - 7.5vh)"],
        status: "old",
        visibility: "hidden"
        }

    ]);

    useEffect(() => {
        setAnimals(animals =>
        animals.map((animal, index) => {
            if (!scattering) {
            animal.status =
                index < visible - 1 ? "old" : index === visible - 1 ? "new" : "old";
            } else {
            animal.status = "scatter";
            }
            animal.visibility = index < visible ? "visible" : "hidden";
            return animal;
        })
        );
    }, [visible, scattering, setAnimals]);

    // animal emoji component
    const Emoji = props => (
        <StyledEmoji
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.visibility === "hidden" ? "true" : "false"}
        homePosition={props.homePosition}
        status={props.status}
        visible={props.visibility}
        >
        {props.symbol}
        </StyledEmoji>
    );

    // Build animal emoji components from the array of animals according to number of animals visible.
    // Designate the most recent animal "new" status in order to trigger the fade in and slide animation
    const Animals = props => {
        return animals.map(animal => (
        <Emoji
            key={animal.symbol}
            label={animal.label}
            symbol={animal.symbol}
            homePosition={animal.homePosition}
            status={animal.status}
            visibility={animal.visibility}
        />
        ));
    };

    return (
        <div className="home">
        <Screen>
            

            
        </Screen>
        <Timer
            visible={visible}
            setVisible={setVisible}
            micSensitivity={"4"}
            animalChangeTime={animalChangeTime}
            scattered={scattering}
            sendEmScattering={sendEmScattering}
        />
        </div>
    );
    }

    export default AnimalPage;