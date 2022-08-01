import { Trash } from "phosphor-react";

import styles from './Task.module.css';

type TaskProps = {
    id: string
    isFinished: boolean;
    content: string
    onToggleCompleted: (id: string) => void
    onDeleteTask: (id: string) => void
}

export function Task({ id, isFinished, content, onDeleteTask, onToggleCompleted}: TaskProps) {
    return (
        <div className={isFinished ? styles.taskFinished : styles.task}>
            <input 
                type="checkbox" 
                defaultChecked={isFinished}
                onChange={() => onToggleCompleted(id)}
            />
            <span className={isFinished ? 'finished' : ''}>{content}</span>
            <button onClick={() => onDeleteTask(id)}>
                <Trash size={24} />
            </button>
        </div>
    );
}