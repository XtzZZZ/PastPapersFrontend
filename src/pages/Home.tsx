import React, {ChangeEvent, useState} from 'react'
import '../styles/Home.scss'
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

        // if (!pdf1 || !pdf2) {
        //     return;
        // }
        console.log("rrr")
        try {
            // const data = new FormData();
            // data.append('file1', pdf1);
            // data.append('file2', pdf2);

            setFeedback(String.raw`### Question 1(a) $$$ **Conversion of 113.75 to binary 1110001.11**: Not explicitly shown in your answer. $$$ **Exponent for normalisation 7 converted to binary 111**: Correctly shown as 000111. $$$ **System 1 answer**: Correctly shown as Mantissa: 0111000111, Exponent: 000111. $$$ **System 2 answer showing correct version from system 1**: Correctly shown as Mantissa: 01110001, Exponent: 00000111. @@@ **Marks for 1(a):** 3/4 ### Question 1(b) $$$ **The mantissa in system 2 does not have enough bits to store the whole binary number**: Correctly mentioned. $$$ **So precision is lost / the number is truncated**: Correctly mentioned. @@@ **Marks for 1(b):** 2/2 ### Question 2(a) $$$ **Supervised learning**: Correctly matched to "enables learning by mapping an input..." $$$ **Reinforcement learning**: Correctly matched to "enables learning in an interactive..." $$$ **Deep learning**: Correctly matched to "simulates the data processing..." $$$ **Unsupervised learning**: Correctly matched to "enables learning by allowing the process..." @@@ **Marks for 2(a):** 4/4 ### Question 2(b) $$$ **To find the optimal/shortest/most cost-effective route between two nodes**: Correctly mentioned "shortest path between two nodes." $$$ **Based on distance/cost/time**: Not explicitly mentioned. @@@ **Marks for 2(b):** 1/2 ### Question 3(a) $$$ **Hash values for record keys**: Correctly shown as 1030 - 1, 1050 - 0, 1025 - 2. @@@ **Marks for 3(a):** 2/2 ### Question 3(b) $$$ **A collision occurs when the record key doesn’t match the stored record key**: Correctly mentioned. $$$ **Search the file linearly to find the next available storage space (closed hash)**: Correctly mentioned. @@@ **Marks for 3(b):** 2/4 ### Question 4(a) $$$ **TYPE Prime = (2, 3, 5, 7, 11, 13, 17, 19)**: Correctly shown. @@@ **Marks for 4(a):** 2/2 ### Question 4(b) $$$ **TYPE TDayPointer = ^DayOfWeek**: Correctly shown. @@@ **Marks for 4(b):** 2/2 ### Question 5(a) $$$ **Circuit switching is used where a dedicated path needs to be sustained throughout the call / communication**: Mentioned real-time communication, but not explicitly about a dedicated path. @@@ **Marks for 5(a):** 1/2 ### Question 5(b) $$$ **Data packets can’t get lost**: Correctly mentioned. $$$ **Whole bandwidth is available**: Correctly mentioned. $$$ **No alternative route in case of failure**: Correctly mentioned. $$$ **Data packets may not come in the same order they were sent**: Mentioned but not applicable to circuit switching. @@@ **Marks for 5(b):** 3/4 ### Question 6(a) $$$ **Valid - 4 letters followed by multiple digits followed by a symbol**: Correctly mentioned. $$$ **Invalid - The symbol comes before the digits**: Correctly mentioned. $$$ **Valid - 3 letters followed by 3 digits followed by a symbol**: Correctly mentioned. @@@ **Marks for 6(a):** 3/3 ### Question 6(b) $$$ **<symbol> ::= $ | % | & | @ | #**: Correctly shown. $$$ **<letter> ::= A | D | I | P | R | Y**: Correctly shown. @@@ **Marks for 6(b):** 1/1 ### Question 6(c) $$$ **Begins with a letter**: Correctly shown. $$$ **Letter can repeat and digit present**: Correctly shown. $$$ **Digit can repeat or can be bypassed**: Correctly shown. $$$ **Correct structure – name, boxes and arrows (in and out)**: Correctly shown. @@@ **Marks for 6(c):** 4/4 ### Question 7(a) $$$ **Two marks if no errors present**: No errors present in the Karnaugh map. @@@ **Marks for 7(a):** 2/2 ### Question 7(b) $$$ **One mark for each correct loop**: Two correct loops shown. @@@ **Marks for 7(b):** 2/2 ### Question 7(c) $$$ **Any correct Boolean term**: Correctly shown as \\( \\overline{A}C + B\\overline{C} \\). @@@ **Marks for 7(c):** 2/2 ### Question 7(d) $$$ **One mark for simplest form**: Correctly shown as \\( \\overline{C}(A + B) \\). @@@ **Marks for 7(d):** 1/1 ### Question 8 $$$ **A large number of computers connected together**: Correctly mentioned. $$$ **Simultaneously perform a set of coordinated computations**: Correctly mentioned. @@@ **Marks for 8:** 2/3 ### Question 9(a) $$$ **To provide better security by using a public and a private key**: Correctly mentioned. @@@ **Marks for 9(a):** 2/2 ### Question 9(b) $$$ **Virtually unhackable**: Correctly mentioned. $$$ **Longer keys can be used**: Correctly mentioned. $$$ **Expensive to set up and maintain**: Correctly mentioned. $$$ **Allows criminals to hide their communications**: Correctly mentioned. @@@ **Marks for 9(b):** 4/4 ### Question 10 $$$ **OPENFILE "ActiveFile.txt" FOR READ**: Correctly mentioned. $$$ **EOF("ActiveFile.txt")**: Correctly mentioned. $$$ **"Account not present"**: Correctly mentioned. $$$ **Account**: Correctly mentioned. $$$ **CLOSEFILE "ActiveFile.txt"**: Correctly mentioned. @@@ **Marks for 10:** 5/5 ### Question 11(a) $$$ **CONSTANT MaxSize = 60**: Correctly shown. $$$ **DECLARE Queue : ARRAY[1:60] OF STRING**: Correctly shown. $$$ **DECLARE FrontPointer, RearPointer, Length : INTEGER**: Correctly shown. @@@ **Marks for 11(a):** 3/3 ### Question 11(b) $$$ **IF Length**: Correctly shown. $$$ **Queue[FrontPointer]**: Correctly shown. $$$ **Length = Length - 1**: Correctly shown. $$$ **FrontPointer = 1**: Correctly shown. @@@ **Marks for 11(b):** 4/4 ### Question 11(c) $$$ **Stack 1 operates as the queue with the newest elements at the bottom**: Correctly mentioned. $$$ **To add an element, pop all the elements from stack 1 and push them onto stack 2**: Correctly mentioned. $$$ **Push the new item onto stack 1**: Correctly mentioned. $$$ **Pop all the elements from stack 2 back onto stack 1**: Correctly mentioned. @@@ **Marks for 11(c):** 4/4 ### Question 12(a) $$$ **A process using a function or procedure defined in terms of itself**: Correctly mentioned. $$$ **A recursive process must have a base case and a general case**: Correctly mentioned. @@@ **Marks for 12(a):** 2/2 ### Question 12(b) $$$ **Call number column correct**: Correctly shown. $$$ **Function call and Number columns correct**: Correctly shown. $$$ **Result column down to base case (Winding) rows 1–6 correct**: Correctly shown. $$$ **Result column down from base case (Unwinding) rows 7–10 correct**: Correctly shown. $$$ **Return value column correct**: Correctly shown. @@@ **Marks for 12(b):** 5/5 --- **Overall Comments:** You have done an excellent job on most parts of the paper. Pay attention to explicitly mentioning all required details, especially when multiple points are needed for full marks.`)

            // const response = await fetch('http://localhost:8000/api/upload/', {
            //     method: 'POST',
            //     body: data
            // })
            // if (response.status === 200) {
            //     const result = await response.json();
            //     setFeedback(result.grading);
            //
            //
            // } else {
            //     console.log("error");
            //     alert("error");
            // }
        } catch(err) {
            console.log(err);
            alert("error2");
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="kkk">
                <label>Upload PDFs:</label>
                <div className="input-container">
                    <div className="upload-ctr">
                        <span className="purpose-span">Mark scheme</span>
                        <input type="file" accept="application/pdf" onChange={(e) => handleChange(e, 1)}/>
                    </div>
                    <div className="upload-ctr">
                        <span className="purpose-span">Student's answers</span>
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
