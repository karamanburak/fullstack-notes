import styled from 'styled-components';

const ButtonS = styled.button`

color: ${({saban})=> saban ? "blue" : "red"};
background-color: ${({saban,elif})=> saban ? "lightblue" : elif ? "blue" : "orange"};
cursor: pointer;
padding: 1rem 1.5rem;
border: none;
border-radius: 5px;
font-family: Tahoma, Geneva, Verdana, sans-serif;
font-size:30px;
&:hover{
    transform: scale(.95);
    transition:all ease-in-out .2s;
}
`;

export const TomatoButton = styled(ButtonS)`
color: ${({asiye})=> asiye ? "tomato" : "green"};
width: 300px;
background-color: aquamarine;
`

export default ButtonS;
