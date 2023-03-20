import EditorView from "@/components/editor/Editor";
import ToolbarView from "@/components/editor/Toolbar";
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
import ImageIcon from "@/components/icons/editor/ImageIcon";
import ItalicIcon from "@/components/icons/editor/ItalicIcon";
import OrderedListIcon from "@/components/icons/editor/OrderedListIcon";
import ParagraphIcon from "@/components/icons/editor/ParagraphIcon";
import UnOrderedListIcon from "@/components/icons/editor/UnOrderedListIcon";
import { editorHotkeyRange } from "@/key/editor.index";
import EditorLayout from "@/layout/EditorLayout";
import { useShortCutList } from "@/model/editor";
import { EditButtonArgument } from "@/types/editor.interface";
import { useMemo } from "react";
import { HotkeysProvider, useHotkeys } from "react-hotkeys-hook";

export default function EditorPage() {
  const { data: shortCutList } = useShortCutList();
  const keymapList = useMemo(
    () =>
      new Array(shortCutList.length).fill(null).map((_, idx) => `ctrl+${idx}`),
    [shortCutList],
  );

  const getCommand = (number: number) => {
    if (number !== -1) {
      document.execCommand(
        "insertText",
        false,
        shortCutList[number - 1]?.content || "",
      );
    }
  };

  useHotkeys(
    keymapList,
    (_, handler) => {
      const command = handler.ctrl || false;
      const number = Number(handler.keys?.join("")) || -1;
      if (command) getCommand(number);
    },
    {
      scopes: editorHotkeyRange,
    },
  );

  const editButtonArgumentList: EditButtonArgument[] = [
    { id: 0, cmd: "justifyCenter", icon: <AlignCenterIcon /> },
    { id: 1, cmd: "justifyLeft", icon: <AlignLeftIcon /> },
    { id: 2, cmd: "justifyRight", icon: <AlignRightIcon /> },
    { id: 3, cmd: "insertParagraph", icon: <ParagraphIcon /> },
    { id: 4, cmd: "insertUnorderedList", icon: <UnOrderedListIcon /> },
    { id: 5, cmd: "insertOrderedList", icon: <OrderedListIcon /> },
    { id: 6, cmd: "insertHorizontalRule", icon: <HrIcon /> },
    { id: 7, cmd: "italic", arg: "i", icon: <ItalicIcon /> },
    { id: 8, cmd: "bold", arg: "b", icon: <BoldIcon /> },
    {
      id: 9,
      cmd: "insertImage",
      arg: "https://placekitten.com/200/300",
      icon: <ImageIcon />,
    },
    { id: 10, cmd: "fontSize", arg: "7", icon: <H1Icon /> },
    { id: 11, cmd: "fontSize", arg: "6", icon: <H2Icon /> },
    { id: 12, cmd: "fontSize", arg: "5", icon: <H3Icon /> },
    { id: 13, cmd: "fontSize", arg: "3", icon: <H4Icon /> },
    { id: 14, cmd: "fontSize", arg: "2", icon: <H5Icon /> },
    { id: 15, cmd: "fontSize", arg: "1", icon: <H6Icon /> },
  ];

  return (
    <HotkeysProvider initiallyActiveScopes={editorHotkeyRange}>
      <EditorLayout
        editor={<EditorView getCommand={getCommand} />}
        toolbar={
          <ToolbarView
            shortCutList={shortCutList}
            editButtonArgumentList={editButtonArgumentList}
          />
        }
      />
    </HotkeysProvider>
  );
}
