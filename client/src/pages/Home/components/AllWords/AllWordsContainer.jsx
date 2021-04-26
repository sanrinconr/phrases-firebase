import { AllWordsView } from "./AllWordsView";
import { useFirestore } from 'reactfire';
import { useEffect, useState } from "react";

export function AllWordsContainer(){
    const [words, setWords] = useState()

    const doc = useFirestore().collection("words").orderBy("created","desc")

    useEffect(() => { 
        const unsubscribe = doc.onSnapshot(snap => {
            // const data = snap.docs.map(doc=>{
            //     return {name:doc.data().name, created:doc.data().created}
            // })
            setWords(snap)
        });

        //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
        return () => unsubscribe()
    }, []);

    // if(words){
    //     return <div>
    //     {words.map(el=><ul>{el.name}</ul>)}
    // </div>
    // }else{
    //     return "Loading..."
    // }
    return <AllWordsView  words={words}/>
    
    
}