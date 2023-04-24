import type { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import httpClient from "@/apis";
import styled from "styled-components";
import theme from "@/styles/theme";
import ToolbarButtonView from "./ToolbarButton";
import * as S from "./Toolbar.style";
import ShortCutIcon from "../icons/editor/ShortCutIcon";
import ImageIcon from "../icons/editor/ImageIcon";

interface ToolbarViewProps {
  editButtonArgumentList: EditButtonArgument[];
  shortCutList: ShortCut[];
  setShortCutList: Dispatch<SetStateAction<ShortCut[]>>;
}

export default function ToolbarView({
  editButtonArgumentList,
  shortCutList,
}: ToolbarViewProps) {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);

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

  const handleFileUploadPromise = (editorUploadFormData: FormData) => {
    return httpClient.file.upload(editorUploadFormData).then((r) => {
      document.getElementById("editor")?.focus();
      document.execCommand("insertImage", false, r.data);
    });
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const editorUploadFormData = new FormData();
    if (event.target.files) {
      toast.promise(handleFileUploadPromise(editorUploadFormData), {
        pending: "이미지 업로드 중..",
        success: "이미지 업로드 완료",
        error: "이미지 업로드 실패",
      });
      editorUploadFormData.append("image", event.target.files[0]);
    }
  };

  return (
    <S.ToolbarWrapper>
      <S.Toolbar>
        {editButtonArgumentList.map((editButtonArgument, idx) => (
          <ToolbarButtonView key={idx} {...editButtonArgument} />
        ))}
        <ToolbarInput
          type="file"
          id="editor-image-upload"
          onChange={handleFileUpload}
        />
        <ToolbarLabel htmlFor="editor-image-upload">
          <ImageIcon />
        </ToolbarLabel>
      </S.Toolbar>
      <S.Toolbar style={{ padding: "1.25rem 0" }}>
        <S.ShortCutIconWrapper onClick={() => router.push("/editor/edit")}>
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <S.Toolbar>
          {shortCutList.map(({ content }, idx) => (
            <ToolbarButton
              key={idx}
              onMouseDown={(event) => {
                event.preventDefault();
                document.execCommand("insertText", false, content);
              }}
            >
              {content}
            </ToolbarButton>
          ))}
        </S.Toolbar>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}

const ToolbarButton = styled.div`
  white-space: nowrap;
  background-color: ${theme.secondary};
  padding: 6px 12px;
  border-radius: 0.625rem;
`;

const ToolbarInput = styled.input`
  display: none;
`;
const ToolbarLabel = styled.label`
  svg {
    width: 32px;
    height: 32px;
  }
`;
