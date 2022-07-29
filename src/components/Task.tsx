import { Trash } from "phosphor-react";

import styles from './Task.module.css';

type TaskProps = {
    id: string
    isFinished: boolean;
    content: string
}

export function Task({ id, isFinished, content}: TaskProps) {
    return (
        <div className={isFinished ? styles.taskFinished : styles.task}>
            <input 
                type="checkbox" 
                defaultChecked={isFinished}
            />
            <span className={isFinished ? 'finished' : ''}>{content}</span>
            <button>
                <Trash size={24} />
            </button>
        </div>
    );
}