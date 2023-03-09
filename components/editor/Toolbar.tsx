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

export default function ToolbarView() {
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
    { cmd: "fontSize", arg: "1", icon: <H5Icon /> },
    { cmd: "fontSize", arg: "3", icon: <H4Icon /> },
    { cmd: "fontSize", arg: "5", icon: <H3Icon /> },
    { cmd: "fontSize", arg: "6", icon: <H2Icon /> },
    { cmd: "fontSize", arg: "7", icon: <H1Icon /> },
  ];
  return (
    <S.ToolbarWrapper>
      <S.Toolbar>
        {editButtonArgumentList.map((editButtonArgument, idx) => (
          <ToolbarButtonView key={idx} {...editButtonArgument} />
        ))}
      </S.Toolbar>
      <S.Toolbar>
        <ToolbarButtonView
          {...{
            cmd: "insertText",
            arg: "엄준식",
            icon: <ShortCutIcon />,
          }}
        />
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
