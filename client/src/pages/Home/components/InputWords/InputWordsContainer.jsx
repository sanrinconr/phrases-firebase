import { InputWordsView } from "./InputWordsView";
import {useFirestore } from 'reactfire';

export function InputWordsContainer(){
    const firestore=useFirestore()

    return <InputWordsView submitCallback={onClickButtonSubmit}/>

    function onClickButtonSubmit(message, contact){
        return firestore.collection("words").add({
            name:message,
            created:Date.now()
        })
        .then((res)=>{
            return true
        })
        .catch(err=>{
            return false
        })
    }
}
