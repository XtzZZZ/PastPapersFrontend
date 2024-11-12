import styles from "@styles/components/QuestionEvaluation.module.scss";

export interface IQuestionEvaluationProps {
    question: string;
    notes: string[];
    marks: string;
}

export default function QuestionEvaluation(props: IQuestionEvaluationProps) {
    return (
        <div className={styles.feedback_ctr}>
            <span className={styles.feedback_span}>
                {props.question}
            </span>
            <div className={styles.feedback_marking_ctr}>
                {props.notes.map((note, i) => {
                    return(<span key={i}>{note}<br/><br/></span>)
                })}
            </div>
            <span className={styles.feedback_span}>
                Marks awarded: {props.marks}
            </span>
        </div>
    );
}