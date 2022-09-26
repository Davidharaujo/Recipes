import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import background from '../Components/img/background.png'

export const Container = styled.section`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 33vh;
    width: 100%;
    height: 100vh;
    color: #373737;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 17vh;
    justify-content: space-between;
    align-items: center;
    padding: 2vw;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    width: 50%;
    height: 17vh;
`

export const Lista = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
    height: 17vh;
`

export const Item = styled.li`
    letter-spacing: 2px;
    font-size: 3vh;
    padding: 2.1vh 2.2vw;
    width: 30%;
    text-align: center;

    &:last-child{
        border: 2px solid #373737;
    }
    &:hover{
        border: 2px solid #373737;
        background-color: #373737;
        color: white;
    }
`

export const Titulo = styled.h1`
    font-size: 13vh;
    letter-spacing: 1vw;
    font-weight: 600;
`