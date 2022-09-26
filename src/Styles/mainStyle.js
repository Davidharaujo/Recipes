import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    background-color:#F2F4F1;
    color:#373737;
`

export const ContainerTitle = styled.div`
    height:50vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const Title = styled.h2`
    font-size: 40px;
`
export const UnderScore = styled.h2`
    width:9vw;
    border:solid;
    margin-top:5vh;
`

export const CntImg = styled.section`
    display:flex;
    justify-content: space-evenly;
`

export const ContainerImage = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width:30vw;
    height:95vh;

`

export const Imagem = styled.img`
    width:25vw;
    height:45vh;
    margin-bottom:3vh;
    &:hover{
        cursor:pointer;
        width:28vw;
        height:50vh;
    }
    
`

export const TextBox = styled.div`
    margin-top:-3vh;
    width:25vw;
    height:45vh;
    border: solid #FFFFFF;
    border-right-width: 0.1vw;
    border-top-width:0.1vw;
    border-bottom-width:0vw;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const TextUnderScore = styled.h2`
    border:solid;
    width:3vw;
    margin-bottom:4vh;
`

export const Text = styled.h3`
    font-size:20px;
    font-weight: 300;
`

export const Div = styled.div`
    height:30vh;
`

export const FinalImage = styled.div`
    width:100%;
    display:flex;
`

export const SpoonImg = styled.img`
    width:50%;
`

export const FinalImgText = styled.div`
    width:50%;
    background-color: #FFFFFF;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const FinalImgTitle = styled.h3`
    font-size: 40px;
    margin-bottom: 10vh;
`

export const P = styled.p`
    width:35vw;
    text-align: justify;
    line-height:25px;
`