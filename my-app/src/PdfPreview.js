import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

function PdfEditor() {
  const [pdfDoc, setPdfDoc] = useState(null);

  const loadPdf = async () => {
    try {
        const existingPdfBytes = "https://www.africau.edu/images/default/sample.pdf"; // Replace with your PDF file bytes or URL
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        setPdfDoc(pdfDoc);
      } catch (error) {
        console.error('Error loading the PDF:', error);
        // Provide feedback to the user
      }
  };

  const addPage = async () => {
    if (pdfDoc) {
      const [width, height] = [400, 400]; // Set your desired page size
      const page = pdfDoc.addPage([width, height]);
      page.drawText('New Page', {
        x: 50,
        y: 50,
        size: 30,
        color: rgb(0, 0, 0),
      });
      // Add your desired content to the new page
    }
  };

  const removePage = (pageIndex) => {
    if (pdfDoc && pageIndex >= 0 && pageIndex < pdfDoc.getPageCount()) {
      pdfDoc.removePage(pageIndex);
    }
  };

  const createNewPdf = async () => {
    if (pdfDoc) {
      const modifiedPdfBytes = await pdfDoc.save();
      // Send modifiedPdfBytes to your server or save it as a new PDF
    }
  };

  return (
    <div>
      <button onClick={loadPdf}>Load PDF</button>
      <button onClick={addPage}>Add Page</button>
      <button onClick={() => removePage(0)}>Remove Page</button>
      <button onClick={createNewPdf}>Create New PDF</button>
    </div>
  );
}

export default PdfEditor;
