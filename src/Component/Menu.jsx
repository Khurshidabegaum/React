//import { Link } from "react-router-dom"
import style from "./findcoder.module.css"

const Menu=()=>
    {
        return(
            <div>

               <ol id={style.menuBlock}>

                
                <li><a href="/explore"> Explore Work</a></li>
                <li><a href=""> Hire Talents</a></li>
                <li><a href=""> dev board</a></li>
                <li><a href=""> Challenges</a></li>


                {/* <Link to="/explore"> Explore Work</Link>
            <Link to="/hire"> Hire Talents</Link>
                <Link to="/dev"> dev board</Link>
                <Link to="challenges"> Challenges</Link> */}
               
               </ol>
            </div>
        )
    }
    export default Menu