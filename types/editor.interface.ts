import { ReactNode } from "react";

export interface EditButtonArgument {
  cmd: string;
  arg?: string;
  icon: ReactNode;
}

export interface ShortCut {
  content: string;
  id: number;
}
