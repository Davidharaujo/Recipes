import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #DFE4DE;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #373737;
`

export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    align-items: center;
    gap: 3vh;
`

export const Titulo = styled.h2`
    font-size: 1.5vw;
    font-weight: 600;
    letter-spacing: .2vw;
`

export const Paragrafo = styled.p`
    font-size: 1.5vw;
    word-spacing: .3vw;
`

export const Cadastro = styled.input`
    width: 30vw;
    height: 10vh;
    padding-left: 1.8vw;
    border: none;
`

export const Botao = styled.button`
    width: 10vw;
    height: 8vh;
    background-color: transparent;
    border: solid #373737;
    letter-spacing: 0.3vw;
    font-weight: 600;

    &:hover{
        background-color: #373737;
        color: white;
    }
`
export const Footer = styled.div`
    width: 100%;
    height: 25vh;
    padding: 3vw;
    display: flex;
    justify-content: space-between;
`

export const Redes = styled.figure`
    width: 40%;
    height: 25vh;
    display: flex;
    gap: 2vw;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.img`
    padding: 1vw;
    height: 12vh;
    transition: .5s;
    &:hover{
        cursor: pointer;
        height: 12vh;
        padding: 0;
    }
`

export const Navigation = styled.nav`
    width: 60%;
    height: 25vh;
    display: flex;
    align-items: center;
`

export const Lista = styled.ul`
    width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 3vw;
    list-style: none;
`

export const Item = styled.li`
    letter-spacing: 2px;
    font-size: 3vh;
    padding: 2.1vh 2.2vw;
    width: 25%;
    text-align: center;

    &:hover{
        border: 2px solid #373737;
        background-color: #373737;
        color: white;
    }
`