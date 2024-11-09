export interface IQuestionEvaluationProps {
    question: string;
    notes: string[];
    marks: string;
}

export default function QuestionEvaluation(props: IQuestionEvaluationProps) {
    return (
        <div>
            <span>
                {props.question}
            </span>
            <div>
                {props.notes.map((note, i) => {
                    return(<span key={i}>{note}</span>)
                })}
            </div>
            <span>
                {props.marks}
            </span>
        </div>
    );
}