import { createRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { gameHudMock } from './data';
import GameHud from './GameHud';
import TestVarController from './TestVarController';

const ScreenBorder = styled.div`
  border: solid 2vw gray;
  border-radius: 2vw;
`;

const ScreenDiv = styled.div`
  background-color: white;
  aspect-ratio: 16 / 9;
  width: 95vw;
  overflow: hidden;
`;

const ScreenFootColumn = styled.div`
  width: 25vw;
  height: 7vw;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ScreenFootRounder = styled.div`
  background-color: rgb(48, 48, 48);
  height: 100%;
  width: 30px;
  border-radius: 15px;
`;

const ScreenFootBottom = styled.div`
  background-color: gray;
  width: 50vw;
  height: 10px;
  border-radius: 10px 10px 0px 0px;
`;

const ScreenFoot = () => {
  return (
    <>
      <ScreenFootColumn>
        <ScreenFootRounder style={{marginLeft: '-10px' }} />
        <ScreenFootRounder style={{marginRight: '-10px' }} />
      </ScreenFootColumn>
      <ScreenFootBottom />
    </>
  );
};

const ScreenContainer = ({children}: { children?: React.ReactNode}) => {
  return (
    <>
      <ScreenBorder>
        <ScreenDiv>
          { children }
        </ScreenDiv>
      </ScreenBorder>
      <ScreenFoot />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const GameHudTester = () => {
  const [gameHudData, setGameHudData] = useState(gameHudMock);
  return (
    <Container>
      <h1> HTML5 Game Hud Test </h1>
      <ScreenContainer>
        <GameHud gameHudData={gameHudData} setGameHudData={setGameHudData}/>
      </ScreenContainer>
      <TestVarController gameHudData={gameHudData} />
    </Container>
  )
};

export default GameHudTester;