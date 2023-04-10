import Header from "@/components/common/Header";
import { ReactNode } from "react";
import styled from "styled-components";

interface EditorEditLayoutProps {
  app: ReactNode;
  input: ReactNode;
}

export default function EditorEditLayout({
  app,
  input,
}: EditorEditLayoutProps) {
  return (
    <>
      <Header />
      <EditorEditLayoutWrapper>
        {app} {input}
      </EditorEditLayoutWrapper>
    </>
  );
}

const EditorEditLayoutWrapper = styled.div`
  padding: 12px;
`;
