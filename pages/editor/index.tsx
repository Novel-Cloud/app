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
import { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import { useMemo } from "react";
import { HotkeysProvider, useHotkeys } from "react-hotkeys-hook";

export default function EditorPage() {
  const keymapList = useMemo(
    () => [
      "ctrl+1",
      "ctrl+2",
      "ctrl+3",
      "ctrl+4",
      "ctrl+5",
      "ctrl+6",
      "ctrl+7",
      "ctrl+8",
      "ctrl+9",
    ],
    [],
  );

  const shortCutList: ShortCut[] = new Array(9)
    .fill(null)
    .map((_, idx) => ({ content: `${idx + 1}번 클릭`, id: idx }));

  const getCommand = (number: number) => {
    if (number !== -1) {
      document.execCommand(
        "insertText",
        false,
        shortCutList[number - 1].content,
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
