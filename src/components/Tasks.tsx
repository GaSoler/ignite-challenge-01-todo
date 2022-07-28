import styles from './Tasks.module.css';
import { Notepad, PlusCircle } from 'phosphor-react'

export function Tasks() {
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
                <div className={styles.emptyTasks}>
                    <Notepad size={56} />
                    <div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus iten a fazer</span>
                    </div>
                </div>
            </main>
        </>
    );
}