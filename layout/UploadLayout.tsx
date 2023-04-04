import Header from "@/components/common/Header";
import { ReactNode } from "react";
import * as S from "./UploadLayout.style";

interface UploadLayoutProps {
  app: ReactNode;
}

function Frame({ app }: UploadLayoutProps) {
  return <S.UploadLayout id="upload-view">{app}</S.UploadLayout>;
}

export default function UploadLayout(props: UploadLayoutProps) {
  return (
    <>
      <Header />
      <Frame {...props} />
    </>
  );
}
