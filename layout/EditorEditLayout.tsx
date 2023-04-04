import Header from "@/components/common/Header";
import { ReactNode } from "react";
import styled from "styled-components";

interface EditorEditLayoutProps {
  app: ReactNode;
}

export default function EditorEditLayout({ app }: EditorEditLayoutProps) {
  return (
    <>
      <Header />
      <EditorEditLayoutWrapper>{app}</EditorEditLayoutWrapper>
    </>
  );
}

const EditorEditLayoutWrapper = styled.div``;
