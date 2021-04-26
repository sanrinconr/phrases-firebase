import { AllWordsContainer } from "./components/AllWords/AllWordsContainer"
import { InputWordsContainer } from "./components/InputWords/InputWordsContainer"
import { TitleContainer } from "./components/Title/TitleContainer"
import styles from "./HomeView.module.scss"
export function HomeView(){
return<div className={styles.elements}>
            <div>
                <TitleContainer />
            </div>
            <div>
                <InputWordsContainer />
            </div>
            <div>
                <AllWordsContainer />
            </div>
            
        </div>
        }