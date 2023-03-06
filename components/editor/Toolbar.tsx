import EditButton from "./EditButton";
import * as S from "./Toolbar.style";

export default function Toolbar() {
  return (
    <S.ToolbarWrapper>
      <EditButton cmd="italic" arg="i" />
      <EditButton cmd="bold" arg="b" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton cmd="insertImage" arg="https://placekitten.com/200/300" />
      <EditButton cmd="justifyCenter" />
      <EditButton cmd="justifyLeft" />
      <EditButton cmd="justifyRight" />
      <EditButton cmd="insertHorizontalRule" />
      <EditButton cmd="fontSize" arg="1" name="h7" />
      <EditButton cmd="fontSize" arg="2" name="h6" />
      <EditButton cmd="fontSize" arg="3" name="h5" />
      <EditButton cmd="fontSize" arg="4" name="h4" />
      <EditButton cmd="fontSize" arg="5" name="h3" />
      <EditButton cmd="fontSize" arg="6" name="h2" />
      <EditButton cmd="fontSize" arg="7" name="h1" />
      <EditButton cmd="backColor" arg="black" />
    </S.ToolbarWrapper>
  );
}
