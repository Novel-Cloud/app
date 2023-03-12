import FrameButton from "../atoms/FrameButton";
import * as S from "./ButtonList.style";

export default function ButtonList() {
  return (
    <S.ButtonListWrapper>
      <FrameButton>Illust</FrameButton>
      <FrameButton>Manga</FrameButton>
      <FrameButton>Novel</FrameButton>
    </S.ButtonListWrapper>
  );
}
