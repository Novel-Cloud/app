import { Artwork } from "./artwork.interface";

export interface Token {
  token: string;
  validity: string;
}

export interface Member {
  email: string;
  memberId: number;
  nickname: string;
  picture: string;
  artworks: Artwork[];
}
