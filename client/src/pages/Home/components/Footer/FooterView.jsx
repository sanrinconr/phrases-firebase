import styles from "./FooterView.module.scss"
import github from "./img/githubBlack.png"
import linkedIn from "./img/linkedIn.png"

export function FooterView(){
    return  <div className={styles.container}>
        <div className={styles.footer}>
        <div className={styles.creator}>
            Aprendiendo firebase, sanrinconr 🙆‍♂️
        </div>
        <div className={styles.social}>
            <a href="https://github.com/sanrinconr" target="_blank" rel="noopener noreferrer" >
                <img src={github} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/sanrinconr/" target="_blank" rel="noopener noreferrer" >
                <img src={linkedIn} alt=""/>
            </a>
        </div>
    </div>
    </div>   
}