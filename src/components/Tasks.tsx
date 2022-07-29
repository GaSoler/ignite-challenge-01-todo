import { Notepad, PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Task } from './Task';
import styles from './Tasks.module.css';

import {v4 as uuid} from 'uuid'

type Task = {
    id: string
    isFinished: boolean
    content: string
}

const initialTasks = [
    {
        id: uuid(),
        isFinished: false,
        content: 'Estudar TypeScript'
    },
    {
        id: uuid(),
        isFinished: true,
        content: 'Terminar projeto'
    }
]

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const tasksCreated = tasks.length

   /*  const tasksComplets = */ 

    return (
        <>
            <form  className={styles.newTask} >
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                />    
                <button className={styles.buttonContainer} type='submit'>
                    <span>Criar</span>
                    <PlusCircle />
                </button>
            </form>    

            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.taskCreated}>
                        <strong>Tarefas criadas</strong><span>3</span>
                    </div>
                    <div className={styles.taskFinished}>
                        <strong>Tarefas concluídas</strong>
                        <span>
                            1 de 3
                        </span>
                    </div>
                </header>
                {tasks.length > 0 ? (
                    <div className={styles.tasks}>
                        {tasks.map((task) => (
                            <Task 
                                key={task.id}
                                id={task.id}
                                content={task.content}
                                isFinished={task.isFinished}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyTasks}>
                        <Notepad size={56} />
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus iten a fazer</span>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}