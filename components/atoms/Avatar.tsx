import Image, { ImageProps } from "next/image";
import * as S from "./Avatar.style";

interface AvatarProps extends ImageProps {
  src: string;
}

export default function Avatar({ src, ...props }: AvatarProps) {
  return (
    <S.AvatarWrapper>
      <Image src={src} {...props} />
    </S.AvatarWrapper>
  );
}
