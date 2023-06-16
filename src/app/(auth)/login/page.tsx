import Link from "next/link";

import Style from './style.module.css';
import BoxLogin from "@/app/components/boxLogin/boxLogin";

export default function Login(){
    return(
        <div className={Style.content}>
            <BoxLogin title="LOGIN" />
        </div>
    )
}