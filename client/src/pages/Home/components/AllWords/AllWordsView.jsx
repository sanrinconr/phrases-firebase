import { useEffect } from "react"
import styles from "./AllWordsView.module.scss"
export function AllWordsView({words}){
    console.log("render view!")
    if(words){
        return <div className={styles.container}>
        <div className={styles.title}>
            <span>Que frases se han ingresado? </span>
        </div>
        <ul>
        {words.map((el,i)=>{
            return <li key={i}>{el.name}</li>
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