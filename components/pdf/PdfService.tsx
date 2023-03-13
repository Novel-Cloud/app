import { LegacyRef, ReactNode, useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import styled from "styled-components";
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

  return (
    <PDFServiceWrapper>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="a4"
        fileName="소설"
        author="소설 작가"
        date={new Date()}
        title="소설"
      >
        {children}
      </PDFExport>
      <Button onClick={exportPDF} style={{ marginRight: "0.5rem" }}>
        Export to pdf
      </Button>
    </PDFServiceWrapper>
  );
}
