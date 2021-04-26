import styles from "./TitleView.module.scss"
export function TitleView(){
    return <div>
        <div className={styles.title}>
            <span>Ingresa lo que quieras!</span>
        </div>
        <div className={styles.description}>
            <span>Si todos ingresamos algo, los resultados pueden ser interesantes!</span>
        </div>
    </div>
}