import { useRouter } from "next/router";
import Button from "../atoms/Button";

interface TagViewProps {
  tagName: string;
  url: string;
}

export default function TagView({ tagName, url }: TagViewProps) {
  const router = useRouter();
  return <Button onClick={() => router.push(url)}>#{tagName}</Button>;
}
