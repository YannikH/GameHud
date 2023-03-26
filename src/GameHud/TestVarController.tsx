import styled from "styled-components";
import { GameHudData } from "./data";

const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: baseline;
`;

const ButtonGray = styled.button`
  margin-left: 5px;
  background-color: rgb(47 81 139);
  color: white;
  border: solid 1px gray;
  border-radius: 3px;
  text-align: center;
  padding: 5px 8px;

  :active {
    background-color: rgb(30 61 120);
  }
`;

const ButtonCurrent = styled(ButtonGray)`
  background-color: #487c3d;
  :active {
   background-color: rgb(49 85 42);
  }
`;

const TestVarController = ({gameHudData, setGameHudData}: {gameHudData: GameHudData, setGameHudData: React.Dispatch<GameHudData>}) => {

  const setBackground = (idx: number) => {
    setGameHudData({
      ...gameHudData,
      background: idx
    })
  };

  const toggleController = () => {
    setGameHudData({
      ...gameHudData,
      usingController: !gameHudData.usingController
    })
  };

  const backgroundButtons = (new Array(3).fill(undefined)).map((_: any, index: number) => {
    const ButtonType = index === gameHudData.background ? ButtonCurrent : ButtonGray;
    return (
      <ButtonType onClick={() => setBackground(index)} key={index}>
        { index + 1 }
      </ButtonType>
    );
  });

  return (
    <>
      <OptionRow>
        Background image: { backgroundButtons }
      </OptionRow>
      <OptionRow>
        Using controller: <input type="checkbox" checked={gameHudData.usingController} onClick={() => toggleController()}/>
      </OptionRow>
    </>
  );
};

export default TestVarController;