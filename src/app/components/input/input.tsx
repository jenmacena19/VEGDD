import Style from './styles.module.css'
interface HandleInput{
    type:string;
    text:string;
}

export default function Input(props:HandleInput){
    return(
        <input type={props.type} value={props.text} style={{width:'10%'}}>
        </input>
    )
}