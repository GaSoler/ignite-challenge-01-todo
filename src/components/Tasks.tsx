import { Notepad, PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Task } from './Task';
import styles from './Tasks.module.css';

import { v4 as uuid } from 'uuid'


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
    const [newTask, setNewTask] = useState('');

    function handleToggleCompleteTask(id: string) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.isFinished = !task.isFinished
            }
            return task
        })

        setTasks(newTasks)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        const taskToAdd = {
          id: uuid(),
          content: newTask,
          isFinished: false,
        }
    
        setTasks([...tasks, taskToAdd])
        setNewTask('')
    }

    function handleDeleteTask(id: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id)
    
        setTasks(tasksWithoutDeletedOne)
    }

    const tasksCreated = tasks.length

    const tasksComplets = tasks.filter(task => task.isFinished).length 

    return (
        <>
            <form  className={styles.newTask} onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                />    
                <button className={styles.buttonContainer} type='submit'>
                    <span>Criar</span>
                    <PlusCircle />
                </button>
            </form>    

            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.taskCreated}>
                        <strong>Tarefas criadas</strong><span>{tasksCreated}</span>
                    </div>
                    <div className={styles.taskFinished}>
                        <strong>Tarefas conclu??das</strong>
                        <span>
                            {tasksComplets} de {tasksCreated}
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
                                onToggleCompleted={handleToggleCompleteTask}
                                onDeleteTask={handleDeleteTask}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyTasks}>
                        <Notepad size={56} />
                        <div>
                            <strong>Voc?? ainda n??o tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus iten a fazer</span>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}