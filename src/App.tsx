import React, { useState } from 'react'
import './App.css'

const App = () => {
    // States to hold the three PDF files
    const [pdfFile1, setPdfFile1] = useState<File | null>(null);
    const [pdfFile2, setPdfFile2] = useState<File | null>(null);
    const [pdfFile3, setPdfFile3] = useState<File | null>(null);

    // Handle file change for each form
    const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPdfFile1(event.target.files ? event.target.files[0] : null);
    };

    const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPdfFile2(event.target.files ? event.target.files[0] : null);
    };

    const handleFileChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPdfFile3(event.target.files ? event.target.files[0] : null);
    };

    // Submit handler to send the file to the backend using fetch
    const handleSubmit = async (event: React.FormEvent, file: File | null, fileNumber: number) => {
        event.preventDefault();

        if (!file) {
            alert(`Please select a file for PDF ${fileNumber}`);
            return;
        }

        // Prepare FormData to send the file
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/api/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                alert(`File ${fileNumber} uploaded: ${result.message}`);
            } else {
                alert(`Error uploading file ${fileNumber}`);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file zzz');
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, pdfFile1, 1)}>
                <label>Upload PDF 1:</label>
                <input type="file" accept="application/pdf" onChange={handleFileChange1} />
                <button type="submit">Submit PDF 1</button>
            </form>

            <form onSubmit={(e) => handleSubmit(e, pdfFile2, 2)}>
                <label>Upload PDF 2:</label>
                <input type="file" accept="application/pdf" onChange={handleFileChange2} />
                <button type="submit">Submit PDF 2</button>
            </form>

            <form onSubmit={(e) => handleSubmit(e, pdfFile3, 3)}>
                <label>Upload PDF 3:</label>
                <input type="file" accept="application/pdf" onChange={handleFileChange3} />
                <button type="submit">Submit PDF 3</button>
            </form>
        </div>
    );
};

export default App;
