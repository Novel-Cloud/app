import Image, { ImageProps } from "next/image";

export default function AutoHeightImage({ ...props }: ImageProps) {
  return (
    <Image
      {...props}
      width={1920}
      height={1080}
      style={{
        width: "100%",
        height: "auto !important",
        objectFit: "contain",
      }}
    />
  );
}
