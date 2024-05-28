
import style from "./findcoder.module.css"
import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"

const Findcoder=()=>
    {
        return(
         <div id={style.nav}>
                <article>
                    <div className="{style.logo}">
                        <Logo/>
                    </div>
                    <div className="{style.menu}"></div>
                    <Menu/>
                    <div className="{style.btn}"></div>
                    <Button/>
                </article>

            </div>
        )
    }
    export default Findcoder