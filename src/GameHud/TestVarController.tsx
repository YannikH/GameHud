import styled from "styled-components";
import { Column, Row } from "./components/Common";
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

const ConditionalButton = ({children, active, onClick}: {children: React.ReactNode, active: boolean, onClick: any}) => {
  return active ?
    (<ButtonCurrent onClick={onClick}>{ children }</ButtonCurrent>) :
    (<ButtonGray onClick={onClick}>{ children }</ButtonGray>);
};

const SettingsColumn = styled(Column)`
  justify-content: flex-start;
  border-right: solid 1px white;

  margin: 30px 0;
  padding: 0 30px;
  align-items: start;

  :nth-child(3) {
    border: none;
  }
`;

const TestVarController = ({gameHudData,}: {gameHudData: GameHudData}) => {

  const setBackground = (idx: number) => {
    window.UpdateGameData({
      background: idx
    })
  };

  const toggleController = () => {
    window.UpdateGameData({
      usingController: !gameHudData.usingController
    })
  };

  const setWeapon = (name: string) => {
    window.UpdateGameData({
      currentWeaponIcon: `${name}.png`,
      primaryIcon: `${name}.png`
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
    <Row style={{alignItems: 'self-start', justifyContent: 'center', width: '70vw'}}>
      <SettingsColumn>
        <h1>General settings</h1>
        <OptionRow>
          Background image: { backgroundButtons }
        </OptionRow>
        <OptionRow>
          Using controller: <input type="checkbox" checked={gameHudData.usingController} onClick={() => toggleController()}/>
        </OptionRow>
      </SettingsColumn>
      <SettingsColumn>
        <h1>Player Settings</h1>
        <OptionRow>
          Primary weapon
          <ConditionalButton active={gameHudData.currentWeaponIcon === 'm4a1.png'} onClick={() => setWeapon('m4a1')}>M4A1</ConditionalButton>
          <ConditionalButton active={gameHudData.currentWeaponIcon === 'l85.png'} onClick={() => setWeapon('l85')}>L85</ConditionalButton>
        </OptionRow>
        <OptionRow>
          Firemode
          <ConditionalButton active={gameHudData.firemodeName === 'Safe'} onClick={() => window.UpdateGameData({firemodeName: 'Safe'})}>Safe</ConditionalButton>
          <ConditionalButton active={gameHudData.firemodeName === 'Semi'} onClick={() => window.UpdateGameData({firemodeName: 'Semi'})}>Semi</ConditionalButton>
          <ConditionalButton active={gameHudData.firemodeName === 'Full'} onClick={() => window.UpdateGameData({firemodeName: 'Full'})}>Full</ConditionalButton>
        </OptionRow>
      </SettingsColumn>
      <SettingsColumn>
        <h1>Actions</h1>
      </SettingsColumn>
    </Row>
  );
};

export default TestVarController;