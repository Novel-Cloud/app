import Button from "../atoms/Button";
import * as S from "./Toolbar.style";

export default function Toolbar() {
  return (
    <S.ToolbarWrapper>
      <Button>이미지</Button>
      <Button>단축어</Button>
    </S.ToolbarWrapper>
  );
}
