import { prydwenParser } from "./parser";
import { gamesradarParser } from "./parser";
import { pockettacticsParser } from "./parser";

export enum Source {
  Prydwen = "Prydwen",
  GamesRadar = "Gamesradar",
  Pockettactics = "Pockettactics",
}

export interface SourceConfig {
  name: Source;
  url: string;
  parser: (html: string) => any[];
}

export const sourceConfigs: SourceConfig[] = [
  {
    name: Source.GamesRadar,
    url: "https://www.gamesradar.com/games/rpg/arknights-endfield-codes/",
    parser: gamesradarParser,
  },
  {
    name: Source.Pockettactics,
    url: "https://www.pockettactics.com/arknights-endfield/codes",
    parser: pockettacticsParser,
  },
  {
    name: Source.Prydwen,
    url: "https://www.prydwen.gg/arknights-endfield/",
    parser: prydwenParser,
  },
];
