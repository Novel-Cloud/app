import { useEffect, useState } from "react";
import { useShortCutList } from "@/model/editor";
import { ShortCut } from "@/types/editor.interface";
import httpClient from "@/apis";
import DragDropView from "./DragDropView";

export default function EditorEditApp() {
  const { data: shortCutList, isError } = useShortCutList();
  const [myShortCutList, setMyShortCutList] = useState<ShortCut[]>([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (!isError) setMyShortCutList(shortCutList);
  }, [isError, setMyShortCutList, shortCutList]);

  useEffect(() => {
    if (isChanged) {
      const shortcutIdList = myShortCutList.map((myShortCut) => myShortCut.id);
      httpClient.shortcut.sequence({ shortcutIdList });
    }
  }, [isChanged, myShortCutList]);

  return (
    <DragDropView
      shortCutList={myShortCutList}
      setShortCutList={setMyShortCutList}
      setIsChanged={setIsChanged}
    />
  );
}
