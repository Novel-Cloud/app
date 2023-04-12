import { ShortCut } from "@/types/editor.interface";
import { deepcopy, reorder } from "@/utils/array";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import XIcon from "@/components/icons/common/XIcon";
import styled from "styled-components";
import httpClient from "@/apis";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import KEY from "@/key";
import ShortCutButton from "../ShortCutButton";
import * as S from "../Toolbar.style";

interface ToolbarViewProps {
  shortCutList: ShortCut[];
  setShortCutList: Dispatch<SetStateAction<ShortCut[]>>;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}

export default function DragDropView({
  shortCutList,
  setShortCutList,
  setIsChanged,
}: ToolbarViewProps) {
  const queryClient = useQueryClient();
  const [isEnabled, setIsEnabled] = useState(false);

  const removeShortCut = (shortcutId: number) => {
    httpClient.shortcut.delete({ data: { shortcutId } }).then(() => {
      toast.success("삭제가 완료되었습니다.");
      queryClient.invalidateQueries([KEY.SHORTCUTLIST]);
    });
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    const copyedShortCutList = deepcopy<ShortCut[]>(shortCutList);
    setShortCutList(
      reorder<ShortCut>(copyedShortCutList, source.index, destination.index),
    );
    setIsChanged(true);
  };

  useEffect(() => {
    const animation = requestAnimationFrame(() => setIsEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setIsEnabled(false);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="shortcut" direction="horizontal">
        {(droppableProvided) => (
          <S.Toolbar
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {shortCutList.map(({ content, shortcutId }, idx) => (
              <ShortCutButton
                key={idx}
                idx={idx}
                id={shortcutId?.toString() || ""}
              >
                {content}
                <XIconWrapper onClick={() => removeShortCut(shortcutId)}>
                  <XIcon />
                </XIconWrapper>
              </ShortCutButton>
            ))}
            {droppableProvided.placeholder}
          </S.Toolbar>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const XIconWrapper = styled.div`
  z-index: 999;
  cursor: pointer;
  svg {
    width: 12px;
    height: 12px;
  }
`;
