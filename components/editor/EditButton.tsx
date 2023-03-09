import Button from "../atoms/Button";

interface EditButtonProps {
  cmd: string;
  name?: string;
  arg?: string;
}

export default function EditButton({ name, cmd, arg }: EditButtonProps) {
  return (
    <Button
      key={cmd}
      onMouseDown={(event) => {
        event.preventDefault();
        document.execCommand(cmd, false, arg);
      }}
    >
      {name || cmd}
    </Button>
  );
}
