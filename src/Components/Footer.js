import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as S from '../Styles/footerStyle'
import Face from './img/Facebook.png'
import Pint from './img/Pinterest.png'
import Insta from './img/Instagram.png'
import Twt from './img/Twitter.png'

export default function Footer() {
  return (
    <section>
      <S.Container>
      <S.Formulario>
        <S.Titulo>SUBSCRIBE</S.Titulo>
        <S.Paragrafo>Sign up for newsletter</S.Paragrafo>
        <S.Cadastro type="text" placeholder="Your Email" />
        <S.Botao>SUBMIT</S.Botao>
      </S.Formulario>
      </S.Container>
      <S.Footer>
        <S.Redes>
          <S.Logo src={Insta} alt="instagram" />
          <S.Logo src={Twt} alt="twitter" />
          <S.Logo src={Face} alt="facebook" />
          <S.Logo src={Pint} alt="pinterest" />
        </S.Redes>
        <S.Navigation>
          <S.Lista>
            <S.Item>ABOUT</S.Item>
            <S.Item>RECIPES</S.Item>
            <S.Item>SUBSCRIBE</S.Item>
          </S.Lista>
        </S.Navigation>
      </S.Footer>
    </section>
    
  )
}
