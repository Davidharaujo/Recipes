import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as S from '../Styles/mainStyle'
import CakeRedVelvet from './img/CakeRedVelvet.png'
import Pizza from './img/Pizza.png'
import Smoothie from './img/Smoothie.png'
import Spoon from './img/Spoon.png'

export default function Main() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>LATEST RECIPES</S.Title>
        <S.UnderScore></S.UnderScore>
      </S.ContainerTitle>
      <S.CntImg>
      <S.ContainerImage>
        <S.Image src={CakeRedVelvet} alt='Bolo red velvet' />
        <S.TextBox>
          <S.TextUnderScore></S.TextUnderScore>
          <S.Text>Red Velvet Cake</S.Text>
        </S.TextBox>
      </S.ContainerImage>

      <S.ContainerImage>
        <S.Image src={Pizza} alt='Pizza margherita' />
        <S.TextBox>
          <S.TextUnderScore></S.TextUnderScore>
          <S.Text>Margherita Pizza</S.Text>
        </S.TextBox>
      </S.ContainerImage>

      <S.ContainerImage>
        <S.Image src={Smoothie} alt='Dois Smoothies' />
        <S.TextBox>
          <S.TextUnderScore></S.TextUnderScore>
          <S.Text>Peanut Smoothie</S.Text>
        </S.TextBox>
      </S.ContainerImage>
      </S.CntImg>
      <S.Div></S.Div>

      <S.FinalImage>
        <S.SpoonImg src={Spoon} alt='A spoon with himalayan salt' />
        <S.FinalImgText>
          <S.FinalImgTitle>ABOUT</S.FinalImgTitle>
          <S.TextUnderScore></S.TextUnderScore>
          <S.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</S.P>
        </S.FinalImgText>
      </S.FinalImage>
    </S.Container>
  )
}
