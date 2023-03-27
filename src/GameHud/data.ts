import { KeyParams } from "./components/Key";

export type WeaponInfo = {
  ammo: number;
  ammoName: string;
  magazines: number;
  currentWeaponIcon: string;
  magazineIcon: string;
  firemodeName: string;
  firemodeIconNumber: number;
  firemodeIconMax: number;
  primaryIcon: string,
  secondaryIcon: string,
  launcherIcon: string,
  grenadeIcon: string,
};

export type KeyRegion = "BR" | "BL" | "CENTER";

export type KeyHelper = KeyParams & {
  id: string;
  region: KeyRegion;
};

export type GameHudData = {
  background: number;
  stance: "prone" | "crouch" | "up";
  usingController: boolean;
  keyHelpers: KeyHelper[];
} & WeaponInfo;


export const gameHudMock: GameHudData = {
  background: 0,
  ammo: 23,
  magazines: 7,
  currentWeaponIcon: 'm4a1.png',
  magazineIcon: 'stanag.png',
  ammoName: 'Ball',
  firemodeName: 'Semi',
  firemodeIconNumber: 1,
  firemodeIconMax: 5,
  primaryIcon: 'm4a1.png',
  secondaryIcon: 'g17.png',
  launcherIcon: 'carl.png',
  grenadeIcon: 'm67.png',
  stance: "up",
  usingController: true,
  keyHelpers: [
    {
      id: 'stoppage',
      region: "CENTER",
      pc: ['R'],
      xbox: ['A'],
      hint: 'Clear Stoppage'
    },
    {
      id: '',
      region: "BR",
      pc: ['Ctrl', 'Shift'],
      xbox: ['LB', 'A'],
      hint: 'Toggle Safety'
    },
    {
      id: '',
      region: "BR",
      pc: ['V'],
      xbox: ['LT'],
      hint: 'Aim Down Sights'
    },
    {
      id: '',
      region: "BL",
      pc: ['H'],
      xbox: ['Y'],
      hint: 'Keybind Info'
    }
  ]
};