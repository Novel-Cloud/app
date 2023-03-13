import React, { LegacyRef, ReactNode } from "react";
import styled from "styled-components";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "../atoms/Button";

const PDFServiceWrapper = styled.div`
  font-family: Pretendard-Regular;
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
      <Button onClick={exportPDFWithMethod}>Export with method</Button>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="a4"
        fileName={`Report for ${new Date().getFullYear()}`}
        author="KendoReact Team"
      >
        <div id="show_math_loader" style={{ display: "none" }}>
          Parsing Mathjax
        </div>
        <div id="print_page">{children}</div>
      </PDFExport>
    </PDFServiceWrapper>
  );
}
