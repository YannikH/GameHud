import { KeyParams } from "./components/Key";

export type WeaponInfo = {
  current: {
    ammo: number;
    ammoName: string;
    magazines: number;
    icon: string;
    magazineIcon: string;
  };
  firemode: {
    name: string;
    iconNumber: number;
    iconMax: number;
  };
  allWeapons: {
    primary: string,
    secondary: string,
    grenade: string,
  };
};

export type KeyRegion = "BR" | "BL" | "CENTER";

export type KeyHelper = KeyParams & {
  region: KeyRegion;
};

export type GameHudData = {
  background: number;
  weapons: WeaponInfo;
  stance: "prone" | "crouch" | "up";
  usingController: boolean;
  keyHelpers: KeyHelper[];
};


export const gameHudMock: GameHudData = {
  background: 0,
  weapons: {
    current: {
      ammo: 23,
      magazines: 7,
      icon: 'm4a1.png',
      magazineIcon: 'stanag.png',
      ammoName: 'Ball',
    },
    firemode: {
      name: 'Semi',
      iconNumber: 1,
      iconMax: 5,
    },
    allWeapons: {
      primary: 'm4a1.png',
      secondary: 'g17.png',
      grenade: 'm67.png'
    }
  },
  stance: "up",
  usingController: true,
  keyHelpers: [
    {
      region: "CENTER",
      pc: ['R'],
      xbox: ['A'],
      hint: 'Clear Stoppage'
    },
    {
      region: "BR",
      pc: ['Ctrl', 'Shift'],
      xbox: ['LB', 'A'],
      hint: 'Toggle Safety'
    },
    {
      region: "BR",
      pc: ['V'],
      xbox: ['LT'],
      hint: 'Aim Down Sights'
    },
    {
      region: "BL",
      pc: ['H'],
      xbox: ['Y'],
      hint: 'Keybind Info'
    }
  ]
};