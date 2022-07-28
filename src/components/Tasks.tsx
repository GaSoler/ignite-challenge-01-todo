import styles from './Tasks.module.css';
import { PlusCircle } from 'phosphor-react'

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

            <main>
                <div>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </main>
        </>
    );
}