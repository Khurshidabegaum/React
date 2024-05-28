import axios from "axios"
import { useEffect, useState } from "react"
import style from "./crud.module.css"
import { Link } from "react-router-dom";

const User=()=>
    {
        let [employees,setEmployees]=useState([]);
        let [load,setLoad]=useState(false)
        useEffect(()=>{
            
            axios.get("http://localhost:5000/employee")
            .then((resp)=>{setEmployees(resp.data);

            })
            .catch(()=>{console.log("Errrrorrrrrrr");});
            setLoad(false)
        },[load]);

        let deleteUser=(id)=>
            {
                axios.delete(`http://localhost:5000/employee/${id}`)
                setLoad(true)

            }
        return(                
                <div id={style.userpage}>
                {employees.map((employee)=>
                {        
                     return(
                        <div>
                <table>
                        <tr>
                        <td>Name</td>
                        <td>:{employee.empName}</td>
                        </tr>  
                        <tr>
                        <td>Salary</td>
                        <td>:{employee.empSalary}</td>
                        </tr>
                        <tr>
                        <td>company</td>
                        <td>:{employee.empCompany}</td>
                        </tr>  
                        <tr>
                            <td>
                                <button><Link to={`/edit/${employee.id}`}>Edit</Link></button>
                                </td>
                                
                                
                                <td>
                                    <button onClick={()=>{deleteUser(employee.id)}}>Delete</button>
                                </td>
                                
                                
                                </tr>             
                        
                        
                         </table>
                         </div>
                        
           
                     );
                 })}
                 </div>
                

           
             
            
        )
    };
    export default User