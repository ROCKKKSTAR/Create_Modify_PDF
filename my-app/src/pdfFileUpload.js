import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {selectedFile && <embed src={URL.createObjectURL(selectedFile)} width="100%" height="500" />}
    </div>
  );
}

export default FileUpload;
