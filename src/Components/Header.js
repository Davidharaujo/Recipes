import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as S from '../Styles/headerStyle'
import Logo from './img/Logo-rc.png'

export default function Header() {
  return (
    <S.Container>
        <S.Header>
            <img src={Logo} alt="Logo" />
            <S.Navigation>
                <S.Lista>
                    <S.Item>ABOUT</S.Item>
                    <S.Item>RECIPES</S.Item>
                    <S.Item>SUBSCRIBE</S.Item>
                </S.Lista>
            </S.Navigation>
            <S.Hamburguer>☰</S.Hamburguer>
        </S.Header>
        <S.Titulo>RECIPES</S.Titulo>
    </S.Container>
    
  )
}
