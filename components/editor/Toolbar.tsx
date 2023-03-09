import { useRecoilValue } from "recoil";
import { useHotkeys } from "react-hotkeys-hook";
import { editorHotkeyState } from "@/context";
import AlignCenterIcon from "../icons/editor/AlignCenterIcon";
import AlignLeftIcon from "../icons/editor/AlignLeftIcon";
import AlignRightIcon from "../icons/editor/AlignRightIcon";
import ParagraphIcon from "../icons/editor/ParagraphIcon";
import ToolbarButtonView from "./ToolbarButton";
import * as S from "./Toolbar.style";
import UnOrderedListIcon from "../icons/editor/UnOrderedListIcon";
import OrderedListIcon from "../icons/editor/OrderedListIcon";
import ShortCutIcon from "../icons/editor/ShortCutIcon";
import HrIcon from "../icons/editor/HrIcon";
import ItalicIcon from "../icons/editor/ItalicIcon";
import BoldIcon from "../icons/editor/BoldIcon";
import ImageIcon from "../icons/editor/ImageIcon";
import H5Icon from "../icons/editor/H5Icon";
import H4Icon from "../icons/editor/H4Icon";
import H3Icon from "../icons/editor/H3Icon";
import H2Icon from "../icons/editor/H2Icon";
import H1Icon from "../icons/editor/H1Icon";
import ShortCutButton from "./ShortCutButton";
import H6Icon from "../icons/editor/H6Icon";

export default function ToolbarView() {
  const editorHotkey = useRecoilValue(editorHotkeyState);

  const editButtonArgumentList = [
    { cmd: "justifyCenter", icon: <AlignCenterIcon /> },
    { cmd: "justifyLeft", icon: <AlignLeftIcon /> },
    { cmd: "justifyRight", icon: <AlignRightIcon /> },
    { cmd: "insertParagraph", icon: <ParagraphIcon /> },
    { cmd: "insertUnorderedList", icon: <UnOrderedListIcon /> },
    { cmd: "insertOrderedList", icon: <OrderedListIcon /> },
    { cmd: "insertHorizontalRule", icon: <HrIcon /> },
    { cmd: "italic", arg: "i", icon: <ItalicIcon /> },
    { cmd: "bold", arg: "b", icon: <BoldIcon /> },
    {
      cmd: "insertImage",
      arg: "https://placekitten.com/200/300",
      icon: <ImageIcon />,
    },
    { cmd: "fontSize", arg: "7", icon: <H1Icon /> },
    { cmd: "fontSize", arg: "6", icon: <H2Icon /> },
    { cmd: "fontSize", arg: "5", icon: <H3Icon /> },
    { cmd: "fontSize", arg: "3", icon: <H4Icon /> },
    { cmd: "fontSize", arg: "2", icon: <H5Icon /> },
    { cmd: "fontSize", arg: "1", icon: <H6Icon /> },
  ];
  const shortCutList = new Array(9)
    .fill(null)
    .map((data, idx) => ({ content: `${idx + 1}번 클릭`, id: idx }));

  const getCommand = (command: boolean, number: number) => {
    if (command && number) {
      document.execCommand(
        "insertText",
        false,
        shortCutList[number - 1].content,
      );
      return number - 1;
    }
    return false;
  };

  useHotkeys(
    "ctrl+1, ctrl+2, ctrl+3, ctrl+4, ctrl+5, ctrl+6, ctrl+7, ctrl+8, ctrl+9",
    (_, handler) => {
      const command = handler.ctrl || false;
      const number = handler.keys?.join("") || 0;
      getCommand(command, Number(number));
    },
    {
      scopes: editorHotkey,
    },
  );

  return (
    <S.ToolbarWrapper>
      <S.Toolbar>
        {editButtonArgumentList.map((editButtonArgument, idx) => (
          <ToolbarButtonView key={idx} {...editButtonArgument} />
        ))}
      </S.Toolbar>
      <S.Toolbar>
        <S.ShortCutIconWrapper>
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <S.Toolbar style={{ marginTop: "20px", paddingBottom: "20px" }}>
          {shortCutList.map(({ content, id }) => (
            <ShortCutButton
              key={id}
              onMouseDown={(event) => {
                event.preventDefault();
                document.execCommand("insertText", false, content);
              }}
            >
              {content}
            </ShortCutButton>
          ))}
        </S.Toolbar>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
