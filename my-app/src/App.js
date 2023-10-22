import React from 'react';
import './App.css';
import FileUpload from './pdfFileUpload';
import PdfEditor from './PdfEditor';
import PdfPreview from './PdfEditor';

function App() {
  return (
    <div className="App">
      <h1>PDF File Upload and Preview</h1>
      <FileUpload />
      <PdfEditor />
      <PdfPreview />
    </div>
  );
}

export default App;
