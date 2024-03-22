import React from 'react'
import HeaderS, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonS, { TomatoButton } from './style/ButtonStyle'

const Home = () => {
  return (
    <DivStyle>
        <HeaderS>STYLED COMPONENTS</HeaderS>
        <LinkS href="#">LINK</LinkS>

        <ButtonS saban>TIKLA 1</ButtonS>
        <ButtonS elif>TIKLA 2</ButtonS>
        <ButtonS>TIKLA 3</ButtonS>
        <TomatoButton>TIKLA 4</TomatoButton>
        <TomatoButton asiye>TIKLA 5</TomatoButton>

    </DivStyle>
  )
}

export default Home