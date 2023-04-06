import { useEffect, useState } from "react";
import { useShortCutList } from "@/model/editor";
import { useQueryClient } from "@tanstack/react-query";
import { ShortCut } from "@/types/editor.interface";
import httpClient from "@/apis";
import KEY from "@/key";
import DragDropView from "./DragDropView";

export default function EditorEditApp() {
  const queryClient = useQueryClient();
  const { data: shortCutList, isError } = useShortCutList();
  const [myShortCutList, setMyShortCutList] = useState<ShortCut[]>([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (!isError) setMyShortCutList(shortCutList);
  }, [isError, setMyShortCutList, shortCutList]);

  useEffect(() => {
    if (isChanged) {
      const shortcutIdList = myShortCutList.map(
        (myShortCut) => myShortCut.shortcutId,
      );
      httpClient.shortcut.sequence({ shortcutIdList }).then(() => {
        queryClient.invalidateQueries([KEY.SHORTCUTLIST]);
      });
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
