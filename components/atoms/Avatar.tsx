import Image, { ImageProps } from "next/image";
import config from "@/config";
import * as S from "./Avatar.style";

interface AvatarProps extends ImageProps {
  src: string;
}

export default function Avatar({ src, ...props }: AvatarProps) {
  return (
    <S.AvatarWrapper>
      <Image src={src ?? config.defaultProfile} {...props} />
    </S.AvatarWrapper>
  );
}
