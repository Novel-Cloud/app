import { ReactNode } from "react";
import Button from "../atoms/Button";

interface EditButtonProps {
  cmd: string;
  arg?: string;
  icon: ReactNode;
}

export default function EditButton({ cmd, arg, icon }: EditButtonProps) {
  return (
    <Button
      key={cmd}
      onMouseDown={(event) => {
        event.preventDefault();
        document.execCommand(cmd, false, arg);
      }}
    >
      {icon}
    </Button>
  );
}
