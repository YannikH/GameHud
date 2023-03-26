import { createContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import BottomLeft from "./components/BottomLeft";
import { Column, FixedContainer } from "./components/Common";
import ItemHelp from "./components/ItemHints";
import Key, { getHelperKeys } from "./components/Key";
import WeaponCluster from "./components/WeaponCluster";
import { GameHudData, KeyHelper, WeaponInfo } from "./data";

const GameHudContainer = styled(FixedContainer)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.theme.background});
  background-size: cover;
  position: relative;
`;

const ContextContainer = styled(FixedContainer)`
  top: 70%;
  left: 0;
`;


export const ControllerContext = createContext(true);
export const KeyHelpContext = createContext([] as KeyHelper[]);

const GameHud = ({gameHudData}: {gameHudData: GameHudData}) => {
  const backgrounds = ['bg1.png', 'bg2.png'];
  const gameHudTheme = {
    background: backgrounds[gameHudData.background]
  };
  const keys = getHelperKeys(gameHudData.keyHelpers, 'CENTER');
  return (
    <ThemeProvider theme={gameHudTheme}>
      <KeyHelpContext.Provider value={gameHudData.keyHelpers}>
        <ControllerContext.Provider value={gameHudData.usingController}>
          <GameHudContainer>
            <ContextContainer>
              <Column> {keys} </Column>
            </ContextContainer>
            <WeaponCluster weaponInfo={gameHudData.weapons} />
            <ItemHelp weaponInfo={gameHudData.weapons} />
            <BottomLeft />
          </GameHudContainer>
          </ControllerContext.Provider>
        </KeyHelpContext.Provider>
    </ThemeProvider>
  );
};

export default GameHud;