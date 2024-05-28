
import style from "./crud.module.css"
import { Link } from "react-router-dom"
const Crud=()=>
    {

        
        return(
            
            <div id={style.nav}>
                <Link to="/"> CREATE USERS</Link>
                <Link to="/user">  USERS</Link>

            </div>

            

        )
    }
    export default Crud