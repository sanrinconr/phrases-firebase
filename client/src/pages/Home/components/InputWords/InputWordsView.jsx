import { useState } from "react"
import styles from "./InputWordsView.module.scss"

export function InputWordsView({submitCallback}){
    const [input,setInput] = useState({
        message:"",
    })

    function handleChange(e){
        const target = e.target;
        const name =  target.name;
        const value = target.value;
        setInput({...input,[name]:value})
        console.log(input)
    }
    function handleSubmit(e){
        e.preventDefault()
        submitCallback(input.message)
        .then(()=>{
            setInput({
                message:"",
            })
        })
    }


    return <form 
    onSubmit={(e)=>handleSubmit(e)}
    className={styles.form}>	
    <textarea
        onChange={handleChange}
        name="message" 
        placeholder="Message" 
        rows="6"
        value={input.message} 
        required></textarea>
    <button 
        id="send" 
        name="send" 
        type="submit" 
        className="btn">SEND</button>
    </form>	
}