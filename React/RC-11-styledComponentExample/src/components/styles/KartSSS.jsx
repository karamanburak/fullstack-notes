import styled from 'styled-components';

const KartSSS = styled.div`
background-color:aquamarine;

 border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({nida})=>nida};

  box-shadow: ${({theme})=>theme.golge};

  @media screen and (max-width: ${({theme})=>theme.responsive}) {
    flex-direction: column;
    background-color: pink;
    
  }
`;

export default KartSSS;




