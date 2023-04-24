import AlignCenterIcon from "@/components/icons/editor/AlignCenterIcon";
import AlignLeftIcon from "@/components/icons/editor/AlignLeftIcon";
import AlignRightIcon from "@/components/icons/editor/AlignRightIcon";
import BoldIcon from "@/components/icons/editor/BoldIcon";
import H1Icon from "@/components/icons/editor/H1Icon";
import H2Icon from "@/components/icons/editor/H2Icon";
import H3Icon from "@/components/icons/editor/H3Icon";
import H4Icon from "@/components/icons/editor/H4Icon";
import H5Icon from "@/components/icons/editor/H5Icon";
import H6Icon from "@/components/icons/editor/H6Icon";
import HrIcon from "@/components/icons/editor/HrIcon";
import ItalicIcon from "@/components/icons/editor/ItalicIcon";
import OrderedListIcon from "@/components/icons/editor/OrderedListIcon";
import ParagraphIcon from "@/components/icons/editor/ParagraphIcon";
import UnOrderedListIcon from "@/components/icons/editor/UnOrderedListIcon";
import type { EditButtonArgument } from "@/types/editor.interface";

export const editButtonArgumentList: EditButtonArgument[] = [
  { id: 0, cmd: "justifyCenter", icon: <AlignCenterIcon /> },
  { id: 1, cmd: "justifyLeft", icon: <AlignLeftIcon /> },
  { id: 2, cmd: "justifyRight", icon: <AlignRightIcon /> },
  { id: 3, cmd: "insertParagraph", icon: <ParagraphIcon /> },
  { id: 4, cmd: "insertUnorderedList", icon: <UnOrderedListIcon /> },
  { id: 5, cmd: "insertOrderedList", icon: <OrderedListIcon /> },
  { id: 6, cmd: "insertHorizontalRule", icon: <HrIcon /> },
  { id: 7, cmd: "italic", arg: "i", icon: <ItalicIcon /> },
  { id: 8, cmd: "bold", arg: "b", icon: <BoldIcon /> },
  { id: 10, cmd: "fontSize", arg: "7", icon: <H1Icon /> },
  { id: 11, cmd: "fontSize", arg: "6", icon: <H2Icon /> },
  { id: 12, cmd: "fontSize", arg: "5", icon: <H3Icon /> },
  { id: 13, cmd: "fontSize", arg: "3", icon: <H4Icon /> },
  { id: 14, cmd: "fontSize", arg: "2", icon: <H5Icon /> },
  { id: 15, cmd: "fontSize", arg: "1", icon: <H6Icon /> },
];
