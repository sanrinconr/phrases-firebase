import styles from "./AllWordsView.module.scss"
export function AllWordsView({words}){
    if(words){
        return <div className={styles.container}>
        <div className={styles.title}>
            <span>Que frases se han ingresado? </span>
        </div>
        <ul>
        {words.docs.map((el,i)=>{
            return <li key={i}>{el.data().name}</li>
            })}
        </ul>
    </div>
    }else{
        return <div className={styles.container}>
        <div className={styles.title}>
            <span>Que frases se han ingresado? </span>
        </div>
        Loading...
    </div>
    }
}