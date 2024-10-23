import React, {ChangeEvent, useState} from 'react'
import '../styles/Home.css'

const Home = () => {
    const [pdf1, setPdf1] = useState<File | null>(null)
    const [pdf2, setPdf2] = useState<File | null>(null)
    const [pdf3, setPdf3] = useState<File | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        console.log(index);
        if (index === 1) {
            setPdf1(e.target.files ? e.target.files[0] : null)
        } else if (index === 2) {
            setPdf2(e.target.files ? e.target.files[0] : null)
        } else if (index === 3) {
            setPdf3(e.target.files ? e.target.files[0] : null)
        }
    }

    const handleSubmit = async (e: React.FormEvent)=> {

        e.preventDefault()

        if (!pdf1 || !pdf2 || !pdf3) {
            return;
        }
        console.log("rrr")
        try {
            const data = new FormData();
            data.append('file1', pdf1);
            data.append('file2', pdf2);
            data.append('file3', pdf3);
            const response = await fetch('http://localhost:8000/api/upload/', {
                method: 'POST',
                body: data
            })
            if (response.status === 200) {
                console.log("ok")
                alert("ok")
            } else {
                console.log("error")
                alert("error")
            }
        } catch(err) {
            console.log(err)
            alert("error2")
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="kkk">
                <label>Upload PDFs:</label>
                <div className="input-container">
                    <div className="upload-ctr">
                        <span className="purpose-span">Question paper</span>
                        <input type="file" accept="application/pdf" onChange={(e) => handleChange(e, 1)}/>
                    </div>
                    <div className="upload-ctr">
                        <span className="purpose-span">Mark scheme</span>
                        <input type="file" accept="application/pdf" onChange={(e) => handleChange(e, 2)}/>
                    </div>
                    <div className="upload-ctr">
                        <span className="purpose-span">Student's answers</span>
                        <input type="file" accept="application/pdf" onChange={(e) => handleChange(e, 3)}/>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Home;
