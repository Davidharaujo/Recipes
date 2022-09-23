import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    background-image: url('https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=8444393a-5d93-4997-8ad0-0d450a8011e0&api_key=CometServer1&access_token=1663906651_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_1fc7cd0d46a433289c1dbdfeb39ef97c3c4d141c');
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