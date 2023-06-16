import Link from "next/link";
import Styles from "./styles.module.css"
interface ComumButton{
    text:string;
    onClick?: () => void;
}
export default function Button(props:ComumButton){
    return(
        <button  className={Styles.button} onClick={props.onClick}>
            {props.text}
        </button>
    );
}