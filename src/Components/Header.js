import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as S from '../Styles/headerStyle'

export default function Header() {
  return (
    <S.Container>
        <S.Header>
            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=96b0b497-674d-472a-89e9-aa680a0712af&api_key=CometServer1&access_token=1663906651_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_1fc7cd0d46a433289c1dbdfeb39ef97c3c4d141c" alt="Logo" />
            <S.Navigation>
                <S.Lista>
                    <S.Item>ABOUT</S.Item>
                    <S.Item>RECIPES</S.Item>
                    <S.Item>SUBSCRIBE</S.Item>
                </S.Lista>
            </S.Navigation>
        </S.Header>
        <S.Titulo>RECIPES</S.Titulo>
    </S.Container>
    
  )
}
