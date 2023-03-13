import React, { LegacyRef, ReactNode, useRef } from "react";
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
  const pdfExportComponent: LegacyRef<PDFExport> = useRef(null);

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const exportImage = async () => {
    const { exportComponentAsPNG } = await import(
      "react-component-export-image"
    );
    return exportComponentAsPNG(pdfExportComponent);
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
        <div>{children}</div>
      </PDFExport>
      <Button onClick={exportPDF} style={{ marginRight: "0.5rem" }}>
        Export to pdf
      </Button>
      <Button onClick={exportImage}>Export to Image</Button>
    </PDFServiceWrapper>
  );
}
