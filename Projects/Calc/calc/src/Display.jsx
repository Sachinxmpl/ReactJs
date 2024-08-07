import styles from "./Display.module.css"


export default function Display({display}){

    return (
        <div className={styles.display}>
            <input type="text" className={styles.input} value ={display}  readOnly/>
        </div>
    )
}