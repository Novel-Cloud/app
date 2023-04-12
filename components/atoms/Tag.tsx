import Button from "./Button";

interface TagViewProps {
  tagName: string;
  onClick: () => void;
}

export default function TagView({ tagName, onClick }: TagViewProps) {
  return <Button onClick={onClick}>#{tagName}</Button>;
}
