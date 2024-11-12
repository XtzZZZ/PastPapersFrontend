import React, {ChangeEvent, useState} from 'react'
import styles from '@styles/pages/Home.module.scss'
import Evaluations from "../components/Evaluations.tsx";

const Home = () => {
    const [pdf1, setPdf1] = useState<File | null>(null);
    const [pdf2, setPdf2] = useState<File | null>(null);
    const [feedback, setFeedback] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        console.log(index);
        if (index === 1) {
            setPdf1(e.target.files ? e.target.files[0] : null)
        } else if (index === 2) {
            setPdf2(e.target.files ? e.target.files[0] : null)
        }
    }

    const handleSubmit = async (e: React.FormEvent)=> {

        e.preventDefault()

        if (!pdf1 || !pdf2) {
            return;
        }
        console.log("rrr")
        try {
            const data = new FormData();
            data.append('file1', pdf1);
            data.append('file2', pdf2);


            const response = await fetch('http://localhost:8000/api/upload/', {
                method: 'POST',
                body: data
            })
            if (response.status === 200) {
                const result = await response.json();
                setFeedback(result.grading);


            } else {
                console.log("error");
                alert("error");
            }
        } catch(err) {
            console.log(err);
            alert("error2");
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="kkk">
                <label>Upload PDFs:</label>
                <div className={styles.input_ctr}>
                    <div className={styles.upload_ctr}>
                        <span className={styles.purpose_span}>Mark scheme</span>
                        <input type="file" accept="application/pdf" onChange={(e) => handleChange(e, 1)}/>
                    </div>
                    <div className={styles.upload_ctr}>
                        <span className={styles.purpose_span}>Student's answers</span>
                        <input type="file" accept="application/pdf" onChange={(e) => handleChange(e, 2)}/>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            {feedback.length > 0 && (
                <Evaluations feedback={feedback} />
            )}
        </div>
    )
};

export default Home;
