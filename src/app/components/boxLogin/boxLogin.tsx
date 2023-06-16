import Link from "next/link";
import Button from "../button/button";
import Input from "../input/input";
import Styles from "./styles.module.css"

interface HandleBoxLogin {
    title: string;
}

export default function BoxLogin(props: HandleBoxLogin) {
    return (
        <div className={Styles.container_box}>
            {/*<Input type="text" text="nickname"/>
            <Input type="text" text="email"/>
            <Input type="password" text="senha"/>
            <Button text='Registrar'/>
            <Link href='/'>
            </Link>
            */}

            <form>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="email" />
                </div>

            </form>
            <Button text='Registrar' />
        </div>
    )

}