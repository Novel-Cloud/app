import EditorView from "@/components/editor/Editor";
import ToolbarView from "@/components/editor/Toolbar";
import { editButtonArgumentList } from "@/fixture/property";
import { editorHotkeyRange } from "@/key/editor.index";
import EditorLayout from "@/layout/EditorLayout";
import { useShortCutList } from "@/model/editor";
import { ShortCut } from "@/types/editor.interface";
import { useEffect, useMemo, useState } from "react";
import { HotkeysProvider, useHotkeys } from "react-hotkeys-hook";

export default function EditorPage() {
  const { data: shortCutList, isError } = useShortCutList();
  const [myShortCutList, setMyShortCutList] =
    useState<ShortCut[]>(shortCutList);

  useEffect(() => {
    if (!isError) setMyShortCutList(shortCutList);
  }, [isError, shortCutList]);

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
        myShortCutList[number - 1]?.content || "",
      );
    }
  };

  useHotkeys(
    keymapList,
    (_, handler) => {
      const command = handler.ctrl || false;
      const number = Number(handler.keys?.join("")) || -1;
      if (command) {
        getCommand(number);
      }
    },
    {
      scopes: editorHotkeyRange,
    },
  );

  return (
    <HotkeysProvider initiallyActiveScopes={editorHotkeyRange}>
      <EditorLayout
        editor={<EditorView getCommand={getCommand} />}
        toolbar={
          <ToolbarView
            shortCutList={myShortCutList}
            setShortCutList={setMyShortCutList}
            editButtonArgumentList={editButtonArgumentList}
          />
        }
      />
    </HotkeysProvider>
  );
}
