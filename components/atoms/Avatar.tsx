import Image, { ImageProps } from "next/image";
import * as S from "./Avatar.style";

interface AvatarProps extends ImageProps {
  src: string;
}

export default function Avatar({ src, ...props }: AvatarProps) {
  return (
    <S.AvartarWrapper>
      <Image src={src} {...props} />
    </S.AvartarWrapper>
  );
}
