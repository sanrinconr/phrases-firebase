import { InputWordsView } from "./InputWordsView";
import {useFirestore } from 'reactfire';

export function InputWordsContainer(){
    const firestore=useFirestore()

    return <InputWordsView submitCallback={onClickButtonSubmit}/>

    async function onClickButtonSubmit(message, contact){
        await firestore.collection("words").add({
                name:message,
                created:Date.now()
        })
        return true
    }
}
