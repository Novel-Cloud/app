import React, { LegacyRef, ReactNode } from "react";
import styled from "styled-components";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "../atoms/Button";

const PDFServiceWrapper = styled.div`
  padding: 20px;
  * {
    font-family: "Pretendard-Variable" !important;
  }
  @font-face {
    font-family: "Pretendard-Variable";
    src: url("/assets/font/PretendardVariable.ttf") format("truetype");
  }
`;

export default function PDFService({ children }: { children: ReactNode }) {
  const pdfExportComponent: LegacyRef<PDFExport> = React.useRef(null);
  const exportPDFWithMethod = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <PDFServiceWrapper>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="a4"
        fileName="이현준을 향한 나의 사랑"
        author="엄준식"
        date={new Date()}
        title="엄준식의 모험"
      >
        <div id="pdf">{children}</div>
      </PDFExport>
      <Button onClick={exportPDFWithMethod}>Export to pdf</Button>
    </PDFServiceWrapper>
  );
}
