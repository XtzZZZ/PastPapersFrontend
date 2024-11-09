import QuestionEvaluation from "./QuestionEvaluation.tsx";
import styles from "@styles/components/Evaluations.module.scss";

export interface IEvaluationsProps {
    feedback: string;
}

export default function Evaluations(props: IEvaluationsProps) {
    const questionNumbers: string[] = [];
    const markingNotes: string[][] = [];
    const marksReceived: string[] = [];
    const comments: string[] = [];
    props.feedback.split('###').filter(Boolean).forEach(question => {
        const split: string[] = question.split(/\$\$\$|@@@/).map((s) => {
            return s.trim().replace("**", "").replace("**", "");
        });
        questionNumbers.push(split[0].trim());
        const notes: string[] = []
        for (let i = 1; i < split.length - 1; i++) {
            notes.push(split[i].trim());
        }
        markingNotes.push(notes);
        if (split[split.length - 1].includes('---')) {
            const split2: string[] = split[split.length - 1].split('---').map((s) => s.trim());
            marksReceived.push(split2[0].substring(split2[0].length - 3));
            comments.push(split2[1].trim());
        } else {
            const v = split[split.length - 1].trim();
            marksReceived.push(v.substring(v.length - 3));
        }
    });
    const n = questionNumbers.length;

    return (
        <div className={styles.evaluations_ctr}>
            {/*{Array.from(Array(n).keys()).map(val=>{*/}
            {/*    return(<span key={val}>{val}</span>)*/}
            {/*})}*/}
            {Array.from({ length: n }, (_, index) => (
                <QuestionEvaluation question={questionNumbers[index]}
                                    notes={markingNotes[index]}
                                    marks={marksReceived[index]}/>
            ))}
        </div>
    )
}