import EditButton from "./EditButton";
import * as S from "./Toolbar.style";

export default function ToolbarView() {
  const editButtonArgumentList = [
    { cmd: "justifyCenter" },
    { cmd: "justifyLeft" },
    { cmd: "justifyRight" },
    { cmd: "insertParagraph" },
    { cmd: "insertUnorderedList" },
    { cmd: "insertOrderedList" },
    { cmd: "insertText", arg: "엄준식", name: "generate um" },
    { cmd: "insertHorizontalRule" },
    { cmd: "italic", arg: "i" },
    { cmd: "bold", arg: "b" },
    { cmd: "insertImage", arg: "https://placekitten.com/200/300" },
    { cmd: "formatBlock", arg: "h1", name: "heading" },
    { cmd: "fontSize", arg: "1", name: "h7" },
    { cmd: "fontSize", arg: "2", name: "h6" },
    { cmd: "fontSize", arg: "3", name: "h5" },
    { cmd: "fontSize", arg: "4", name: "h4" },
    { cmd: "fontSize", arg: "5", name: "h3" },
    { cmd: "fontSize", arg: "6", name: "h2" },
    { cmd: "fontSize", arg: "7", name: "h1" },
  ];
  return (
    <S.ToolbarWrapper>
      {editButtonArgumentList.map((editButtonArgument) => (
        <EditButton {...editButtonArgument} />
      ))}
    </S.ToolbarWrapper>
  );
}
