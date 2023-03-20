import { ReactNode } from "react";

export interface EditButtonArgument {
  cmd: string;
  arg?: string;
  icon: ReactNode;
  id: number;
}

export interface ShortCut {
  content: string;
  id: number;
}
